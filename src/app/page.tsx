"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  FileSearch,
  SquareArrowOutUpRight,
} from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";

// Inside your component
const projects = [
  {
    id: 1,
    title: "Balboa Digital LMS (Capstone Project)",
    description:
      "Developed an LMS for employee training, replacing spreadsheet-based tracking. Enabled secure logins, progress tracking, and course management.",
    stack: ["Next.js", "CoreUI", "Bootstrap", "Supabase", "AWS"],
    images: [
      "/images/projects/lms-landing-1.png",
      "/images/projects/lms-landing-2.png",
      "/images/projects/lms-landing-3.png",
      "/images/projects/lms-1.png",
      "/images/projects/lms-2.png",
      "/images/projects/lms-3.png",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive developer portfolio showcasing my skills, experience, and featured projects.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Lucide Icons"],
    images: ["/images/projects/portfolio.png"],
  },
  {
    id: 3,
    title: "Multiple Activities App",
    description:
      "A full-stack Next.js app using Supabase for auth, database, and storage. It includes five modular CRUD tools—todo lists, a Drive Lite file manager, food and Pokémon review apps with image uploads, and a markdown task manager—all in one platform.",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Shadcn UI"],
    images: [
      "/images/projects/multiple-activities-1.png",
      "/images/projects/multiple-activities-2.png",
      "/images/projects/multiple-activities-3.png",
      "/images/projects/multiple-activities-4.png",
    ],
    url: "https://next-multiple-activities-app-aj.vercel.app/",
  },
  {
    id: 4,
    title: "Website Showcase",
    description:
      "Selected previews from past projects I contributed to. All assets and branding have been replaced for confidentiality.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Font Awesome Icons"],
    images: [
      "/images/projects/showcase-1.png",
      "/images/projects/showcase-2.png",
      "/images/projects/showcase-3.png",
      "/images/projects/showcase-lex-1.png",
      "/images/projects/showcase-lex-2.png",
      "/images/projects/showcase-lex-3.png",
      "/images/projects/showcase-lscs-1.png",
      "/images/projects/showcase-lscs-2.png",
      "/images/projects/showcase-lscs-3.png",
      "/images/projects/showcase-lscs-4.png",
      "/images/projects/showcase-weathermap.png",
      "/images/projects/showcase-todo.png",
      "/images/projects/showcase-ip.png",
    ],
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  images?: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const techUsed = {
    Programming: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python"],
    "Frameworks & Tools": [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Supabase",
      "RESTful APIs",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn UI",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
    ],
  };

  return (
    <section className="container ">
      <div className="grid sm:hidden grid-cols-1">
        <Card className="animate-fade-up mb-5">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Alexander Joseph Oxales{" "}
              <span className="text-sm font-normal tracking-normal text-gray-500 dark:text-gray-400">
                (he/him)
              </span>
            </CardTitle>
            <CardDescription className="text-start text-sm mb-1">
              <div className="flex items-center gap-1 mb-3 justify-start">
                <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dasmarinas, Cavite
                </p>
              </div>
              Front end developer with a passion for building web applications.
            </CardDescription>
            <CardContent className="px-0">
              <span className="inline-block text-sky-800 dark:text-sky-200 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200 dark:border-sky-700 bg-linear-to-t from-sky-500/20 to-sky-500/10">
                Open to work
              </span>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="animate-fade-up mb-5 py-0">
          <Image
            src="/images/profile-photo-2.png"
            alt="Profile Photo"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto"
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-5 mb-5">
        {/* About Me */}
        <Card className="animate-fade-up col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle className="mb-1">About Me</CardTitle>
            <CardDescription className="space-y-2 leading-relaxed">
              <p>
                Hi!{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>{" "}
                I'm a graduate with a Bachelor of Science in Information
                Technology from De La Salle University - Dasmariñas.
              </p>
              <p>
                💻 I enjoy working on projects that challenge my skills and
                creativity — from building user-friendly applications to
                brainstorming new tech-driven ideas . I'm always eager to learn,
                build, and create something meaningful 🚀.
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        {/* Get in Touch */}
        <Card
          className="animate-fade-up col-span-2 lg:col-span-1 order-last lg:order-none"
          style={{ animationDelay: "100ms" }}
        >
          <CardHeader className="-mb-2">
            <CardTitle className="mb-1">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="space-y-4">
              <div className="space-y-4">
                <p className="flex items-center gap-2 break-all">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Link href="mailto:alexoxales.03@gmail.com">
                    alexoxales.03@gmail.com
                  </Link>
                </p>
                <p className="flex items-center gap-2 break-all">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+639560596550">+63 956 059 6565</a>
                </p>
                <p className="flex items-center gap-2 break-words">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Dasmariñas, Cavite
                </p>
              </div>
            </CardDescription>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card
          className="animate-fade-up col-span-2 lg:col-span-1"
          style={{ animationDelay: "200ms" }}
        >
          <CardHeader className="-mb-2">
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(techUsed).map(([category, tools]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold mb-1">{category}</h4>
                <div className="flex flex-wrap gap-1">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Experience */}
        <Card
          className="animate-fade-up col-span-2 lg:col-span-2"
          style={{ animationDelay: "300ms" }}
        >
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription className="-mb-2">
              A quick overview of my journey so far — building, learning, and
              growing as a web developer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription className="relative border-l border-muted pl-4 space-y-6">
              <div className="relative">
                <div className="absolute -left-5.5 top-1 h-3 w-3 rounded-full bg-linear-to-t from-sky-500/80 to-sky-500/40 border dark:border-white/50"></div>
                <h3 className="text-sm font-semibold dark:text-white text-black/70">
                  Freelance Web Developer
                </h3>
                <p className="text-sm text-muted-foreground">
                  Remote · Apr 2025 - Jul 2025
                </p>
                <p className="mt-1 text-sm">
                  Developed responsive web applications from Figma designs using
                  Next.js, Tailwind CSS, and Shadcn UI, and built interfaces
                  with React Native and Expo.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-5.5 top-1 h-3 w-3 rounded-full bg-linear-to-t from-sky-500/80 to-sky-500/40 border dark:border-white/50"></div>
                <h3 className="text-md font-semibold dark:text-white text-black/70">
                  Software Engineering Intern
                </h3>
                <p className="text-sm text-muted-foreground ">
                  <Link
                    href="https://www.firstmate.tech/"
                    target="_blank"
                    className="underline"
                  >
                    First Mate Technologies
                  </Link>{" "}
                  · Jan 2025 - Apr 2025
                </p>
                <p className="mt-1 text-sm">
                  Built UI for an AI tool using Python, and assisted web
                  scraping with Playwright and TypeScript.
                </p>
              </div>
            </CardDescription>
          </CardContent>
        </Card>

        {/* Featured Projects */}
        <Card
          className="animate-fade-up col-span-1 md:col-span-2 lg:col-span-3"
          style={{ animationDelay: "400ms" }}
        >
          <CardHeader className="-mb-4">
            <CardTitle>Featured Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <button
                    className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <FileSearch className="w-4 h-4" />
                  </button>
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors cursor-pointer"
                    >
                      <SquareArrowOutUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-1 text-sm items-center">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Dynamic Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              {/* Scrollable Image List */}
              <div className="flex flex-col gap-3 mt-4 ">
                {(selectedProject.images ?? []).map(
                  (src: string, index: number) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`${selectedProject.title} Preview ${index + 1}`}
                      width={800}
                      height={400}
                      className="rounded-lg border object-cover w-auto"
                    />
                  )
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
      <div className="block sm:hidden">
        <Card className="mt-5">
          <CardContent className="flex justify-between items-center">
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
              <Link href="https://www.facebook.com/lex.oxales" target="_blank">
                <Facebook className="w-5 h-5 hover:text-cyan-500 transition-colors text-muted-foreground" />
              </Link>
            </div>
            <DarkModeToggle />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </section>
  );
}
