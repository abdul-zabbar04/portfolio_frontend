import React, { useState, useEffect } from "react";

const ThemeMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="flex items-center justify-center p-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition duration-300 
                bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                hover:bg-gray-300 dark:hover:bg-gray-700"
            >
                {theme === "dark" ? (
                    // Moon Icon for Dark Mode
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
                    </svg>
                ) : (
                    // Sun Icon for Light Mode
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2v2m0 16v2m8-10h2m-18 0H2m15.07 7.07 1.41 1.41M4.93 4.93 3.52 3.52m12.55 14.07-1.41 1.41M6.34 6.34 4.93 4.93"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ThemeMode;
