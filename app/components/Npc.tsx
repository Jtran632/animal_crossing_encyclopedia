"use client";
/*eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import ScrollUp from "./ScrollUp";
import { IoMale, IoFemale } from "react-icons/io5";
import NpcModal from "./NpcModal";
export default function Npcs({ data, cargoData }: any) {
  // console.log(data);
  const [loading, setLoading] = useState(true);
  const [curPage, setCurPage] = useState(1);
  const [curData, setCurData] = useState(data);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState({
    data: data,
    hidden: true,
  });
  let extraData = cargoData.cargoquery;
  function CurExtraData(s: string) {
    let temp = {};
    for (let i = 0; i < extraData.length; i++) {
      if (extraData[i].title.name.toLowerCase() === s.toLowerCase()) {
        temp = extraData[i].title;
        break;
      }
    }
    return temp;
  }
  useEffect(() => {
    if (search === "") {
      setCurData(data);
    } else {
      setCurData(
        data.filter((i: any) =>
          i.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setCurPage(1);
    setLoading(false);
  }, [search, data]);

  let pages = Array(Math.ceil(data.length / 20))
    .fill(0)
    .map((_, i) => i + 1);

  const start = (curPage - 1) * 20;
  const end = curPage * 20;
  const paginatedData = useMemo(
    () => curData.slice(start, end),
    [curPage, curData, start, end]
  );
  function NpcGrid() {
    return (
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-4 my-2">
        {paginatedData.map(
          (i: any, index: number) =>
            i.iconImage && (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                aria-disabled
                className="flex flex-col text-center items-center "
                key={index}
                onClick={() => {
                  i.name.toLowerCase() !== "redd" &&
                    setModal({ data: i, hidden: false });
                }}
              >
                <div className="flex w-full">
                  <div
                    style={{
                      backgroundColor: i.bubbleColor,
                    }}
                    className={`border border-black
                    } border-b-0 w-full rounded-tl-md rounded-tr-md`}
                  >
                    <div>{i.name}</div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: i.bubbleColor,
                  }}
                  className="flex flex-col items-center justify-center border-2 border-t border-black bg-white h-full w-full"
                >
                  <img
                    className="h-32"
                    src={i.photoImage ? i.photoImage : i.iconImage}
                    alt=""
                    loading="lazy"
                  ></img>
                  <div className="text-xs w-full divide-y">
                    <div className="flex justify-center items-center w-full bg-white">
                      <div className="flex gap-1 items-center">
                        {i.gender === "Male" ? (
                          <IoMale className="text-blue-400" />
                        ) : (
                          <IoFemale className="text-red-500" />
                        )}
                        {i.gender}
                      </div>
                    </div>
                    <div className="w-full">Birthday - {i.birthday}</div>
                    {i.name.toLowerCase() === "redd" && (
                      <div>No modal Available</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>
    );
  }
  function Pages() {
    return (
      <div className="flex justify-center gap-1 p-4 ">
        {pages.map((i) => (
          <button
            className={`border-2 border-green-400 px-1 text-center rounded-md ${
              i === curPage ? "bg-green-300" : "bg-white"
            }`}
            key={i}
            onClick={() => setCurPage(i)}
          >
            {i}
          </button>
        ))}
      </div>
    );
  }
  {
    loading && <div>Loading</div>;
  }
  return (
    <div
      className={`text-black capitalize
       p-2 h-min-screen`}
    >
      {!loading ? (
        <>
          {modal.hidden && (
            <>
              <div className="flex justify-center">
                <input
                  className="border-2 border-black flex justify-center items-center "
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
                <button
                  className="border-2 border-black bg-white px-2"
                  onClick={() => setSearch("")}
                >
                  Clear
                </button>
              </div>
              {search === "" && <Pages />}
              <NpcGrid />
              {search === "" && modal.hidden && <ScrollUp />}
            </>
          )}
          {!modal.hidden && (
            <NpcModal
              modal={modal}
              setModal={setModal}
              extraInfo={CurExtraData(modal.data.name)}
            />
          )}
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
