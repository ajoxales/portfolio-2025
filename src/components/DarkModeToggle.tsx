"use client";

import React, { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle";
import { SunMoon } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode(() => {
      const stored = localStorage.getItem("darkMode");
      return stored ? JSON.parse(stored) : true;
    });

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Toggle onClick={() => setDarkMode(!darkMode)} variant="outline">
      <SunMoon className="w-4 h-4" />
    </Toggle>
  );
}
