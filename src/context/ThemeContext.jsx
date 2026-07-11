import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const themes = {
    modern: {
        bg: "bg-modern",
        surface: "bg-white/80 backdrop-blur-xl",
        borderFull: "border border-slate-200/80",
        borderColor: "border-slate-200/80",
        divide: "divide-slate-200/70",
        text: "text-slate-950",
        textSecondary: "text-slate-500",
        accent: "text-indigo-600",
        input: "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400",
        button: "border-slate-200 bg-white hover:bg-slate-50 text-slate-900",
        rounded: "rounded-xl",
        roundedControl: "rounded-xl",
        shadow: "shadow-lg shadow-slate-200/50",
        font: "font-sans",
        error: "text-red-700",
    },
    warm: {
        bg: "bg-warm",
        surface: "bg-white/70 backdrop-blur-xl",
        borderFull: "border border-[#E8D5B5]",
        borderColor: "border-[#E8D5B5]",
        divide: "divide-[#E8D5B5]/60",
        text: "text-[#3A2A1E]",
        textSecondary: "text-[#806B58]",
        accent: "text-[#C2410C]",
        input: "bg-white/80 border-[#D8B88A] text-[#3A2A1E] placeholder-[#A58A70]",
        button: "border-[#C2410C]/30 bg-white hover:bg-[#FCBF49]/20 text-[#C2410C]",
        rounded: "rounded-3xl",
        roundedControl: "rounded-xl",
        shadow: "shadow-xl shadow-orange-900/10",
        font: "font-serif",
        error: "text-orange-900",
    },

    retro: {
        bg: "bg-retro",
        surface: "bg-[#C0C0C0]",
        borderFull: "border-2 border-[#808080]",
        borderColor: "border-[#808080]",
        divide: "divide-[#808080]",
        text: "text-black",
        textSecondary: "text-[#222222]",
        accent: "text-[#000080]",
        input: "bg-white border-2 border-[#808080] text-black placeholder-[#666666]",
        button: "border-2 border-[#808080] bg-[#C0C0C0] hover:bg-[#D8D8D8] text-black",
        rounded: "rounded-none",
        roundedControl: "rounded-none",
        shadow: "shadow-[inset_1px_1px_#FFFFFF,inset_-1px_-1px_#808080,inset_2px_2px_#dfdfdf,inset_-2px_-2px_#404040]",
        font: "font-mono",
        error: "text-red-700",
    },

    dark: {
        bg: "bg-dark",
        surface: "bg-[#18181B]/90 backdrop-blur-xl",
        borderFull: "border border-white/10",
        borderColor: "border-white/10",
        divide: "divide-white/10",
        text: "text-zinc-100",
        textSecondary: "text-zinc-400",
        accent: "text-emerald-400",
        input: "bg-[#202023] border-white/10 text-zinc-100 placeholder-zinc-500",
        button: "border-white/10 bg-[#18181B] hover:bg-white/5 text-zinc-100",
        rounded: "rounded-sm",
        roundedControl: "rounded-lg",
        shadow: "shadow-2xl shadow-black/60",
        font: "font-sans",
        error: "text-red-200",
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
