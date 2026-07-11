import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ThemeProvider } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";

test("renders project information", () => {
    render(
        <ThemeProvider>
            <ProjectCard
                title="Test Project"
                description="Test description"
                image=""
            />
        </ThemeProvider>,
    );

    expect(screen.getByTestId("project-card-title")).toHaveTextContent(
        "Test Project",
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
});

test("renders project image", () => {
    render(
        <ThemeProvider>
            <ProjectCard
                title="Image Project"
                description="desc"
                image="test.jpg"
            />
        </ThemeProvider>,
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
});
