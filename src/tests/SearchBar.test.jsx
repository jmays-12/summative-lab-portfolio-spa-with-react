import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeProvider } from "../context/ThemeContext";
import SearchBar from "../components/SearchBar";

test("calls onQueryChange when typing", async () => {
    const user = userEvent.setup();

    const mockChange = jest.fn();

    render(
        <ThemeProvider>
            <SearchBar query="" onQueryChange={mockChange} />
        </ThemeProvider>,
    );

    await user.type(
        screen.getByPlaceholderText("Search projects by title"),
        "react",
    );

    expect(mockChange).toHaveBeenCalled();
});
