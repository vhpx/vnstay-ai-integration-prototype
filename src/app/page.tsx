import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full p-4 lg:p-8">
      <div className="text-2xl lg:text-4xl font-semibold">
        Where do you want to go?
      </div>

      <div className="mt-4 md:mt-8 relative max-w-lg w-full">
        <Input
          placeholder="Search by city or town"
          className="py-6"
          type="text"
          name="city"
          id="city"
        />
        <div className="absolute right-2 flex top-[0.3rem] gap-1">
          <Button size="icon" variant="ghost" className="p-1">
            <Mic size={20} />
          </Button>
          <Button size="icon" variant="secondary">
            <Send size={20} />
          </Button>
        </div>
      </div>

      <div className="mt-8 text-2xl grid md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-4">
        <button className="relative uppercase col-span-2 xl:col-span-1 opacity-80 hover:opacity-100 transition hover:-translate-y-1">
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
        </button>

        <button className="relative uppercase lg:col-span-2 xl:col-span-1 opacity-80 hover:opacity-100 transition hover:-translate-y-1">
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
        </button>

        <button className="relative uppercase lg:col-span-2 xl:col-span-1 opacity-80 hover:opacity-100 transition hover:-translate-y-1">
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
        </button>

        <button className="relative uppercase lg:col-span-3 xl:col-span-1 opacity-80 hover:opacity-100 transition hover:-translate-y-1">
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
        </button>

        <button className="relative uppercase lg:col-span-3 xl:col-span-1 opacity-80 hover:opacity-100 transition hover:-translate-y-1">
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
        </button>
      </div>
    </div>
  );
}
