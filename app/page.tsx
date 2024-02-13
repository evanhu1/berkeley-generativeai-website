'use client';
import React, { useEffect } from 'react';
import { Open_Sans } from "next/font/google";
import Head from 'next/head'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Companies from "./components/Companies";
import ApplyButton from "./modules/dynamicButton";
import Envolvement from "./components/Envolvement";
import MetricsSection from "./components/MetricsSection";
import Terminal from './components/Terminal';
import Footer from "./components/Footer";

const font = Open_Sans({ subsets: ["latin"], weight: "300" });
const font2 = Open_Sans({ subsets: ["latin"], weight: "300" });

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: socialOutreachRef, inView: socialOutreachInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center h-full mt-12 px-4 md:px-0 text-white">

      {/* Header Section */}
      <div className={`mt-12 w-full md:w-2/3 flex flex-col items-center text-center text-3xl md:text-7xl leading-tight ${font.className}`}>
        <p>Shaping the Future with</p>
        <p className="bg-gradient-to-r from-[#cf44ba] to-[#b18dff] text-transparent bg-clip-text">
          Artificial Generative Intelligence
        </p>
        <p className="text-lg mt-12">
          We are the largest generative AI organization at UC Berkeley, founded in the fall of 2023. Our mission is to blend algorithmic innovation with creative thought, demystifying generative AI and fostering an environment for technological and creative advancement. As a student-led community, we are dedicated to equipping students across disciplines with the knowledge and skills to harness the power of generative AI. Through active collaboration, education, and ethical exploration, we pioneer intelligent solutions and expand the reach of the benefits of generative AI.
        </p>
      </div>

      {/* Apply Button */}
      <div className="my-4 w-full text-center">
        <a href="/apply" className="inline-block py-2 px-4 transition-colors duration-200 transform rounded">
          <ApplyButton />
        </a>
      </div>

      {/* Terminal Component */}
      <Terminal />

      {/* Placeholder for additional sections */}
      <div className="mb-26vh"></div>
      <Companies />
      <div className='w-full bg-white'>
      <div className="mb-8"></div>
      <MetricsSection/>
      <div className="mb-8"></div>

      {/* Our Sections Heading */}
      <h2 className={`${font2.className} text-3xl md:text-4xl font-bold text-center text-black`}>
        Our Divisions
      </h2>

      {/* Sections Description */}
      <p className="max-w-2xl text-center mx-auto my-4 text-black">
      Generative AI @ Berkeley is comprised of 3 main divisions, Social & Outreach, Education, and Projects. Each section leads various organizational initiatives such as philanthropy, industrial relations & partnerships, campus relations & partnerships, projects, research, and more.
      </p>

      {/* Social Outreach Section */}
      <div className={`w-full flex flex-col md:flex-row ${socialOutreachInView ? 'fadeInSection' : ''}`} style={{ backgroundColor: '#1a1a1a'}}>
        {/* Left side content */}
        <div className="md:w-1/2 p-4">
          <h2 className={`${font2.className} text-xl md:text-2xl font-bold`}>Social & Outreach</h2>
          <p>Our Social & Outreach section serves as the heartbeat of our community, dedicated to fostering connections, promoting awareness, and contributing positively to society through the lens of generative AI. We are committed to planning and executing a variety of events that not only bring our members together but also extend our reach beyond the university. From organizing charity events and donations to advocating for the responsible use of generative AI, we aim to make a tangible impact. We actively collaborate with both burgeoning startups and established giants in the generative AI space, such as Anthropic and OpenAI, to bring innovative discussions and opportunities to campus. Our efforts also include networking events, meetings, and social gatherings, designed to build a strong, interconnected community of AI enthusiasts and professionals. Through these initiatives, we strive to cultivate a culture of collaboration, learning, and ethical engagement with generative AI technologies.</p>
        </div>
        {/* Right side content - Image */}
        <div className="md:w-1/2 p-4">
          <div className="relative h-64 w-full">
            <Image src="/volunteer.svg" alt="Volunteer" layout="fill" objectFit="contain" style={{filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className={`w-full flex flex-col md:flex-row-reverse ${educationInView ? 'fadeInSection' : ''}`} style={{ backgroundColor: 'white' }}>
        {/* Left side content - Image */}
        <div className="md:w-1/2 p-4">
          <div className="relative h-64 w-full">
            <Image src="/edu.svg" alt="Education" layout="fill" objectFit="contain" />
          </div>
        </div>
        {/* Right side content */}
        <div className="md:w-1/2 p-4">
          <h2 className={`${font2.className} text-xl md:text-2xl font-bold text-black`}>Education</h2>
          <p className="text-black">
          The Education section of our organization is deeply intertwined with the GenAI Decal program, offering a specialized class that delves into the intricacies of generative AI. Beyond formal education, we are also responsible for developing and managing a comprehensive curriculum for the education of our new members. Our goal is to empower students from all disciplines with the foundational knowledge and cutting-edge skills necessary to navigate and contribute to the field of generative AI. Through a blend of theoretical learning and practical application, we provide a platform for students to explore the potentials and challenges of AI technology. Our educational initiatives are designed to inspire innovation, foster intellectual curiosity, and prepare our members for leadership roles in the evolving landscape of generative AI.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className={`w-full flex flex-col md:flex-row ${projectsInView ? 'fadeInSection' : ''}`} style={{ backgroundColor: '#1a1a1a' }}>
        {/* Left side content */}
        <div className="md:w-1/2 p-4">
          <h2 className={`${font2.className} text-xl md:text-2xl font-bold`}>Projects</h2>
          <p>Our Social & Outreach section serves as the heartbeat of our community, dedicated to fostering connections, promoting awareness, and contributing positively to society through the lens of generative AI. We are committed to planning and executing a variety of events that not only bring our members together but also extend our reach beyond the university. From organizing charity events and donations to advocating for the responsible use of generative AI, we aim to make a tangible impact. We actively collaborate with both burgeoning startups and established giants in the generative AI space, such as Anthropic and OpenAI, to bring innovative discussions and opportunities to campus. Our efforts also include networking events, meetings, and social gatherings, designed to build a strong, interconnected community of AI enthusiasts and professionals. Through these initiatives, we strive to cultivate a culture of collaboration, learning, and ethical engagement with generative AI technologies.</p>
        </div>
        {/* Right side content - Image */}
        <div className="md:w-1/2 p-4">
          <div className="relative h-64 w-full">
            <Image src="/project.svg" alt="Projects" layout="fill" objectFit="contain" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
