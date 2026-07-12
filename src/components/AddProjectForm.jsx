import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function AddProjectForm({ onAdd }) {
    const { styles } = useTheme();

    // form values
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    // used to show validation messages
    const [error, setError] = useState("");

    function handleSubmit(e) {
        // stop browser from refreshing
        e.preventDefault();

        // basic required field check
        if (!title.trim() || !description.trim() || !image.trim()) {
            setError("Please fill out all fields.");
            return;
        }

        setError("");

        // send new project back to parent component
        onAdd({
            title,
            description,
            image,
        });

        // clear form after adding
        setTitle("");
        setDescription("");
        setImage("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`
                p-6
                flex flex-col gap-4
                ${styles.surface}
                ${styles.borderFull}
                ${styles.rounded}
                ${styles.shadow}
                ${styles.transition}
            `}
        >
            <h2
                className={`
                    text-2xl
                    font-bold
                    text-shadow-xs
                    ${styles.font}
                    ${styles.heading}
                    ${styles.transition}
                `}
            >
                Add Project
            </h2>

            <div>
                <label
                    htmlFor="title"
                    className={`
                        block
                        mb-1
                        ${styles.font}
                        ${styles.text}
                        ${styles.transition}
                    `}
                >
                    Title
                </label>

                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setError("");
                    }}
                    placeholder="Project title"
                    className={`
                        w-full
                        border
                        rounded
                        px-3
                        py-2
                        ${styles.font}
                        ${styles.input}
                        ${styles.transition}
                    `}
                />
            </div>

            <div>
                <label
                    htmlFor="description"
                    className={`
                        block
                        mb-1
                        ${styles.font}
                        ${styles.text}
                        ${styles.transition}
                    `}
                >
                    Description
                </label>

                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        setError("");
                    }}
                    placeholder="Describe your project..."
                    className={`
                        w-full
                        border
                        rounded
                        px-3
                        py-2
                        ${styles.font}
                        ${styles.input}
                        ${styles.transition}
                    `}
                    rows={4}
                />
            </div>

            <div>
                <label
                    htmlFor="image"
                    className={`
                        block
                        mb-1
                        ${styles.font}
                        ${styles.text}
                        ${styles.transition}
                    `}
                >
                    Image (URL)
                </label>

                <input
                    id="image"
                    type="url"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                        setError("");
                    }}
                    placeholder="http://example.com/image.jpg"
                    className={`
                        w-full
                        border
                        rounded
                        px-3
                        py-2
                        ${styles.font}
                        ${styles.input}
                        ${styles.transition}
                    `}
                />
            </div>

            {/* only appears when validation fails */}
            {error && (
                <div
                    className={`
                        px-4
                        py-3
                        ${styles.error}
                        ${styles.rounded}
                        ${styles.transition}
                    `}
                >
                    {error}
                </div>
            )}

            <button
                type="submit"
                className={`
                    border
                    ${styles.roundedControl}
                    px-4
                    py-2
                    w-fit
                    ${styles.button}
                    ${styles.transition}
                `}
            >
                Add
            </button>
        </form>
    );
}

export default AddProjectForm;
