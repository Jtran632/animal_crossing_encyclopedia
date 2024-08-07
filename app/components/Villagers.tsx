"use client";
/*eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import VillagerModal from "./VillagerModal";
import ScrollUp from "./ScrollUp";
export default function Villagers({ data, extraData }: any) {
  console.log(data, "animalcrossing-pkg data");
  console.log(extraData, "nookpedia data");
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
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-4 my-2">
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
            <div className="flex w-full">
              <div
                style={{
                  backgroundColor: i.bubbleColor,
                }}
                className={`border border-black border-b-0 w-full rounded-tl-md rounded-tr-md`}
              >
                {i.name}
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
      <div className="flex justify-center gap-4 p-4 ">
        {pages.map((i) => (
          <button
            className={`border-2 border-green-400 px-1 text-center ${
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
    <>
      {modal.hidden && (
        <div
          className={`text-black capitalize ${
            modal.hidden === true ? "" : "px-0"
          } p-2 min-h-screen`}
        >
          <>
            <div className="flex justify-center ">
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
            <VillagerGrid />
            {search === "" && modal.hidden && <ScrollUp />}
          </>
        </div>
      )}
      {!modal.hidden && (
        <VillagerModal
          modal={modal}
          setModal={setModal}
          extraInfo={extraInfo}
        />
      )}
    </>
  );
}
