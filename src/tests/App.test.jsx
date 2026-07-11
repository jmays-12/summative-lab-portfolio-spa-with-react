import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";
import { ThemeProvider } from "../context/ThemeContext";

jest.mock("uuid", () => ({
    v4: () => "test-id",
}));

function renderApp() {
    return render(
        <ThemeProvider>
            <App />
        </ThemeProvider>,
    );
}

test("renders the portfolio app", () => {
    renderApp();

    expect(screen.getByText("Personal Project Showcase")).toBeInTheDocument();

    expect(screen.getByText("Add Project")).toBeInTheDocument();
});

test("user can add a project and see it appear in the list", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.type(screen.getByLabelText("Title"), "New React Project");

    await user.type(
        screen.getByLabelText("Description"),
        "A project created during testing",
    );

    await user.type(
        screen.getByLabelText("Image (URL)"),
        "https://example.com/image.jpg",
    );

    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("New React Project")).toBeInTheDocument();

    expect(
        screen.getByText("A project created during testing"),
    ).toBeInTheDocument();
});

test("user can search projects", async () => {
    const user = userEvent.setup();

    renderApp();

    // add a project first
    await user.type(screen.getByLabelText("Title"), "React Dashboard");

    await user.type(screen.getByLabelText("Description"), "A dashboard app");

    await user.type(
        screen.getByLabelText("Image (URL)"),
        "https://example.com/image.jpg",
    );

    await user.click(screen.getByRole("button", { name: /add/i }));

    const search = screen.getByPlaceholderText("Search projects by title");

    await user.type(search, "Dashboard");

    expect(screen.getByText("React Dashboard")).toBeInTheDocument();
});
