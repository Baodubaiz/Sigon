type TeamCardProps = {
    name: string
    role: string
    image?: string
    bio?: string
}

function TeamCard({ name, role, image, bio }: TeamCardProps) {
    return (
        <article className="team-card">
            {image ? <img src={image} alt={name} className="team-card-image" /> : null}
            <div className="team-card-content">
                <h3>{name}</h3>
                <p className="team-role">{role}</p>
                {bio ? <p>{bio}</p> : null}
            </div>
        </article>
    )
}

export default TeamCard
