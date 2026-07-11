import { useTheme } from "../context/ThemeContext";

function SearchBar({ query, onQueryChange }) {
    const { styles } = useTheme();

    return (
        <input
            type="text"
            placeholder="Search projects by title"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className={`
                w-full
                border
                rounded
                px-3
                py-2
                ${styles.input}
                ${styles.transition}
            `}
        />
    );
}

export default SearchBar;
