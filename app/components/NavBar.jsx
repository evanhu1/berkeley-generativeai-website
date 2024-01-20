import React from "react";
import Image from "next/image";
import { Gloock } from "next/font/google";

const font = Gloock({ subsets: ["latin"], weight: "400" });

function NavBar() {
  return (
    <>
      <div className="flex flex-row p-4 justify-between md:px-16">
        <a href="/">
          <div className="flex flex-row place-items-center">
            <Image src={'/logo.png'} alt="logo" width={100} height={100} className="w-20 md:w-24"></Image>
            <h1 className={"text-xl md:text-2xl text-white " + font.className}>
              GENERATIVE AI<br></br>@ BERKELEY
            </h1>
          </div>
        </a>
        <div className="flex w-auto mr-4" id="navbar-default">
          <ul className="flex flex-row space-x-8 items-center">
            <li>
              <a
                href="/about"
                className="hidden sm:block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
              >
                About
              </a>
            </li>
            <a
                href="/apply"
                className="hidden sm:block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
            >
              <button className="px-3 py-1 text-white bg-purple-500/50 rounded-lg hover:bg-purple-200/50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                Apply
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
