import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { UserNav } from "./user-dropdown";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed inset-x-0 bg-white dark:bg-black top-0 z-50 flex justify-between p-2 pb-0 border-b items-end lg:px-8 xl:px-16"
    >
      <Link href="/" className="pb-3">
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
      </Link>
      <div className="flex flex-col gap-3 items-end">
        {/* <div className="flex gap-3 text-brand items-center font-semibold">
          <div>Live Chat | Call: +84 915 118 628</div>
          <button className="px-4 py-1 rounded border-brand border-2 md:hover:bg-brand md:hover:text-white transition text-brand">
            English
          </button>
        </div> */}

        <div className="flex gap-4 uppercase items-end font-semibold">
          <Link
            href="https://www.vietnamstay.com"
            className="hidden lg:block md:hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent md:hover:border-brand-hover"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hidden lg:block md:hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent md:hover:border-brand-hover"
          >
            Destinations
          </Link>
          <Link
            href="#"
            className="hidden lg:block md:hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent md:hover:border-brand-hover"
          >
            Tours
          </Link>
          <Link
            href="https://www.vietnamstay.com/vietnam-excursions"
            className="hidden lg:block md:hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent md:hover:border-brand-hover"
          >
            Excursions
          </Link>
          <Link
            href="https://www.vietnamstay.com/about-vietnamstay"
            className="hidden lg:block md:hover:text-brand dark:hover:text-foreground dark:text-foreground/70 pb-4 border-b-4 border-transparent md:hover:border-brand-hover"
          >
            About us
          </Link>

          <div className="mb-3 flex items-center gap-2">
            {/* <Button
              variant="brand"
              className="hidden md:block uppercase transition h-fit px-4 py-2 font-semibold"
            >
              Chat with AI
            </Button> */}
            {/* <ThemeToggle /> */}

            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
