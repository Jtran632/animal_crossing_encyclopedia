"use client";
import { useState, useEffect } from "react";
import { npcs } from "animal-crossing";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
export default function Test() {
  useEffect(() => {
    console.log(npcs);
  }, []);
  return <div className="flex flex-col bg font-mono"></div>;
}
