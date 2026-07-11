import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";

function ProjectList({ projects }) {
    const { styles } = useTheme();

    if (!projects?.length) {
        // show a message instead of rendering an empty list
        return (
            <p
                className={`
                    p-4
                    ${styles.transition}
                    ${styles.textSecondary}
                `}
            >
                No projects found!
            </p>
        );
    }

    return (
        <div
            className={`
                divide-y
                ${styles.transition}
                ${styles.divide}
            `}
        >
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}

export default ProjectList;
