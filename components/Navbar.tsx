"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Nav() {
  return (
    <header className="w-full h-auto sticky z-40 top-0 border-b border-divider backdrop-blur-lg dark:bg-slate-900">
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
        <Button>Give</Button>
      </nav>
    </header>
  );
}
