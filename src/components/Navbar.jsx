import { useEffect, useState } from "react";
import "../assets/css/animations.css";

const Navbar = () => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const next = !isDarkMode;
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
  };

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors animate-fade-in-up">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="17.5"
          viewBox="0 0 448 512"
        >
          <path
            fill="rgb(99, 230, 190)"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
        <span>SequFlow</span>
        {/* Lemon Group mark */}
        <div className="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path
              fill="rgb(255, 212, 59)"
              d="M544 160C544 124.7 515.3 96 480 96C473.4 96 467 97 461 98.9C438.5 105.9 412.9 113.8 390 107.9C314.8 88.8 233.6 118.9 176.3 176.2C119 233.5 88.8 314.8 107.9 390C113.7 412.9 105.9 438.4 98.9 461C97 467 96 473.4 96 480C96 515.3 124.7 544 160 544C166.6 544 173 543 179.1 541.1C201.6 534.1 227.2 526.2 250.1 532.1C325.3 551.2 406.5 521.1 463.8 463.8C521.1 406.5 551.2 325.2 532.1 250C526.3 227.1 534.1 201.6 541.1 179C543 173 544 166.6 544 159.9zM318.7 207C266.7 222.2 222.2 266.7 207 318.7C203.3 331.4 189.9 338.7 177.2 335C164.5 331.3 157.2 318 161 305.3C180.8 237.6 237.6 180.8 305.3 161C318 157.3 331.4 164.6 335.1 177.3C338.8 190 331.5 203.4 318.8 207.1z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span
            key={isDarkMode ? "sun" : "moon"}
            className="inline-block animate-scale-in"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </span>
        </button>

        <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2 rounded-lg text-sm transition-all duration-300 shadow-sm hover:shadow-blue-500/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;