import Image from "next/image";
import SearchBar from "./search-bar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-lg md:text-2xl lg:text-4xl font-semibold animate-slide-in opacity-0 [--slide-in-delay:0ms]">
        Where do you want to go?
      </div>

      <div className="mt-4 md:mt-8 relative max-w-lg w-full animate-slide-in opacity-0 [--slide-in-delay:150ms]">
        <SearchBar />
      </div>

      <div className="mt-8 text-2xl w-full max-w-lg md:max-w-full grid md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-4">
        <Link
          href="/trip-duration"
          className="relative uppercase col-span-2 xl:col-span-1 transition md:hover:-translate-y-1 animate-slide-in opacity-0 [--slide-in-delay:450ms]"
        >
          <Image
            src="/vietnam.png"
            width={200}
            height={200}
            alt="vietnam"
            className="rounded-lg bg-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent rounded-t-lg dark:rounded-t" />
          <div className="absolute top-4 left-4 text-white font-semibold">
            vietnam
          </div>
        </Link>

        <Link
          href="/trip-duration"
          className="relative uppercase lg:col-span-2 xl:col-span-1 transition md:hover:-translate-y-1 animate-slide-in opacity-0 [--slide-in-delay:600ms]"
        >
          <Image
            src="/cambodia.png"
            width={200}
            height={200}
            alt="cambodia"
            className="rounded-lg bg-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent rounded-t-lg dark:rounded-t" />
          <div className="absolute top-4 left-4 text-white font-semibold">
            cambodia
          </div>
        </Link>

        <Link
          href="/trip-duration"
          className="relative uppercase lg:col-span-2 xl:col-span-1 transition md:hover:-translate-y-1 animate-slide-in opacity-0 [--slide-in-delay:750ms]"
        >
          <Image
            src="/laos.png"
            width={200}
            height={200}
            alt="laos"
            className="rounded-lg bg-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent rounded-t-lg dark:rounded-t" />
          <div className="absolute top-4 left-4 text-white font-semibold">
            laos
          </div>
        </Link>

        <Link
          href="/trip-duration"
          className="relative uppercase lg:col-span-3 xl:col-span-1 transition md:hover:-translate-y-1 animate-slide-in opacity-0 [--slide-in-delay:900ms]"
        >
          <Image
            src="/thailand.png"
            width={200}
            height={200}
            alt="thailand"
            className="rounded-lg bg-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent rounded-t-lg dark:rounded-t" />
          <div className="absolute top-4 left-4 text-white font-semibold">
            thailand
          </div>
        </Link>

        <Link
          href="/trip-duration"
          className="relative uppercase lg:col-span-3 xl:col-span-1 transition md:hover:-translate-y-1 animate-slide-in opacity-0 [--slide-in-delay:1050ms]"
        >
          <Image
            src="/myanmar.png"
            width={200}
            height={200}
            alt="myanmar"
            className="rounded-lg bg-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent rounded-t-lg dark:rounded-t" />
          <div className="absolute top-4 left-4 text-white font-semibold">
            myanmar
          </div>
        </Link>
      </div>
    </div>
  );
}
