import { useState } from "react";

function AddProjectForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // prevent empty submissions
        if (!title.trim()) return;

        onAdd({ title, description });

        // reset the form after adding
        setTitle("");
        setDescription("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border rounded-lg p-6 flex flex-col gap-4"
        >
            <h2 className="text-2xl font-bold">Add Project</h2>

            <div>
                <label className="block mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    rows={4}
                />
            </div>

            <button type="submit" className="border rounded px-4 py-2 w-fit">
                Add
            </button>
        </form>
    );
}

export default AddProjectForm;
