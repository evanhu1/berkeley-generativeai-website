import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="flex flex-col text-white place-items-center h-9">
      <div className={"mt-12 w-2/3 flex flex-col text-center place-items-center text-4xl md:text-7xl leading-[1] " + font.className}>
        <p>
          Berkeley&apos;s largest
        </p>
        <p className="bg-gradient-to-r from-[#036CD4] to-[#d152e2] text-transparent bg-clip-text">
          Generative AI 
        </p>
        <p>
          student organization
        </p>
      </div>
        <a
            href="/apply"
            className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
            aria-current="page"
        >
            <button className="mt-16 px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#18a2a6] rounded-lg hover:bg-[#0b6e71] focus:outline-none focus:ring-2 focus:ring-blue-200">
              Apply
            </button>
        </a>
        <a
            href="/about"
            className="block md:hidden py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
            aria-current="page"
        >
            <button className="px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#18a2a6] rounded-lg hover:bg-[#0b6e71] focus:outline-none focus:ring-2 focus:ring-blue-200">
              About
            </button>
        </a>
      <p className={"my-4 text-2xl font-serif"}>
        Launching Fall 2023
      </p>
    </div>
  );
}
