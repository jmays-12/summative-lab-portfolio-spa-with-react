// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectsData from "./data/ProjectsData.jsx";

function App() {
    const [projects, setProjects] = useState(ProjectsData); // initial data set
    const [query, setQuery] = useState("");

    function addProject(newProject) {
        setProjects((prev) => [...prev, { id: Date.now(), ...newProject }]);
    }

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div>
            <Header />
            <AddProjectForm onAdd={addProject} />
            <SearchBar query={query} onQueryChange={setQuery} />
            <ProjectList projects={filteredProjects} />
        </div>
    );
}

export default App;
