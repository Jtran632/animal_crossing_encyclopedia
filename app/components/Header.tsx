import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
export default function Header() {
  return (
    <div className="flex bg-white border-b border-black gap-3 p-2 px-8">
      <Link href="/">
        <IoHome
          size={32}
          className="text-orange-600 border rounded-md h-10 w-10"
        />
      </Link>
      <Link href="/villagers">
        <div className="border rounded-md p-0.5">
          <div className="border rounded-md bg-blue-200 h-8">
            <img
              src="https://acnhcdn.com/latest/NpcIcon/pgn00.png"
              alt="villagers"
              className="h-8"
            />
          </div>
        </div>
      </Link>
      <Link href="/npc">
        <div className="border rounded-md p-0.5">
          <div className="border rounded-md bg-green-200 h-8">
            <img
              src="https://acnhcdn.com/latest/NpcIcon/sza.png"
              alt="npcs"
              className="h-8 p-0.5"
            />
          </div>
        </div>
      </Link>
      <Link href="/creatures">
        <div className="border rounded-md p-0.5">
          <div className="h-8 w-8 relative border rounded-md bg-orange-200">
            <img
              src="https://acnhcdn.com/latest/MenuIcon/Fish5.png"
              alt="creatures"
              className="h-5 absolute z-30 -top-0.5 right-1.5 -rotate-12"
            />
            <img
              src="https://acnhcdn.com/latest/MenuIcon/Tako.png"
              alt="creatures"
              className="h-5 absolute z-20 bottom-0 -right-0 rotate-12"
            />
            <img
              src="https://acnhcdn.com/latest/MenuIcon/Ins75.png"
              alt="creatures"
              className="h-6 absolute z-10 bottom-0 -left-1 -rotate-45"
            />
          </div>
        </div>
      </Link>
      <Link href="/fruits">
        <div className="border rounded-md p-0.5">
          <div className="border rounded-md bg-yellow-200 h-8">
            <img
              src="https://acnhcdn.com/latest/MenuIcon/Peach.png"
              alt="apple "
              className="h-8"
            />
          </div>
        </div>
      </Link>
      <Link href="/test">
        <div className="border rounded-md p-0.5">
          <div className="border rounded-md bg-green-200 h-8">
            <GrTest size={32} className="p-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
