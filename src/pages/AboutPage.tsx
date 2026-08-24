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

function AboutPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">ABOUT US</p>
                <h1>We create soundscapes that elevate every scene and every emotion.</h1>
            </section>

            <section className="content-panel">
                <div className="about-copy large-copy">
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
        </>
    )
}

export default AboutPage
