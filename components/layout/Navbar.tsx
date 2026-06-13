'use client'

import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/16/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div className="Navbar flex px-8 py-4 justify-between items-center relative">
      <Link href="/">
        <img
          src="/images/svg/Logga.svg"
          alt="favicon"
          className="object-contain h-[75px] w-[75px] hover:rotate-3 transition-all"
        />
      </Link>

      <button
        onClick={toggleMenu}
        className="lg:hidden cursor-pointer"
      > {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
      </button>

      <div className="hidden lg:flex gap-5 items-center">
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/"
        >
          Home
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/about"
        >
          About
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/cv"
        >
          CV
        </Link>
        <Link
          className="bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 rounded-3xl hover:bg-tags hover:text-accent transition-all"
          href="/contact"
        >
          Contact Me!
        </Link>
      </div>

{ isMenuOpen && (
      <div className="lg:hidden flex flex-col gap-5 justify-center bg-dark p-5 absolute top-18 right-8 z-10">
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all border-b-2 border-tags text-center"
          href="/"
        >
          Home
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all border-b-2 border-tags text-center"
          href="/about"
        >
          About
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all border-b-2 border-tags text-center"
          href="/cv"
        >
          CV
        </Link>
        <Link
          className="bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 rounded-3xl hover:bg-tags hover:text-accent transition-all"
          href="/contact"
        >
          Contact Me!
        </Link>
      </div>
)}

    </div>
  );
}
