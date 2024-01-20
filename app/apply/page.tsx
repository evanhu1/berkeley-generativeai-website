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
          <button className="mt-4 px-4 py-1 md:px-8 md:py-1 text-lg text-white bg-purple-500/50 rounded-lg hover:bg-purple-200/50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            Apply
          </button>
        </a>
        <p className="text-xl mt-4 md:text-justify text-justify">
          This program offers new members an opportunity to learn and gain
          experience with using Generative AI within a cohort of other new
          members.<br></br> <br></br> This program offers new members an opportunity to learn and gain experience with using Generative AI within a cohort of other new members. Each week you will attend a presentation where you will be introduced to various topics and technologies in Generative AI, covering everything from its history, to current applications, and how different Generative AI technologies (e.g. ChatGPT) work under the hood. Each presentation will be combined with a workshop in which you get a hands on chance to use what you learn to use Stable Diffusion, build RAGs with LLMs, and more.

There is no expectation of previous experience with Generative AI in this program, you should however have some experience with Python.
        </p>
        <p className={"mt-16 text-2xl md:text-4xl " + font.className}>
          Project Team Application
        </p>
        <a
          href="https://forms.gle/oBztWbuc2QN3UubB8"
          className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
          target="blank"
        >
          <button className="mt-4 px-4 py-1 md:px-8 md:py-1 text-lg text-white bg-purple-500/50 rounded-lg hover:bg-purple-200/50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            Apply
          </button>
        </a>
        <p className="text-xl mt-4 md:text-justify text-justify">
        Members work in teams of 4-5 lead by Project Managers to complete a Generative AI app or research project. There will be two main types of projects: Client Projects, and Core Projects.
Client / AI Startup project. Members work together to design, develop, and deliver a project each semester according to client specifications. This semester we are proud to offer two startup client projects! In addition we also are offering two core projects:

<br></br><br></br>
a) LLM Interviewer. Build an automated LLM agent that conducts interviews with users and collects responses. Learn advanced prompt engineering techniques and how to fine tune LLMs.
<br></br><br></br>
b) Scribe. Build software that automatically listens and transcribes audio into text, and then uses an LLM to summarize, highlight, and reorganize the transcribed text on the fly. This can be used to take notes in class or quickly notate your thoughts in real time.
        </p>
      </div>
    </main>
  );
}
