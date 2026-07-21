import { useEffect, useState } from "react";

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
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="flex text-xl font-bold tracking-tight items-center gap-x-2 text-slate-900 dark:text-white">
            <span className="text-blue-500 items-center">
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
            </span>{" "}
            SequFlow
          {/* Lemon Logo */}
          <div className="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="rgb(255, 212, 59)"
                d="M544 160C544 124.7 515.3 96 480 96C473.4 96 467 97 461 98.9C438.5 105.9 412.9 113.8 390 107.9C314.8 88.8 233.6 118.9 176.3 176.2C119 233.5 88.8 314.8 107.9 390C113.7 412.9 105.9 438.4 98.9 461C97 467 96 473.4 96 480C96 515.3 124.7 544 160 544C166.6 544 173 543 179.1 541.1C201.6 534.1 227.2 526.2 250.1 532.1C325.3 551.2 406.5 521.1 463.8 463.8C521.1 406.5 551.2 325.2 532.1 250C526.3 227.1 534.1 201.6 541.1 179C543 173 544 166.6 544 159.9zM318.7 207C266.7 222.2 222.2 266.7 207 318.7C203.3 331.4 189.9 338.7 177.2 335C164.5 331.3 157.2 318 161 305.3C180.8 237.6 237.6 180.8 305.3 161C318 157.3 331.4 164.6 335.1 177.3C338.8 190 331.5 203.4 318.8 207.1z"
              />
            </svg>
          </div>
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2 rounded-lg text-sm transition-colors shadow-sm">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
