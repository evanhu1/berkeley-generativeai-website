import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });

export default function DecalCourse() {
  return (
    <main className="flex flex-col text-white place-items-center">
      <div className="mt-8 md:w-3/4 text-center w-5/6">
        <p className={"text-2xl md:text-4xl " + font.className}>
          Generative AI Decal
        </p>

        <section className="text-lg mt-8 md:text-justify text-justify">
          <h2 className={"text-xl md:text-3xl " + font.className}>Objectives</h2>
          <ul className="list-disc list-inside">
            <li>To learn about machine learning and generative AI concepts from the ground up</li>
            <li>To understand the importance of AI and its applications in the current industry</li>
            <li>To learn how to use and implement various AI concepts with an emphasis on Generative AI</li>
            <li>To understand the state-of-the-art machine learning models</li>
            <li>To be capable of reading research papers to a certain degree of understanding</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className={"text-2xl md:text-3xl " + font.className}>Weekly Schedule</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs uppercase bg-purple-500/50">
                <tr>
                  <th scope="col" className="px-6 py-3">Week</th>
                  <th scope="col" className="px-6 py-3">Topic</th>
                  <th scope="col" className="px-6 py-3">Assignment/Project</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 1</th>
                  <td className="px-6 py-4">Introduction to AI and ML pt.1</td>
                  <td className="px-6 py-4">Prompt Engineering</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 2</th>
                  <td className="px-6 py-4">Introduction to AI and ML pt.2</td>
                  <td className="px-6 py-4">Continue first week assignment and basic Math assignment on gradients</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 3</th>
                  <td className="px-6 py-4">AI and ML Module Usage</td>
                  <td className="px-6 py-4">Machine Learning Types</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 4</th>
                  <td className="px-6 py-4">Ethics in GenAI</td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 5</th>
                  <td className="px-6 py-4">Neural Networks pt.1</td>
                  <td className="px-6 py-4">Simulate a small Neural Network by Hand</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 6</th>
                  <td className="px-6 py-4">Neural Networks pt.2</td>
                  <td className="px-6 py-4">Simulate a small Front and Back Propagation Process by Hand</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 7</th>
                  <td className="px-6 py-4">Embeddings and Transformers pt.1</td>
                  <td className="px-6 py-4">Transformers</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 8</th>
                  <td className="px-6 py-4">Embeddings and Transformers pt.2</td>
                  <td className="px-6 py-4">Embedding assignment</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 9</th>
                  <td className="px-6 py-4">LLMs pt.1</td>
                  <td className="px-6 py-4">RAG Assignment</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 10</th>
                  <td className="px-6 py-4">LLMs pt.2</td>
                  <td className="px-6 py-4">Fine Tune a LLM assignment</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 11-12</th>
                  <td className="px-6 py-4">Audio Models</td>
                  <td className="px-6 py-4">Audio To Image and vice versa Assignment</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 13-14</th>
                  <td className="px-6 py-4">Diffusion Models</td>
                  <td className="px-6 py-4">Diffusion</td>
                </tr>
                <tr className="bg-purple-500/20 border-b border-purple-400">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Week 15</th>
                  <td className="px-6 py-4">Future Ethical Concerns & Discussion on AGI</td>
                  <td className="px-6 py-4">Continue Project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-lg mt-8 md:text-justify text-justify">
          <h2 className={"text-2xl md:text-3xl " + font.className}>Grading</h2>
          <p>
            Attendance and Participation will each be 25% of your grade, for a total of 50%. Assignments will account for the remaining 50% of your grade.
          </p>
        </section>
        <section className="text-base mt-8 md:text-justify text-justify">
          <p className="mt-2">
            <strong>Class Time:</strong> Wednesday 6-8PM
          </p>
          <p className="mt-2">
            <strong>Facilitators:</strong>{" "}
            <a 
              href="mailto:reyavir@berkeley.edu" 
              className="text-purple-300 hover:text-purple-100 underline"
            >
              Reya Vir
            </a>
            ,{" "}
            <a 
              href="mailto:hpghsu@berkeley.edu" 
              className="text-purple-300 hover:text-purple-100 underline"
            >
              Abraham Hsu
            </a>
          </p>
          <p className="mt-2">
            <strong>Office Hours:</strong> TBD
          </p>
        </section>
        <p className="text-lg mt-8 md:text-justify text-justify">
          Throughout this course, you'll gain hands-on experience with various Generative AI concepts and learn about their real-world applications.
        </p>
          <button className="mt-4 px-4 py-1 md:px-8 md:py-1 text-lg text-white bg-purple-500/50 rounded-lg hover:bg-purple-200/50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            Applications open in August!
          </button>
      </div>
    </main>
  );
}