"use client";
import { useState, useEffect } from "react";
import { npcs } from "animal-crossing";
export default function Test({ data }: any) {
  useEffect(() => {
    console.log(data, "data");
  }, []);
  return <div className="flex flex-col bg font-mono"></div>;
}
