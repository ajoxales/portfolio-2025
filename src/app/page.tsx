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
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  SunMoon,
} from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
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
    <section className="container max-w-6xl mx-auto">
      <div className="grid md:hidden grid-cols-1">
        <Card className="animate-fade-up mb-5">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Alexander Joseph Oxales
            </CardTitle>
            <CardDescription className="text-center text-sm mb-1">
              Front end developer with a passion for building web applications.
            </CardDescription>
            <CardContent>
              <div className="flex justify-center">
                <span className="inline-block text-sky-800 dark:text-sky-200 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200 dark:border-sky-700 bg-linear-to-t from-sky-500/20 to-sky-500/10">
                  Open to work
                </span>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="animate-fade-up mb-5">
          <CardContent>
            <Image
              src="/images/profile-photo-2.png"
              alt="Profile Photo"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 mb-5">
        <Card className="animate-fade-up col-span-2 md:mb-0 mb-5">
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

        <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 mb-5">
        <Card
          className="animate-fade-up md:mb-0 mb-5"
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
        <Card
          className="animate-fade-up col-span-2"
          style={{ animationDelay: "300ms" }}
        >
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription className="-mb-2">
              A quick overview of my journey so far — building, learning, and
              growing as a front-end developer.
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
                <p className="text-sm text-muted-foreground">
                  First Mate Technologies · Jan 2025 - Apr 2025
                </p>
                <p className="mt-1 text-sm">
                  Built UI for an AI tool using Python, and assisted web
                  scraping with Playwright and TypeScript.
                </p>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="animate-fade-up" style={{ animationDelay: "400ms" }}>
          <CardHeader className="-mb-4">
            <CardTitle>Featured Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold">Balboa Digital LMS</h3>
              <p className="text-sm text-muted-foreground">
                Developed an LMS for employee training, replacing
                spreadsheet-based tracking. Enabled secure logins, progress
                tracking, and course management.
              </p>
              <div className="mt-1 flex flex-wrap gap-1 text-sm items-center">
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  CoreUI
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Bootstrap
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Supabase
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  AWS
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Personal Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                A responsive developer portfolio showcasing my skills,
                experience, and featured projects.
              </p>
              <div className="mt-1 flex flex-wrap gap-1 text-sm items-center">
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Tailwind CSS
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Shadcn UI
                </span>
                <span className="inline-flex items-center rounded-sm border border-gray-500/50 px-2 py-0.5 text-xs dark:text-white text-black/70">
                  Lucide Icons
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="block md:hidden">
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
    </section>
  );
}
