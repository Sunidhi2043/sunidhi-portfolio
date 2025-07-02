import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    "home",
    "about",
    "projects",
    "experience",
    "skills",
    "extracurricular",
    "contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm transition">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-white dark:text-blue-400">
          .
        </span>
        <div className="flex gap-4 items-center">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="capitalize text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 text-sm border border-blue-600 text-blue-600 px-2.5 py-1 rounded-full hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
