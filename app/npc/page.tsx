"use server";
import Header from "../components/Header";
import Test from "../components/Test";
import FooterComponent from "../components/Footer";
import { npcs } from "animal-crossing";
import Npcs from "../components/Npc";
async function fetchSpecialCharacters() {
  const endpoint = "https://nookipedia.com/w/api.php";
  const params = {
    action: "cargoquery",
    format: "json",
    tables: "nh_special_character",
    fields: [
      "url",
      "name",
      "name_sort",
      "image",
      "image_url",
      "photo",
      "photo_url",
      "icon",
      "icon_url",
      "quote",
      "quote_wikitext",
      "species",
      "gender",
      "gender_jp",
      "birthday",
      "birthday_sort",
      "sign",
      "umbrella",
      "umbrella_hhp",
      "default_phone",
      "final_phone",
      "hobby",
      "life_points",
      "hobby_points",
      "wave_type",
      "version_added",
    ].join(","),
    limit: "max",
  };

  const url =
    `${endpoint}?origin=*` +
    `&action=${params.action}` +
    `&format=${params.format}` +
    `&tables=${params.tables}` +
    `&fields=${params.fields}` +
    `&limit=${params.limit}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}
export default async function NpcPage() {
  let cargoData = await fetchSpecialCharacters();
  return (
    <div className="flex flex-col bg font-mono">
      <Header />
      <main className="">
        <div className="flex justify-center items-start min-h-screen">
          <Npcs data={npcs} cargoData={cargoData} />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
