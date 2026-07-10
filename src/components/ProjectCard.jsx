function ProjectCard({ title, description, image }) {
  return (
    <div className="border rounded-lg p-4 flex gap-4 items-start">
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 border rounded flex items-center justify-center text-gray-400">
        {image ? (
          <img src={image} alt={`Screenshot of ${title} project`} className="w-full h-full object-cover rounded" />
        ) : (
          <span>X</span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;