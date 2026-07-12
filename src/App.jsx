import { useState } from "react";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import { useTheme } from "./context/ThemeContext.jsx";

//import ProjectsData from "./data/ProjectsData.jsx";
// ^ optional dummy data to populate project list
function App() {
    const { styles } = useTheme();

    const [projects, setProjects] = useState([]);
    //const [projects, setProjects] = useState(ProjectsData);
    //use this state instead for dummy data
    const [query, setQuery] = useState("");

    function addProject(newProject) {
        // add a unique id so each project can be tracked individually
        setProjects((prev) => [
            ...prev,
            {
                id: uuid(),
                ...newProject,
            },
        ]);
    }

    // filters projects whenever the search query changes
    const filteredProjects = projects.filter((project) => {
        const formattedQuery = query.toLowerCase();

        return (
            project.title.toLowerCase().includes(formattedQuery) ||
            project.description.toLowerCase().includes(formattedQuery)
        );
    });

    return (
        <div
            className={`
                min-h-screen
                ${styles.bg}
                ${styles.transition}
            `}
        >
            <Header />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">
                <AddProjectForm onAdd={addProject} />

                <div
                    className={`
                        ${styles.rounded}
                        ${styles.shadow}
                        overflow-hidden
                        ${styles.surface}
                        ${styles.borderFull}
                        ${styles.transition}
                    `}
                >
                    <div
                        className={`
                            p-4
                            border-b
                            ${styles.borderColor}
                        `}
                    >
                        <SearchBar query={query} onQueryChange={setQuery} />
                    </div>

                    <ProjectList projects={filteredProjects} />
                </div>
            </main>
        </div>
    );
}

export default App;
