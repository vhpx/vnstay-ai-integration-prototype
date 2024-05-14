import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed inset-x-0 top-0 z-50 flex justify-between p-2 pb-0 border-b items-end lg:px-8 xl:px-16"
    >
      <div className="pb-3">
        <Image
          src="/dark.png"
          alt="Vietnamstay Logo"
          width={200}
          height={50}
          className="hidden dark:block max-w-48"
        />
        <Image
          src="/logo.png"
          alt="Vietnamstay Logo"
          width={200}
          height={50}
          className="dark:hidden max-w-48"
        />
      </div>
      <div className="flex flex-col gap-3 items-end">
        {/* <div className="flex gap-3 text-brand items-center font-semibold">
          <div>Live Chat | Call: +84 915 118 628</div>
          <button className="px-4 py-1 rounded border-brand border-2 hover:bg-brand hover:text-white transition text-brand">
            English
          </button>
        </div> */}

        <div className="flex gap-4 uppercase items-end font-bold">
          <Link
            href="https://www.vietnamstay.com"
            className="hidden lg:block hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent hover:border-brand-hover"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hidden lg:block hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent hover:border-brand-hover"
          >
            Destinations
          </Link>
          <Link
            href="#"
            className="hidden lg:block hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent hover:border-brand-hover"
          >
            Tours
          </Link>
          <Link
            href="https://www.vietnamstay.com/vietnam-excursions"
            className="hidden lg:block hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent hover:border-brand-hover"
          >
            Excursions
          </Link>
          <Link
            href="https://www.vietnamstay.com/about-vietnamstay"
            className="hidden lg:block hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent hover:border-brand-hover"
          >
            About us
          </Link>

          <div className="mb-3 flex items-center gap-2">
            <button className="text-white hidden md:block uppercase hover:bg-brand-hover transition h-fit px-4 py-2 rounded bg-brand">
              Chat with AI
            </button>

            <ThemeToggle className="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
