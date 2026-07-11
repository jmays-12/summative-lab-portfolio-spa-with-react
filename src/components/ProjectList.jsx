// src/components/ProjectList.jsx
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    if (projects.length === 0) {
        return <p className="text-gray-500 p-4">No projects found.</p>;
    }
    return (
        <div className="border rounded-lg divide-y">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}

export default ProjectList;
