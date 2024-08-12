"use client";
/*eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { creatures, ICreature } from "animal-crossing";
export default function Creatures() {
  const [curCreatureSelection, setCurCreatureSelection] = useState("Fish");
  const [curCreature, setCurCreature] = useState<ICreature[]>([]);
  useEffect(() => {
    function sortL(L: ICreature[]) {
      return L.sort((a, b) => {
        if (a.num < b.num) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    let res = sortL(
      creatures.filter((i) => i.sourceSheet === curCreatureSelection)
    );
    setCurCreature(res);
  }, [curCreatureSelection]);
  let bellBag = "https://acnhcdn.com/latest/MenuIcon/MoneyBag010.png";
  function selectionOption() {
    let arr = [
      ["Fish", "Fish5"],
      ["Sea Creatures", "Tako"],
      ["Insects", "Ins75"],
    ];
    return (
      <div className="flex justify-center gap-10">
        {arr.map((i) => (
          <img
            key={i[0]}
            src={`https://acnhcdn.com/latest/MenuIcon/${i[1]}.png`}
            alt={i[1]}
            className={`px-1 bg-white h-8 ${
              curCreatureSelection === i[0] ? "" : "filter grayscale"
            }`}
            onClick={() => setCurCreatureSelection(i[0])}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col px-20 xs:p-2">
      {selectionOption()}
      <div className="grid grid-cols-8 lg:grid-cols-5 xs:grid-cols-3 capitalize gap-1 text-black text-[8px]">
        {curCreature.map((i) => (
          <div
            key={i.name}
            className={`flex flex-col justify-between border-2 ${
              curCreatureSelection === "Fish"
                ? "border-blue-400"
                : curCreatureSelection === "Sea Creatures"
                ? "border-blue-600"
                : "border-green-700"
            }
            rounded-sm
            bg-white`}
          >
            <div
              className={`text-center border-b border-slate-400 text-[8px] ${
                curCreatureSelection === "Fish"
                  ? "bg-blue-300"
                  : curCreatureSelection === "Sea Creatures"
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
            >
              {i.name}
            </div>
            <img src={i.iconImage} className="mx-auto h-10" />
            <div className="flex justify-between items-center px-1">
              <div>{i.num}</div>
              <div className="flex justify-end items-center">
                <div>{i.sell}</div>
                <img src={bellBag} className="h-[18px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
