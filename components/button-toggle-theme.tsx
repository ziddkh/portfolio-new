"use client";

import { SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ButtonToggleTheme() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <button onClick={toggleTheme} role="button" aria-label="Toggle theme">
            <SunMoonIcon size="20" />
        </button>
    )
}