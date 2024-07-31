"use client";
import { motion } from "framer-motion";
/*eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo } from "react";
import VillagerModal from "./villagerModal";
export default function Villagers({ data }: any) {
  console.log(data);
  const [curPage, setCurPage] = useState(1);
  const [modal, setModal] = useState({
    data: data,
    hidden: true,
  });
  const pages = Array(Math.ceil(data.length / 50))
    .fill(0)
    .map((_, i) => i + 1);
  const start = (curPage - 1) * 50;
  const end = curPage * 50;
  const paginatedData = useMemo(() => data.slice(start, end), [curPage, data]);
  function VillagerGrid() {
    return (
      <div className="grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {paginatedData.map((i: any, index: number) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            aria-disabled
            className="flex flex-col text-center items-center h-64 w-56"
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
                className="mx-auto h-36"
                src={i.image_url}
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
    return (
      <div className="flex w-full justify-center gap-8 p-4 ">
        {pages.map((i) => (
          <button
            className={`border-2 border-green-400 px-2 text-center w-10 bg-white ${
              i === curPage && "bg-green-300"
            }`}
            onClick={() => setCurPage(i)}
          >
            {i}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="text-black capitalize px-40">
      <Pages />
      {!modal.hidden && (
        <VillagerModal data={data} modal={modal} setModal={setModal} />
      )}
      {modal.hidden ? <VillagerGrid /> : null}
    </div>
  );
}
