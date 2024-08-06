import Link from "next/link";
import { IoHome, IoFish } from "react-icons/io5";
export default function Header() {
  return (
    <div className="flex bg-white">
      <Link href="/">
        <IoHome size={32} className="text-orange-600" />
      </Link>
      <Link href="/fish">
        <IoFish size={32} className="text-orange-600" />
      </Link>
    </div>
  );
}
