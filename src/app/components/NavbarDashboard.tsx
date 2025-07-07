

import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const navbarItems = [
  {
    title: "Artikel",
    url: "#",
  },
  {
    title: "Laporan",
    url: "#",
  },
  {
    title: "Kelola Kiriman",
    url: "#",
  },
  {
    title: "Customer",
    url: "#",
  },
  {
    title: "Armada",
    url: "#",
  },
  {
    title: "Karyawan",
    url: "#",
  },
  {
    title: "Keuangan",
    url: "#",
  },
  {
    title: "Inventaris",
    url: "#",
  },
  {
    title: "Akun",
    url: "#",
  },
];

function NavbarDashboard() {


  return (
    <nav className="">
      <p className="text-center text-2xl xl:text-4xl font-semibold p-2">Dashboard Panel </p>
      <div className="flex lg:justify-center gap-x-4 p-1 overflow-x-scroll lg:overflow-hidden">
        {navbarItems.map((item) => (
          <button
            key={item.title}
            className="font-light text-nowrap p-2 my-1  border-3 border-white rounded-xl text-sm bg-gray-200 hover:bg-gray-300 hover:font-normal active:bg-gray-400 transition-colors duration-150 lg:text-md xl:text-xl "
          >
            <Link href={item.url}>{item.title}</Link>
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-x-2 lg:hidden mt-2">
        <MoveLeft />
        <p>Scroll Item</p>

        <MoveRight />
      </div>
    </nav>
  );
}
export default NavbarDashboard;
