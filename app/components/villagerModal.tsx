import { motion } from "framer-motion";
import { useState } from "react";
export default function VillagerModal({ modal, setModal }: any) {
  console.log(modal);
  const games = {
    "DnM": "Doubutsu no Mori",
    "DnM+": "Doubutsu no Mori +",
    "AC": "Animal Crossing",
    "E_PLUS": "Doubutsu no Mori e+",
    "iQue": "Dòngwù Sēnlíng",
    "WW": "Animal Crossing: Wild World",
    "CF": "Animal Crossing: City Folk",
    "NL": "Animal Crossing: New Leaf",
    "NH": "Animal Crossing: New Horizons",
  };
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

  function GeneralInfo() {
    let a = suffix(modal.data.birthday_day);
    return (
      <div className="flex flex-col text-xs text-center w-96 gap-1 border-4 border-white rounded-md mt-2 p-2 bg-emerald-200">
        {modal.data.id ? (
          <div className="w-full flex justify-end">
            <div className="border border-orange-300 rounded-md bg-white px-2 w-fit">
              {modal.data.id}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex w-full">
          <div className="grid w-1/4">
            <div className="border-2 rounded-tl-xl px-2 py-1 font-bold bg-green-100">
              Species
            </div>
            <div className="border-2 rounded-bl-xl px-2 py-1 bg-white">
              {modal.data.species}
            </div>
          </div>
          <div className="grid w-1/4">
            <div className="border-2 py-1 font-bold bg-green-100">
              Personality
            </div>
            <div className="border-2 px-2 py-1 bg-white">
              {modal.data.personality}
            </div>
          </div>
          <div className="grid w-1/4">
            <div className="border-2 px-2 py-1 font-bold bg-green-100">
              Sign
            </div>
            <div className="border-2 px-2 py-1 bg-white">{modal.data.sign}</div>
          </div>
          <div className="grid w-1/4">
            <div className="border-2 rounded-tr-xl px-2 py-1 font-bold bg-green-100">
              Gender
            </div>
            <div className="border-2 rounded-br-xl px-2 py-1 bg-white">
              {modal.data.gender}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {/* birthday */}
          {modal.data.birthday_month !== "" && (
            <div className="grid grid-cols-3 border-2 rounded-xl ">
              <div className="bg-green-100 border-r-2 border-green text-start px-2">
                Birthday
              </div>
              <div className="flex col-span-2 justify-center gap-1 bg-white">
                <div>{modal.data.birthday_month}</div>
                <div>
                  {modal.data.birthday_day}
                  {a}
                </div>
              </div>
            </div>
          )}
          {/* debut */}
          {modal.data.debut !== "" && (
            <div className="grid grid-cols-3 border-2 rounded-xl ">
              <div className="bg-green-100 border-r-2 border-green text-start px-2">
                Debut
              </div>
              <div className="px-2 bg-white col-span-2">{modal.data.debut}</div>
            </div>
          )}
          {/* clothing */}
          {modal.data.clothing !== "" && (
            <div className="grid grid-cols-3 border-2 rounded-xl ">
              <div className="bg-green-100 border-r-2 border-green text-start px-2">
                Clothing
              </div>
              <div className="px-2 bg-white col-span-2">
                {modal.data.clothing}
              </div>
            </div>
          )}
          {/* Catchphrase */}
          {modal.data.phrase !== "" && (
            <div className="grid grid-cols-3 border-2 rounded-xl ">
              <div className="bg-green-100 border-r-2 border-green text-start px-2">
                Catchphrase
              </div>
              <div className="px-2 bg-white col-span-2">
                {modal.data.phrase}
              </div>
            </div>
          )}
        </div>
        {/* <GameAppearances /> */}
      </div>
    );
  }
  // function GameAppearances() {
  //   return (
  //     <div className="flex flex-col text-xs gap-2">
  //       <div>Mainline Games</div>
  //       <div className="grid grid-cols-5 text-center">
  //         {modal.data.nh_details !== null &&
  //           modal.data.appearances.map((i: string, index: number) => (
  //             <div className="border border-black rounded-xl">
  //               <div className="p-1" key={index}>
  //                 {i}
  //               </div>
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <motion.div
      className="absolute m-auto left-0 right-0 top-0 bottom-0 bg-grass border-4 border-orange-300 border-dashed w-1/2 h-2/3 text-xs"
      whileInView={{
        opacity: [0.5, 1],
        scale: [0.5, 1.25],
        transition: { duration: 0.25 },
      }}
    >
      <div className="h-full">
        <div className="grid  divide-black h-full">
          <div className="flex flex-col items-center border-2 ">
            <div className="flex justify-end w-full px-4 pt-2">
              <button
                onClick={() => setModal({ ...modal, hidden: true })}
                className=" bg-white border border-black rounded-full p-1 px-2"
              >
                X
              </button>
            </div>
            <div className="flex justify-center items-center w-full px-10">
              {modal.data.nh_details !== null ? (
                <div className="flex justify-end items-center mb-2 border-4 border-white rounded-full divide-x-2 divide-white">
                  <img
                    src={modal.data?.nh_details?.icon_url}
                    alt={modal.data.name}
                    className="h-10 bg-green-200 rounded-full rounded-r-none"
                  ></img>
                  <div
                    className={`text-2xl font-bold px-2 h-10 bg-orange-300 text-white rounded-full rounded-l-none`}
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
              className="h-36"
              src={modal.data.image_url}
              alt={modal.data.name}
            />
            <GeneralInfo />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
