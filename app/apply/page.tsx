import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col text-white place-items-center">
      <div className="mt-8 md:w-1/2 text-center w-2/3">
        <p className={"text-2xl md:text-4xl " + font.className}>
          New Member Program Application
        </p>
        <a
          href="https://forms.gle/aB74hfghqqvokQHQ9"
          className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
          target="blank"
        >
          <button className="mt-4 px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#d152e2] rounded-lg hover:bg-[#a13dae] focus:outline-none focus:ring-2 focus:ring-blue-200">
            Apply
          </button>
        </a>
        <p className="text-xl mt-4 md:text-justify text-justify">
          This program offers new members an opportunity to learn and gain
          experience with using Generative AI within a cohort of other new
          members.<br></br> <br></br> There will be two parts to this program: A 2 month long
          curriculum where you will be introduced to various topics and
          technologies in Generative AI, covering everything from its history,
          to current applications, and how different Generative AI technologies
          (e.g. ChatGPT) work under the hood.<br></br><br></br>   Finally, you - along with your
          cohort - will collaborate together on a final capstone project that
          ties together you have learned and gives you a chance to apply your
          knowledge to build something. For this semester, you will all be
          working together to build a small, proof-of-concept Generative AI
          powered video game using Stable Diffusion to generate the game assets,
          MusicLM to generate the game soundtrack, and LLMs (e.g. ChatGPT) to
          power NPC dialogue with the character. 
        </p>
        <p className={"mt-16 text-2xl md:text-4xl " + font.className}>
          Project Team Application
        </p>
        <a
          href="https://forms.gle/oBztWbuc2QN3UubB8"
          className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
          target="blank"
        >
          <button className="mt-4 px-4 py-1 md:px-8 md:py-3 text-lg text-white bg-[#d152e2] rounded-lg hover:bg-[#a13dae] focus:outline-none focus:ring-2 focus:ring-blue-200">
            Apply
          </button>
        </a>
        <p className="text-xl mt-4 md:text-justify text-justify">
          Motivated members passionate about GAI or a particular domain come up
          with their own project ideas and form groups to pursue bringing it to
          life. Or you can join an existing group and contribute to its vision.
          There will be a project formation stage in the beginning of each term.
          Project members will receive guidance, cloud compute (AWS) credits,
          and find a strong ecosystem of support amongst the other club members
          to bring their dream Generative AI project to life.
        </p>
      </div>
    </main>
  );
}
