import studioImage1 from '../assets/images/studio/Mix room.jpg'
import studioImage2 from '../assets/images/studio/New room.jpg'
import studioImage3 from '../assets/images/studio/Outside.jpg'

function StudioPage() {
    return (
        <>
            <section className="page-intro">
                <p className="eyebrow">SIGON STUDIO</p>
                <h1>Scaled for bigger stories, more ambitious projects, and stronger creative collaboration.</h1>
            </section>

            <section className="studio-layout">
                <div className="studio-copy">
                    <p>
                        Four years ago, Sigon Sound was a single, cramped studio where we squeezed
                        every session into the day. Today, we&apos;ve expanded to 7 dedicated sound
                        rooms, including 3 surround mixing suites and 4 sound editing rooms, each
                        equipped to handle complex, professional productions based in Vietnam.
                    </p>
                    <p>
                        This growth means more than just space. It means we can take on more
                        stories, collaborate with more filmmakers, and create an inspiring
                        environment where our team does their best work.
                    </p>
                </div>

                <div className="studio-gallery">
                    <img src={studioImage1} alt="Studio room" className="g1" />
                    <img src={studioImage2} alt="Mix room" className="g2" />
                    <img src={studioImage3} alt="Exterior studio" className="g3" />
                </div>
            </section>
        </>
    )
}

export default StudioPage
