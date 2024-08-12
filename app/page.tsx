import Link from "next/link";
import Header from "./components/Header";
import FooterComponent from "./components/Footer";

// Usage example
export default async function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10 bg text-black font-2xl">
        <Link href="/villagers">Villagers</Link>
      </main>
      <FooterComponent />
    </div>
  );
}
