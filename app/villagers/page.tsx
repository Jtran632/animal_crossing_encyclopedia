import Header from "../components/Header";
import Footer from "../components/Footer";
import VillagersGrid from "../components/Villagers";
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
      <div className="divide-y-2">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-4 bg">
          <div className="">
            <VillagersGrid data={villagers} extraData={extraData} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>ERROR PAGE NOT FOUND</div>;
  }
}
