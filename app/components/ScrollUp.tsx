"use client";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollUp() {
  return (
    <div className="flex justify-end items-end w-full  bg-white text-black">
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="border-2 border-black"
      >
        <IoArrowUp size={32} />
      </button>
    </div>
  );
}
