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
export default function VillagerModal({ modal, setModal, extraInfo }: any) {
  const [umbrella, setUmbrella] = useState<Item>({ url: "", name: "" });
  const [hover, setHover] = useState(false);
  const [hoverText, setHoverText] = useState("");
  useEffect(() => {
    console.log(extraInfo, "extraInfo");
    window.scrollTo(0, 0);
    let name = "";
    if (extraInfo.umbrella !== "") {
      name = extraInfo.umbrella.toLowerCase();
    } else {
      name = extraInfo.umbrella_hhp.toLowerCase();
    }
    console.log(name);

    // console.log(items);
    function getItem(s: string) {
      return items.find((i) => i.name.toLowerCase() === s);
    }
    let umbrella = getItem(name);
    let result = {
      url: umbrella?.storageImage ?? "",
      name: umbrella?.name ?? "",
    };
    setUmbrella(result);
  }, [extraInfo]);
  useEffect(() => {
    console.log(umbrella, "umbrella");
  }, [umbrella]);
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
          <div className="px-2 py-1 font-bold bg-blue-200 capitalize">{s}</div>
          {s === "gender" ? (
            <div className="flex items-center px-2 py-1 border-t-2 border-pink-100 bg-white gap-2">
              {info === "Male" ? (
                <IoMale className="text-blue-400" />
              ) : (
                <IoFemale className="text-red-500" />
              )}
              {info}
            </div>
          ) : (
            <div className="px-2 py-1 bg-white border-t-2 border-pink-100">
              {info}
            </div>
          )}
        </div>
      );
    } else {
      let a = suffix(extraInfo.birthday.split(" ")[1]);
      return (
        <div className="flex justify-center w-full">
          {info !== "" && (
            <div className="flex w-full border-2 border-pink-100 rounded-md shadow-sm shadow-slate-500">
              <div className="w-1/3 bg-blue-200 border-r-2 p-2  flex items-center justify-start">
                {s.replace("favorite", "").replace("default", "")}
              </div>

              {/* birthday case */}
              <div className="w-2/3 gap-1 bg-white text-pretty p-2">
                {s.includes("birthday") ? (
                  <>
                    <div>{extraInfo.birthday + a}</div>
                  </>
                ) : (
                  info
                )}
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  function GeneralInfo() {
    return (
      <div className="flex flex-col text-xs text-center gap-1 border-t-2 border-pink-100 mt-2 p-2 bg-blue-300">
        {/*top info */}
        <div className="flex border-4 border-pink-100 rounded-md">
          {GeneralItem("species", true, true)}
          {GeneralItem("sign", true, true)}
          {GeneralItem("gender", true, true)}
        </div>
        {/* bottom info */}
        <div className="flex flex-col gap-1">
          {GeneralItem("birthday", true, false)}
          {GeneralItem("hobby", true, false)}
          {extraInfo.umbrella
            ? GeneralItem("umbrella", true, false)
            : GeneralItem("umbrella_hhp", true, false)}
          {GeneralItem("quote", true, false)}
        </div>
      </div>
    );
  }
  function RenderUmbrella() {
    return (
      <div className="flex items-center w-6 gap-1">
        <img
          className="hover:scale-125"
          src={umbrella.url}
          alt={umbrella.name}
          onMouseEnter={() => {
            setHover(true);
            setHoverText(umbrella.name);
          }}
          onMouseLeave={() => setHover(false)}
        />
      </div>
    );
  }
  return (
    <motion.div
      className=" bg-blue-300 border-8 border-pink-100 rounded-xl text-xs shadow-slate-500 shadow-sm text-black"
      whileInView={{
        opacity: [0.5, 1],
        scale: [0.5, 1],
        transition: { duration: 0.15 },
      }}
    >
      <div className="m-2 border-2 rounded-md border-pink-100">
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full px-2 pt-2">
            {RenderUmbrella()}
            <button
              onClick={() => setModal({ data: {}, hidden: true })}
              className=" bg-white border-2 border-pink-200 rounded-full h-6 w-6 font-thin text-orange-400 shadow-sm shadow-slate-400 hover:scale-125"
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
                  className="h-10 bg-blue-200 rounded-full rounded-r-none px-1"
                ></img>
                <div
                  className={`flex items-center justify-center text-2xl font-bold px-2 h-10 bg-pink-200 text-white text rounded-full ${
                    modal.data.iconImage ? "rounded-l-none" : ""
                  }`}
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
            src={
              extraInfo?.image_url ? extraInfo.image_url : extraInfo?.photo_url
            }
            alt={extraInfo.photo}
          />
          <div className="xs:min-w-80 min-w-96">
            <GeneralInfo />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
