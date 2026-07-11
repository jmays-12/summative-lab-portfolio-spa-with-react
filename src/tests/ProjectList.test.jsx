import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider } from "../context/ThemeContext";
import ProjectList from "../components/ProjectList";

function renderWithTheme(component) {
    return render(<ThemeProvider>{component}</ThemeProvider>);
}

test("renders project data", () => {
    const projects = [
        {
            id: 1,
            title: "Project A",
            description: "Description A",
        },
    ];

    renderWithTheme(<ProjectList projects={projects} />);

    expect(screen.getByText("Project A")).toBeInTheDocument();
});

test("shows empty message when no projects exist", () => {
    renderWithTheme(<ProjectList projects={[]} />);

    expect(screen.getByText("No projects found!")).toBeInTheDocument();
});

test("handles null projects", () => {
    renderWithTheme(<ProjectList projects={null} />);

    expect(screen.getByText("No projects found!")).toBeInTheDocument();
});
