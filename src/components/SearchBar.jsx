function SearchBar({ query, onQueryChange }) {
    return (
        <input
            type="text"
            placeholder="Search Projects"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full border rounded px-3 py-2"
        />
    );
}

export default SearchBar;
