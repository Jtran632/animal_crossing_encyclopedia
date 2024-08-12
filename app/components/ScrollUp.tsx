"use client";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollUp() {
  return (
    <div className="flex justify-end items-end w-full text-black">
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="border-2 border-black bg-white"
      >
        <IoArrowUp size={32} />
      </button>
    </div>
  );
}
