import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { styles } = useTheme();

    return (
        <header
            className={`
                border-b
                py-6
                px-4
                text-shadow-lg
                flex
                flex-col
                gap-4
                items-center
                sm:grid
                sm:grid-cols-3
                sm:gap-0
                ${styles.transition}
                ${styles.font}
                ${styles.surface}
                ${styles.borderColor}
            `}
        >
            {/* keeps the title centered when the theme switcher is on the right */}
            <div className="hidden sm:block" />

            <h1
                className={`
                    text-2xl
                    sm:text-4xl
                    font-bold
                    text-center
                    ${styles.font}
                    ${styles.text}
                `}
            >
                Personal Project Showcase
            </h1>

            <div className="sm:justify-self-end">
                <ThemeSwitcher />
            </div>
        </header>
    );
}

export default Header;
