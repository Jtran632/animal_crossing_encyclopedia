import Header from "../components/Header";
import Test from "../components/Test";
import FooterComponent from "../components/Footer";
import { npcs } from "animal-crossing";
import Npcs from "../components/Npc";
export default async function NpcPage() {
  try {
    return (
      <div className="flex flex-col bg font-mono">
        <Header />
        <main className="">
          <div className="flex justify-center items-start min-h-screen">
            <Npcs data={npcs} />
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
