"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-auto sticky z-40 top-0 border-b border-divider backdrop-blur-sm dark:bg-slate-900">
      <nav className="w-full h-full flex items-center justify-around">
        <Link href="/">
          <Image src={logo} alt="logo" width={85} height={85} quality={100} />
        </Link>
        <ul className="hidden lg:flex items-center justify-center gap-10 text-xl text-slate-500 dark:text-slate-200">
          <li className="hover:border-b ease-in-out duration-500">
            <Link href="/">Get Involved</Link>
          </li>
          <li className="hover:border-b ease-in-out duration-500">
            <Link href="/">Leadership</Link>
          </li>
          <li className="hover:border-b ease-in-out duration-500">
            <Link href="/">Locations</Link>
          </li>
          <li className="hover:border-b ease-in-out duration-500">
            <Link href="/">About</Link>
          </li>
          <li className="hover:border-b ease-in-out duration-500">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <Button className="rounded-full">Give</Button>
        <Menu
        onClick={handleMenu}
        className="lg:hidden text-2xl cursor-pointer dark:text-slate-200"
      />
      </nav>
      <div
        className={
          menuOpen
            ? "left-0 top-0 w-full h-screen relative bg-[#ecf0f3] ease-in-out duration-500 flex flex-col items-center justify-start z-[50] opacity-75 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="flex absolute top-6 right-6 w-full justify-end items-center">
          <X onClick={handleMenu} className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex flex-col justify-center items-center mt-20">
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">Home</Link>
          </li>
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">Get Involved</Link>
          </li>
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">Locations</Link>
          </li>
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">Leadership</Link>
          </li>
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">About</Link>
          </li>
          <li className="text-2xl text-[#353839] mb-4">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
