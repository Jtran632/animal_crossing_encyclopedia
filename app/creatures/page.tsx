import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import Creatures from "../components/Creatures";
export default async function FruitsPage() {
  return (
    <div className="flex flex-col bg font-mono">
      <Header />
      <main className="flex justify-center items-start min-h-screen">
        <Creatures />
      </main>
      <FooterComponent />
    </div>
  );
}
