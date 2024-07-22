import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid rounded-full font-medium capitalize flex items-center
      fixed top-6 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>T</button>
      </nav>
      <div>
        <a href="https://www.linkedin.com/in/lucian-tan/">LinkedIn</a>
        <a href="https://github.com/Tantantan-py/tocsing">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
