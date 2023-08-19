import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col text-white place-items-center">
      <div className="mt-8 w-1/2 text-center">
        <p className={"text-2xl md:text-4xl " + font.className}>
          New Member Program Application
        </p>
        <a
            href="https://forms.gle/aB74hfghqqvokQHQ9"
            className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
            target="blank"
        >
            <button className="mt-4 px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#18a2a6] rounded-lg hover:bg-[#0b6e71] focus:outline-none focus:ring-2 focus:ring-blue-200">
              Apply
            </button>
        </a>
        <p className={"mt-16 text-2xl md:text-4xl " + font.className}>
          Project Team Application
        </p>
        <a
            href="https://forms.gle/oBztWbuc2QN3UubB8"
            className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
            target="blank"
        >
            <button className="mt-4 px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#18a2a6] rounded-lg hover:bg-[#0b6e71] focus:outline-none focus:ring-2 focus:ring-blue-200">
              Apply
            </button>
        </a>
      </div>
    </main>
  );
}
