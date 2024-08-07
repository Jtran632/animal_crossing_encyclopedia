import Link from "next/link";

// Usage example
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-10 bg text-black font-2xl">
      <Link href="/villagers">Villagers</Link>
    </main>
  );
}
