import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center whitespace-nowrap sm:px-6"
        >

          <span className="flex font-mono text-lg  ml-[-30px] sm:ml-0 text-gray-300 border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full">
            Naresh Ramalingam
          </span>
        </a>

        <div className="  w-[500px] h-full hidden lg:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
             <a
      href={social.url}
      key={social.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={social.src}
        alt={social.name}
        width={24}
        height={24}
        className="cursor-pointer w-7 h-7  min-w-[25px] transition-transform hover:scale-110 hover:backdrop-blur rounded-full "
      />
    </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
