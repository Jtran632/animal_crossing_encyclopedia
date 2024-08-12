"use server";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import Villagers from "../components/Villagers";
import { villagers } from "animal-crossing";

async function getVillagerData() {
  const url = `https://api.nookipedia.com/villagers?nhdetails=true`;

  const headers = {
    "X-API-KEY": process.env.NOOKIPEDIA_KEY as string,
    "Accept-Version": "1.0.0",
  };

  let res = await fetch(url, {
    headers: headers,
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  return res.json();
}

// Usage example
export default async function VillagerPage() {
  try {
    let extraData = await getVillagerData();
    return (
      <div className="flex flex-col bg font-mono">
        <Header />
        <main className="">
          <div className="flex justify-center items-start min-h-screen">
            <Villagers data={villagers} extraData={extraData} />
          </div>
        </main>
        <FooterComponent />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>ERROR PAGE NOT FOUND</div>;
  }
}
