type ProjectCardProps = {
    title: string
    category: string
    image?: string
    description?: string
}

function ProjectCard({
    title,
    category,
    image,
    description,
}: ProjectCardProps) {
    return (
        <article className="project-card">
            {image ? <img src={image} alt={title} className="project-card-image" /> : null}
            <div className="project-card-content">
                <span className="project-tag">{category}</span>
                <h3>{title}</h3>
                {description ? <p>{description}</p> : null}
            </div>
        </article>
    )
}

export default ProjectCard
