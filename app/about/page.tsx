import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col text-white place-items-center">
      <div className="mt-8 md:w-1/2 w-2/3">
        <p className={"text-4xl " + font.className}>
          About Us
        </p>
        <p className="text-xl mt-4 md:text-justify text-justify">
          Generative AI at Berkeley is the biggest Generative AI student
          organization at UC Berkeley. 
          
          We focus on exploring the groundbreaking
          field of Generative AI as well as its transformative potential
          applications. Members collaborate on diverse projects that combine
          technical and creative work: applying cutting-edge technologies such as
          Stable Diffusion and LLMs to real-world problems or exploring new forms
          of artistic expression through multi-modal AI. We offer a space for
          anyone simply seeking to learn more about Generative AI and find others
          who share that interest. Whether you are a coder, artist, musician, or
          anyone else, this club offers an inclusive and social space for anyone
          curious about the limitless possibilities of Generative AI.
        </p>
      </div>
    </main>
  );
}
