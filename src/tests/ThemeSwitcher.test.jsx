import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";

test("changes theme", async () => {
    const user = userEvent.setup();

    render(
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>,
    );

    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "dark");

    expect(select).toHaveValue("dark");
});
