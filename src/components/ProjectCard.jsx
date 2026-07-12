import { useTheme } from "../context/ThemeContext";

function ProjectCard({ title, description, image }) {
    const { styles } = useTheme();

    return (
        <div
            className={`
                p-4
                flex
                gap-4
                items-start
                ${styles.font}
                ${styles.text}
                ${styles.transition}
            `}
        >
            <div
                className={`
                    w-16
                    h-16
                    flex-shrink-0
                    ${styles.borderFull}
                    ${styles.rounded}
                    flex
                    items-center
                    justify-center
                    ${styles.textSecondary}
                    ${styles.transition}
                `}
            >
                {image ? (
                    <img
                        src={image}
                        alt={`${title} project`}
                        className={`
                            w-full
                            h-full
                            object-cover
                            ${styles.rounded}
                        `}
                    />
                ) : (
                    // fallback when no project image is provided
                    <span className="text-xs">no image</span>
                )}
            </div>

            <div>
                <h3
                    data-testid="project-card-title"
                    className={`
                        text-xl
                        font-semibold
                        ${styles.accent}

                    `}
                >
                    {title}
                </h3>

                <p className={`${styles.textSecondary}`}>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
