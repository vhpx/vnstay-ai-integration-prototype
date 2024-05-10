import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed inset-x-0 top-0 z-50 bg-white flex justify-between p-2 pb-0 md:pb-0 md:p-4 border-b items-center lg:px-8 xl:px-16"
    >
      <div className="mb-3">
        <Image src="/logo.png" alt="Vietnamstay Logo" width={200} height={50} />
      </div>
      <div className="flex flex-col gap-3 items-end">
        <div className="flex gap-3 text-brand items-center font-semibold">
          <div>Live Chat | Call: +84 915 118 628</div>
          <button className="px-4 py-1 rounded border-brand border-2 hover:bg-brand hover:text-white transition text-brand">
            English
          </button>
        </div>
        <div className="flex gap-4 uppercase items-end font-bold">
          <Link
            href="https://www.vietnamstay.com"
            className="hover:text-brand pb-3 border-b-2 border-transparent hover:border-brand"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-brand pb-3 border-b-2 border-transparent hover:border-brand"
          >
            Destinations
          </Link>
          <Link
            href="#"
            className="hover:text-brand pb-3 border-b-2 border-transparent hover:border-brand"
          >
            Tours
          </Link>
          <Link
            href="https://www.vietnamstay.com/vietnam-excursions"
            className="hover:text-brand pb-3 border-b-2 border-transparent hover:border-brand"
          >
            Excursions
          </Link>
          <Link
            href="https://www.vietnamstay.com/about-vietnamstay"
            className="hover:text-brand pb-3 border-b-2 border-transparent hover:border-brand"
          >
            About us
          </Link>
          <button className="text-white uppercase hover:opacity-80 transition h-fit px-4 py-2 mb-1.5 rounded bg-brand">
            Customized Tours
          </button>
        </div>
      </div>
    </nav>
  );
}
