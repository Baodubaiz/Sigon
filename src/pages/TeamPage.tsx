import { teamMembers } from '../data/team'

function TeamPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">TEAM</p>
                <h1>Meet the people behind the sound.</h1>
            </section>

            <section className="team-section">
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <article key={member.name} className="team-card">
                            <img src={member.image} alt={member.name} />
                            <div className="team-meta">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                {member.imdb && (
                                    <a href={member.imdb} target="_blank" rel="noreferrer">
                                        IMDb
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TeamPage
