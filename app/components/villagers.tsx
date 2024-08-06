"use client";
import { motion } from "framer-motion";
/*eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo } from "react";
import VillagerModal from "./VillagerModal";
import { villagers } from "animal-crossing";
export default function Villagers({ data, extraData }: any) {
  // console.log(extraData, "extraData");
  const [curPage, setCurPage] = useState(1);
  const [modal, setModal] = useState({
    data: data,
    hidden: true,
  });
  const [curData, setCurData] = useState(data);
  const [extraInfo, setExtraInfo] = useState({});
  const [search, setSearch] = useState("");
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
  }, [search, data]);

  useEffect(() => {
    extraData.filter((i: any) =>
      modal.data.name === i.name ? setExtraInfo(i) : null
    );
  }, [modal.data.name, extraData]);

  let pages = Array(Math.ceil(data.length / 50))
    .fill(0)
    .map((_, i) => i + 1);

  const start = (curPage - 1) * 50;
  const end = curPage * 50;
  const paginatedData = useMemo(
    () => curData.slice(start, end),
    [curPage, curData, start, end]
  );
  function VillagerGrid() {
    return (
      <div className="grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-2">
        {paginatedData.map((i: any, index: number) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            aria-disabled
            className="flex flex-col text-center items-center "
            key={index}
            onClick={() => setModal({ data: i, hidden: false })}
          >
            <div className="flex justify-between w-full">
              <div className="border border-black w-full bg-white">
                {i.name}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-black bg-white h-full w-full">
              <img
                className="h-32"
                src={i.photoImage}
                alt=""
                loading="lazy"
              ></img>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }
  function Pages() {
    // console.log("villagers", villagers);
    return (
      <div className="flex w-full justify-center gap-4 p-4 ">
        {pages.map((i) => (
          <button
            className={`border-2 border-green-400 px-2 text-center w-10 ${
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
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  return (
    <div className="text-black capitalize px-40">
      {!modal.hidden && (
        <VillagerModal
          modal={modal}
          setModal={setModal}
          extraInfo={extraInfo}
        />
      )}
      {modal.hidden ? (
        <>
          <form className="w-full flex justify-center">
            <input
              className="border-2 border-black flex justify-center items-center w-96"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button
              className="border-2 border-black bg-white px-2"
              onClick={() => setSearch("")}
              onSubmit={onSubmit}
              value={"Reset"}
            >
              Clear
            </button>
          </form>
          {search === "" && <Pages />}
          <VillagerGrid />
        </>
      ) : null}
    </div>
  );
}
