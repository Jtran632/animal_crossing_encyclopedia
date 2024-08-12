import Header from "../components/Header";
import FooterComponent from "../components/Footer";
export default async function FruitsPage() {
  return (
    <div className="flex flex-col bg font-mono">
      <Header />
      <main className="">
        <div className="flex justify-center items-center min-h-screen"></div>
      </main>
      <FooterComponent />
    </div>
  );
}
