import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { LinkedInIcon, GitHubIcon, SunIcon } from "./Icons.js";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize flex items-center
      fixed top-6 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a
          href="https://www.linkedin.com/in/lucian-tan/"
          className="inline-block w-6 h-6 mr-4"
        >
          <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://github.com/Tantantan-py/tocsing"
          className="inline-block w-6 h-6 mr-4"
        >
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
