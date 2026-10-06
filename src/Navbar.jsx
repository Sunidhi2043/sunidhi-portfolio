import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 pt-4"
    >
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-black/20">

          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleNavClick}
            className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Sunidhi
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * index,
                  duration: 0.35,
                }}
                whileHover={{ y: -1 }}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">

            {/* Dark mode */}
            <motion.button
              type="button"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    ☀️
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    🌙
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -5 }
                    : { rotate: 0, y: 0 }
                }
                className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <div className="p-3 rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}