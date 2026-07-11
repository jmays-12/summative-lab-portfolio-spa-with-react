import { useTheme, themes } from "../context/ThemeContext";

function ThemeSwitcher() {
    const { theme, setTheme, styles } = useTheme();

    return (
        <div className="flex items-center gap-2">
            <span
                className={`
                    text-sm
                    font-medium
                    ${styles.text}
                    ${styles.transition}
                `}
            >
                Theme:
            </span>

            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`
                    border
                    px-2
                    py-1
                    text-sm
                    ${styles.text}
                    ${styles.surface}
                    ${styles.roundedControl}
                    ${styles.borderColor}
                    ${styles.transition}
                `}
            >
                {Object.keys(themes).map((name) => (
                    <option key={name} value={name}>
                        {/* make theme names easier to read */}
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ThemeSwitcher;
