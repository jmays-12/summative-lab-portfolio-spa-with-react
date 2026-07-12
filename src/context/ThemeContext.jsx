import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const sharedStyles = {
    transition: "transition-colors duration-200",
};

export const themes = {
    modern: {
        ...sharedStyles,
        bg: "bg-modern",
        surface: "bg-white/90 backdrop-blur-xl",
        borderFull: "border border-slate-200/80",
        borderColor: "border-slate-200/80",
        divide: "divide-slate-200/70",
        heading: "text-slate-950",
        text: "text-slate-800",
        textSecondary: "text-slate-500",
        accent: "text-gray-600",
        input: "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400",
        button: "border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
        rounded: "rounded-xl",
        roundedControl: "rounded-xl",
        shadow: "shadow-lg shadow-slate-200/50",
        font: "font-[Georgia_serif]",
        error: "text-red-600",
    },

    warm: {
        ...sharedStyles,
        bg: "bg-warm",
        surface: "bg-[#FFFBF5]/90 backdrop-blur-xl",
        borderFull: "border border-[#E7D2B0]",
        borderColor: "border-[#E7D2B0]",
        divide: "divide-[#E7D2B0]/60",
        heading: "text-[#352015]",
        text: "text-[#4F3828]",
        textSecondary: "text-[#806653]",
        accent: "text-[#B45309]",
        input: "bg-[#FFFDF8] border-[#D9B98A] text-[#352015] placeholder-[#A88B72] focus:border-[#B45309]",
        button: "border-[#D9B98A] bg-[#FFFBF5] hover:bg-[#FDE68A]/30 text-[#B45309]",
        rounded: "rounded-3xl",
        roundedControl: "rounded-xl",
        shadow: "shadow-xl shadow-amber-900/10",
        font: "font-sans",
        error: "text-red-700",
    },

    retro: {
        ...sharedStyles,
        bg: "bg-retro",
        surface: "bg-white",
        borderFull: "border-4 border-black",
        borderColor: "border-black",
        divide: "divide-black",
        heading: "text-black",
        text: "text-black",
        textSecondary: "text-neutral-600",
        accent: "text-[#F76FA0]",
        input: "bg-white border-2 border-black text-black placeholder-neutral-400 focus:border-[#2FD9C4]",
        button: "border-2 border-black bg-white hover:bg-[#F9D34C] text-black focus-visible:ring-2 focus-visible:ring-[#2FD9C4] focus-visible:outline-none",
        rounded: "rounded-none",
        roundedControl: "rounded-none",
        shadow: "shadow-[6px_6px_0_0_#000]",
        font: "font-[Tahoma]",
        error: "text-[#D62828]",
    },

    dark: {
        ...sharedStyles,
        bg: "bg-dark",
        surface: "bg-[#18181B]/90 backdrop-blur-xl",
        borderFull: "border border-white/10",
        borderColor: "border-white/10",
        divide: "divide-white/10",
        heading: "text-zinc-50",
        text: "text-zinc-100",
        textSecondary: "text-zinc-400",
        accent: "text-stone-400",
        input: "bg-[#202023] border-white/10 text-zinc-100 placeholder-zinc-500 focus:border-emerald-400",
        button: "border-white/10 bg-[#18181B] hover:bg-white/5 text-zinc-100",
        rounded: "rounded-lg",
        roundedControl: "rounded-md",
        shadow: "shadow-2xl shadow-black/60",
        font: "font-['Segoe_UI','Arial','sans-serif']",
        error: "text-red-300",
    },
};

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("modern");

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, styles: themes[theme] }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
