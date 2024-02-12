import { Open_Sans } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import Head from 'next/head'
import Companies from "./components/Companies";
import ApplyButton from "./modules/dynamicButton";
import Envolvement from "./components/Envolvement";
import MetricsSection from "./components/MetricsSection";
import ParticlesBackground from "./components/ParticlesBackground";
import Image from 'next/image';

const font = Open_Sans({ subsets: ["latin"], weight: "300" });
const font2 = Open_Sans({ subsets: ["latin"], weight: "500" });



export default function Home() {
  return (
    <div className="flex flex-col text-white place-items-center h-full mt-12">
      <div className={"mt-12 w-2/3 flex flex-col text-center place-items-center text-4xl md:text-7xl leading-[1] " + font.className}>
        <p>
          Shaping the Future with 
        </p>
        <p className="bg-gradient-to-r from-[#cf44ba] to-[#b18dff] text-transparent bg-clip-text">
          Artificial Generative Intelligence
        </p>
        <p className="text-white text-lg mt-12">
            We are Berkeley's largest generative AI organization, founded in the fall of 2023. Our mission is to blend algorithmic innovation with creative thought, demystifying generative AI and fostering an environment for technological and creative advancement. As a student-led community, we are dedicated to equipping students across disciplines with the knowledge and skills to harness the power of generative AI. Through active collaboration, education, and ethical exploration, we pioneer intelligent solutions and expand the reach of generative AI's benefits.
        </p>
      </div>
      <a
        href="/apply"
        className="block py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
        aria-current="page"
      >
        <div className="my-4">
          <ApplyButton />
          
        </div>
      </a>
      <a
        href="/about"
        className="block sm:hidden py-1 px-2 md:py-2 md:px-3 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
        aria-current="page"
      >
        <ApplyButton />
      </a>
      <div style={{marginBottom: '26vh'}}></div>
      <Companies></Companies>
      <div style={{marginBottom: '2rem'}}></div>
      <MetricsSection></MetricsSection>
      <div style={{marginBottom: '2rem'}}></div>




      {/* put a centered heading here saying "our committees" in font2 */}
      <h2 className={font2.className} style={{ fontSize: '3.5rem', fontWeight: 'bold'}}> Our Sections</h2>

      
    {/* SOCIAL OUTREACH */}
      
      <div className="w-full flex" style={{ backgroundColor: '#1a1a1a'}}>
        <div className="w-1/2 flex justify-start items-left" style={{ marginTop: '1rem', marginLeft: '15rem'}}>
          {/* Left side content */}
          <div className="text-left">
            {/* Content goes here */}
            <h2 className={font2.className} style={{ fontSize: '2rem', marginBottom: '12px', fontWeight: 'bold'}}> Social & Outreach</h2>
            <p>Our Social & Outreach section serves as the heartbeat of our community, dedicated to fostering connections, promoting awareness, and contributing positively to society through the lens of generative AI. We are committed to planning and executing a variety of events that not only bring our members together but also extend our reach beyond the university. From organizing charity events and donations to advocating for the responsible use of generative AI, we aim to make a tangible impact. We actively collaborate with both burgeoning startups and established giants in the generative AI space, such as Anthropic and OpenAI, to bring innovative discussions and opportunities to campus. Our efforts also include networking events, meetings, and social gatherings, designed to build a strong, interconnected community of AI enthusiasts and professionals. Through these initiatives, we strive to cultivate a culture of collaboration, learning, and ethical engagement with generative AI technologies.</p>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-right"style={{ marginTop: '1rem', marginRight:'15rem'}}>
          {/* Right side content */}
          <div className="text-center">
            {/* Content goes here */}
            

            <div className="relative h-64 w-96"> {/* Updated height to h-16 */}
            <Image
              src='./volunteer.svg'
              alt='volunteer'
              layout="fill"
              objectFit="contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

            <div className="text-center">
              {/* Content goes here */}
              
              <div style={{marginBottom: '2rem'}}></div>
            </div>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
      </div>

      <div style={{ height: '2rem', width: '100%', background: 'linear-gradient(to right, white, #1a1a1a)' }}></div>

      {/* EDUCATION */}
      <div className="w-full flex" style={{ backgroundColor: 'white'}}>
      <div className="w-1/2 flex justify-start items-left" style={{ marginTop: '1rem', marginLeft: '15rem'}}>
          {/* Left side content */}
          <div className="text-left">
            {/* Content goes here */}
            <div className="relative h-64 w-96"> {/* Updated height to h-16 */}
            <Image
              src='./edu.svg'
              alt='edu'
              layout="fill"
              objectFit="contain"
              style={{ filter: 'brightness(1) invert(0)' }}
            />
          </div>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-right"style={{ marginTop: '1rem', marginRight:'15rem'}}>
          {/* Right side content */}
          <div className="text-right" style={{ color: 'black' }}>
            {/* Content goes here */}
            <h2 className={font2.className} style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px'}}> Education</h2>
            <p style={{ color: 'black' }}>The Education section of our organization is deeply intertwined with the GenAI Decal program, offering a specialized class that delves into the intricacies of generative AI. Beyond formal education, we are also responsible for developing and managing a comprehensive curriculum for the education of our new members. Our goal is to empower students from all disciplines with the foundational knowledge and cutting-edge skills necessary to navigate and contribute to the field of generative AI. Through a blend of theoretical learning and practical application, we provide a platform for students to explore the potentials and challenges of AI technology. Our educational initiatives are designed to inspire innovation, foster intellectual curiosity, and prepare our members for leadership roles in the evolving landscape of generative AI.</p>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
      </div>


      <div style={{ height: '2rem', width: '100%', background: 'linear-gradient(to left, white, #1a1a1a)' }}></div>

      {/* PROJECTS */}

      <div className="w-full flex" style={{ backgroundColor: '#1a1a1a'}}>
      <div className="w-1/2 flex justify-start items-left" style={{ marginTop: '1rem', marginLeft: '15rem'}}>
          {/* Left side content */}
          <div className="text-left" style={{}}>
            {/* Content goes here */}
            <h2 className={font2.className} style={{ fontSize: '2rem', marginBottom: '12px', fontWeight: 'bold' }}> Projects </h2>
            <p>The Projects section is the innovative engine of our organization, where ideas transform into impactful solutions. We engage in a wide range of projects for startups, large corporations, and academic research, with a particular focus on the exploration and application of Large Language Models (LLMs). Our project team is composed of talented individuals who bring their diverse skills and perspectives to tackle complex problems. By collaborating with external partners, we aim to contribute to the advancement of generative AI technologies and their applications. Our work encompasses developing new algorithms, creating AI-driven products, and conducting cutting-edge research that pushes the boundaries of what's possible with generative AI. Through our projects, we not only gain invaluable practical experience but also contribute to the broader dialogue on ethical AI development and deployment.</p>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-right"style={{ marginTop: '1rem', marginRight:'15rem'}}>
          {/* Right side content */}
          <div className="text-center">
            {/* Content goes here */}
            <div className="relative h-64 w-96"> {/* Updated height to h-16 */}
            <Image
              src='./project.svg'
              alt='project'
              layout="fill"
              objectFit="contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
            <div style={{marginBottom: '2rem'}}></div>
          </div>
        </div>
      </div>      
    </div>
  );
}
