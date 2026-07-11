import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ThemeProvider } from "../context/ThemeContext";
import AddProjectForm from "../components/AddProjectForm";

function renderWithTheme(component) {
    return render(<ThemeProvider>{component}</ThemeProvider>);
}

test("shows error when fields are empty", async () => {
    const user = userEvent.setup();

    renderWithTheme(<AddProjectForm onAdd={() => {}} />);

    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("Please fill out all fields.")).toBeInTheDocument();
});

test("submits project data", async () => {
    const user = userEvent.setup();

    const mockAdd = jest.fn();

    renderWithTheme(<AddProjectForm onAdd={mockAdd} />);

    await user.type(screen.getByLabelText("Title"), "Test Project");

    await user.type(screen.getByLabelText("Description"), "Description");

    await user.type(
        screen.getByLabelText("Image (URL)"),
        "https://example.com/image.jpg",
    );

    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(mockAdd).toHaveBeenCalledWith({
        title: "Test Project",
        description: "Description",
        image: "https://example.com/image.jpg",
    });
});
