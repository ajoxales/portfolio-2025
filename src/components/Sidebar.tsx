"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, MapPin } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Sidebar() {
  return (
    <div className="hidden sm:block">
      <section className="fixed h-screen sm:py-10 w-[250px] lg:w-[300px] border-r border-[#e5e5e5] dark:border-white/20 px-10 h-screen flex flex-col justify-between">
        <div>
          <Image
            src="/images/profile-photo-2.png"
            alt="Profile Photo"
            width={500}
            height={500}
            className="animate-fade-up rounded-lg w-full h-auto mb-5"
            style={{ animationDelay: "100ms" }}
          />
          <h1 className="animate-fade-in text-xl lg:text-2xl font-bold tracking-tight mb-2">
            Alexander Joseph
            <br /> Oxales{" "}
            <span className="text-sm font-normal tracking-normal text-gray-500 dark:text-gray-400">
              (he/him)
            </span>
          </h1>
          <div className="animate-fade-in delay-100 flex items-center gap-1 mb-3">
            <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dasmarinas, Cavite
            </p>
          </div>
          <p className="animate-fade-in text-sm lg:text-base text-gray-500 dark:text-gray-400 mb-3">
            Front end developer with a passion for building web applications.
          </p>

          <span className="animate-fade-in inline-block text-sky-800 dark:text-sky-200 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200 dark:border-sky-700 bg-linear-to-t from-sky-500/20 to-sky-500/10">
            Open to work
          </span>

          {/* <nav className="mt-10 space-y-5 text-sm">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-cyan-500 flex items-center gap-2"
            >
              Home
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 dark:text-gray-300 hover:text-cyan-500 flex items-center gap-2"
            >
              About
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="block text-gray-700 dark:text-gray-300 hover:text-cyan-500 flex items-center gap-2"
            >
              Projects
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav> */}
        </div>

        <div className="animate-fade-in mt-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ajoxales" target="_blank">
              <Github className="w-5 h-5 hover:text-cyan-500 transition-colors text-muted-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alexander-joseph-oxales-a3b894345/"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 hover:text-cyan-500 transition-colors text-muted-foreground" />
            </Link>
            <Link href="mailto:alexoxales.03@gmail.com">
              <Mail className="w-5 h-5 hover:text-cyan-500 transition-colors text-muted-foreground" />
            </Link>
            <Link href="https://www.facebook.com/lex.xoales" target="_blank">
              <Facebook className="w-5 h-5 hover:text-cyan-500 transition-colors text-muted-foreground" />
            </Link>
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </section>
    </div>
  );
}
