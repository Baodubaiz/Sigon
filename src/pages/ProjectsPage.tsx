import { awards } from '../data/awards'
import { projects } from '../data/projects'

function ProjectsPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">PROJECTS</p>
                <h1>Our highest-grossing films and standout audio stories.</h1>
            </section>

            <section className="poster-block">
                <div className="poster-grid">
                    {projects.map((project) => (
                        <article key={project.title} className="poster-card">
                            <img src={project.image} alt={project.title} />
                            <div className="poster-hover">
                                <span>{project.title}</span>
                                <a href={project.imdb} target="_blank" rel="noreferrer">
                                    IMDb
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="awards-section">
                <div className="section-heading centered-heading">
                    <p className="eyebrow">OUR REWARDS</p>
                    <h2>Recognized through award-winning sound work.</h2>
                </div>

                <div className="awards-grid">
                    {awards.map((award) => (
                        <div key={award.title} className="award-item">
                            <span>{award.year}</span>
                            <strong>{award.title}</strong>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProjectsPage
