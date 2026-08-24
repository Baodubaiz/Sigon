import heroImg from '../assets/images/studio/Mix room.jpg'
import { Showreel } from '../sections/Showreel/Showreel'
import { Link } from 'react-router-dom'
import { awards } from '../data/awards'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { teamMembers } from '../data/team'

const values = [
    {
        title: 'QUALITY',
        description:
            'We are committed to delivering the highest standards of audio excellence. Backed by an experienced team of audio professionals, every project is crafted to achieve outstanding sonic quality and meet the technical requirements of theatrical releases, broadcast, and global streaming platforms.',
    },
    {
        title: 'CREATIVITY',
        description:
            'We believe sound is more than a technical process—it is a powerful storytelling tool. Every soundscape is thoughtfully designed to support each client\'s creative vision while delivering emotionally engaging and immersive experiences.',
    },
    {
        title: 'PROFESSIONALISM',
        description:
            'Professionalism is at the heart of everything we do. By understanding each project\'s unique goals and challenges, we provide reliable, tailored audio solutions and work closely with our clients to ensure every production reaches its full potential.',
    },
]

function HomePage() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">SIGON SOUND PRODUCTION</p>
                    <h1>Crafting immersive sound that elevates every story.</h1>
                    <p className="hero-text">
                        Sigon Sound is one of Vietnam&apos;s leading sound production studios,
                        dedicated to crafting immersive and high-quality sonic experiences for
                        films, commercials, documentaries, and live productions.
                    </p>

                    <div className="hero-actions">
                        <Link className="primary-btn" to="/projects">
                            View projects
                        </Link>
                        <Link className="secondary-btn" to="/contact">
                            Book a session
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <strong>7</strong>
                            <span>sound rooms</span>
                        </div>
                        <div>
                            <strong>10+</strong>
                            <span>years experience</span>
                        </div>
                        <div>
                            <strong>80+</strong>
                            <span>feature films</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <img src={heroImg} alt="Sigon sound studio" />
                </div>
            </section>

            <section className="about-section">
                <div className="section-heading left-aligned">
                    <p className="eyebrow">ABOUT US</p>
                    <h2>We create soundscapes that elevate every scene and every emotion.</h2>
                </div>

                <div className="about-grid">
                    <div className="about-copy">
                        <p>
                            Sigon Sound is one of Vietnam&apos;s leading sound production studios,
                            dedicated to crafting immersive and high-quality sonic experiences. We
                            provide comprehensive services including location sound recording, sound
                            design, foley, audio post-production, mixing, and mastering for
                            blockbuster films, international commercials, and creative projects.
                        </p>
                        <p>
                            With state-of-the-art facilities and a passionate team of audio
                            professionals, we create compelling soundscapes that elevate every story.
                        </p>
                    </div>

                    <div className="info-panel">
                        <div>
                            <span>Since</span>
                            <strong>2022</strong>
                        </div>
                        <div>
                            <span>Studio</span>
                            <strong>7 sound rooms</strong>
                        </div>
                        <div>
                            <span>Focus</span>
                            <strong>Film, events, commercial</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section dark-panel">
                <div className="section-heading left-aligned light-heading">
                    <p className="eyebrow">OUR VISION</p>
                    <h2>
                        Sigon Sound delivers world-class audio post-production that elevates
                        storytelling through exceptional craftsmanship and technical excellence.
                    </h2>
                </div>

                <div className="mission-row">
                    <div>
                        <p className="mini-label">OUR MISSION</p>
                        <p>
                            To create immersive sonic experiences that elevate storytelling through
                            creativity, precision, and technical excellence.
                        </p>
                    </div>

                    <div>
                        <p className="mini-label">OUR VALUES</p>
                        <p>
                            At Sigon Sound, everything we do is guided by three core values that
                            define our creative approach, technical standards, and commitment to
                            excellence.
                        </p>
                    </div>
                </div>

                <div className="values-grid">
                    {values.map((value) => (
                        <article key={value.title} className="value-card">
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="services-section">
                <div className="section-heading centered-heading">
                    <p className="eyebrow">SERVICES</p>
                    <h2>Audio solutions for stories that deserve to be heard.</h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <article key={service.title} className="service-card">
                            <div className="service-icon" aria-hidden="true">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <Showreel />

            <section className="projects-section">
                <div className="section-heading centered-heading">
                    <p className="eyebrow">PROJECTS</p>
                    <h2>Our highest-grossing films</h2>
                </div>

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

            <section className="team-section">
                <div className="section-heading centered-heading">
                    <p className="eyebrow">TEAMS</p>
                    <h2>Meet the people behind the sound.</h2>
                </div>

                <div className="team-grid">
                    {teamMembers.slice(0, 3).map((member) => (
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

export default HomePage
