import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Alexander Oxales",
  description:
    "Front-end developer skilled in React, Next.js, and modern web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='1em' font-size='85'>🚀</text></svg>"
        />
      </head>
      <body
        className={`container max-w-7xl mx-auto antialiased font-sans bg-white dark:bg-black`}
      >
        <main className="flex">
          <Sidebar />
          <div className="flex-1 p-5 md:p-10 overflow-auto md:ml-[250px] lg:ml-[300px]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
