"use client";
/*eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { IoMale, IoFemale } from "react-icons/io5";
import { useState, useEffect } from "react";
import { items } from "animal-crossing";

interface Item {
  url: string;
  name: string;
}
interface itemPicsI {
  umbrella: Item;
  wallpaper: Item;
  flooring: Item;
}
export default function VillagerModal({ modal, setModal, extraInfo }: any) {
  const [hover, setHover] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [itemPics, setItemPics] = useState<itemPicsI>({
    "umbrella": { "url": "", "name": "" },
    "wallpaper": { "url": "", "name": "" },
    "flooring": { "url": "", "name": "" },
  });
  console.log("modalData", modal);

  useEffect(() => {
    console.log(extraInfo, "extraInfo");
    window.scrollTo(0, 0);
    function getItem(s: string) {
      return items.find((i) => i.name === modal.data[s]);
    }
    let umbrella = getItem("defaultUmbrella");
    let wallpaper = getItem("wallpaper");
    let flooring = getItem("flooring");
    let result = {
      umbrella: {
        url: umbrella?.storageImage ?? "",
        name: umbrella?.name ?? "",
      },
      wallpaper: { url: wallpaper?.image ?? "", name: wallpaper?.name ?? "" },
      flooring: { url: flooring?.image ?? "", name: flooring?.name ?? "" },
    };
    setItemPics({ ...itemPics, ...result });
  }, [extraInfo]);

  function suffix(n: number) {
    if (n % 100 >= 11 && n % 100 <= 13) {
      return "th";
    }
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  function GeneralItem(s: string, extraInfoUsed: boolean, topInfo: boolean) {
    let info = extraInfoUsed ? extraInfo[s] : modal.data[s];
    if (topInfo) {
      return (
        <div className="grid w-full shadow-sm shadow-slate-500">
          <div className="px-2 py-1 font-bold bg-green-200 capitalize">{s}</div>
          {s === "gender" ? (
            <div className="flex items-center px-2 py-1 border-t-2 border-orange-100 bg-white gap-2">
              {info === "Male" ? <IoMale /> : <IoFemale />}
              {info}
            </div>
          ) : (
            <div className="px-2 py-1 bg-white border-t-2 border-orange-100">
              {info}
            </div>
          )}
        </div>
      );
    } else {
      let a = suffix(modal.data.birthday_day);
      return (
        <>
          {info !== "" && (
            <div className="grid grid-cols-3 border-2 border-orange-100 rounded-md shadow-sm shadow-slate-500">
              <div className="bg-green-200 border-r-2 border-r-orange-100 border-green text-start px-2">
                {s === "defaultUmbrella" ? "Umbrella" : s}
              </div>
              {/* birthday case */}
              <div className="flex col-span-2 justify-center gap-1 bg-white">
                {s.includes("birthday") ? (
                  <>
                    {extraInfo.birthday_month}
                    <div>
                      {extraInfo.birthday_day}
                      {a}
                    </div>
                  </>
                ) : (
                  info
                )}
              </div>
            </div>
          )}
        </>
      );
    }
  }
  function GeneralInfo() {
    return (
      <div className="flex flex-col text-xs text-center w-96 gap-1 border-t-4 border-orange-100 mt-2 p-2 bg-emerald-200">
        {/*top info */}
        <div className="flex  border-4 border-orange-100 rounded-md">
          {GeneralItem("species", false, true)}
          {GeneralItem("personality", false, true)}
          {GeneralItem("personality", true, true)}
          {GeneralItem("gender", false, true)}
        </div>
        {/* bottom info */}
        <div className="flex flex-col gap-1">
          {GeneralItem("birthday", true, false)}
          {GeneralItem("debut", true, false)}
          {GeneralItem("hobby", false, false)}
          {GeneralItem("favoriteSong", false, false)}
          {GeneralItem("defaultClothing", false, false)}
          {GeneralItem("defaultUmbrella", false, false)}
          {GeneralItem("catchphrase", false, false)}
          {GeneralItem("favoriteSaying", false, false)}
        </div>
      </div>
    );
  }
  function RenderItemPics() {
    let imageNames: itemPicsKey[] = ["umbrella", "wallpaper", "flooring"];
    type itemPicsKey = keyof itemPicsI;
    return (
      <div className="flex items-center w-6 gap-1">
        {imageNames.map((i: itemPicsKey, index: number) => (
          <img
            key={index}
            className="hover:scale-125"
            src={itemPics[i].url}
            alt={itemPics[i].name}
            onMouseEnter={() => {
              setHover(true);
              setHoverText(itemPics[i].name);
            }}
            onMouseLeave={() => setHover(false)}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className=" bg-green-300 border-8 border-orange-100 rounded-xl  text-xs shadow-slate-500 shadow-sm text-black"
      whileInView={{
        opacity: [0.5, 1],
        scale: [0.5, 1.25],
        transition: { duration: 0.15 },
      }}
    >
      <div className="m-2 border-2 rounded-md border-orange-100">
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full px-2 pt-2">
            {RenderItemPics()}
            <button
              onClick={() => setModal({ data: {}, hidden: true })}
              className=" bg-white border-2 border-orange-200 rounded-full h-6 w-6 font-thin text-orange-400 shadow-sm shadow-slate-400 hover:scale-125"
            >
              X
            </button>
          </div>
          <div className="flex w-full h-2 text-[8px] px-1">
            {hover && hoverText}
          </div>
          <div className="justify-center items-center px-10">
            {modal.data.nh_details !== null ? (
              <div className="flex justify-end items-center mb-2 border-4 border-white rounded-full divide-x-2 divide-white shadow-sm shadow-slate-400">
                <img
                  src={modal.data?.iconImage}
                  alt={modal.data.name}
                  className="h-10 bg-green-200 rounded-full rounded-r-none px-1"
                ></img>
                <div
                  className={`flex items-center justify-center text-2xl font-bold px-2 h-10 bg-orange-300 text-white rounded-full rounded-l-none`}
                >
                  {modal.data.name}
                </div>
              </div>
            ) : (
              <div
                className={`text-2xl font-bold border-4 border-white rounded-full px-2  h-10 bg-orange-400 text-white`}
              >
                {modal.data.name}
              </div>
            )}
          </div>
          <img
            className="h-36 rounded-xl"
            src={extraInfo.image_url}
            alt={modal.data.name}
          />
          <GeneralInfo />
        </div>
      </div>
    </motion.div>
  );
}
