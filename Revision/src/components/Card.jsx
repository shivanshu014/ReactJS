import { useEffect, useState } from "react";
import useTheme from "../context/theme.js"

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const {darktheme, lighttheme} = useTheme();

    if(darkMode) {
        darktheme()
    }else{
        lighttheme();
    }
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-105 transition"
    >
      {darkMode ? (
        // 🌙 Moon (dark mode active)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-400"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      ) : (
        // ☀️ Sun (light mode active)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-500"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.05l-1.41-1.41M6.46 6.46L5.05 5.05m12.9 0l-1.41 1.41M6.46 17.54l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
