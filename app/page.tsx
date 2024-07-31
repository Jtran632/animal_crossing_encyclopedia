import Footer from "./components/footer";
import Villagers from "./components/villagers";

async function getVillagerData() {
  const url = `https://api.nookipedia.com/villagers?nhdetails=true?limit=10`;

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
export default async function Home() {
  try {
    let data = await getVillagerData();
    return (
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10 bg">
        <div className="">
          <Villagers data={data} />
        </div>
        <Footer/>
      </main>
    );
  } catch (error) {
    console.log(error);
    return <div>ERROR PAGE NOT FOUND</div>;
  }
}
