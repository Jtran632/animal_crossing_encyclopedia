"use server";
import Header from "../components/Header";
import Test from "../components/Test";
import FooterComponent from "../components/Footer";
async function fetchSpecialCharacters() {
  const endpoint = "https://nookipedia.com/w/api.php";
  let fields = [
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
  ].join(",");
  const params =
    `?origin=*` +
    `&action=cargoquery` +
    `&format=json` +
    `&tables=nh_special_character` +
    `&fields=${fields}`;

  const url = endpoint + params;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}

export default async function TestPage() {
  let extraData = await fetchSpecialCharacters();
  console.log(await extraData);
  return (
    <div className="flex flex-col bg font-mono">
      <Header />
      <main className="">
        <div className="flex justify-center items-center min-h-screen">
          <Test data={extraData} />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
