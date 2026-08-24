export type Service = {
    title: string
    description: string
    icon: string
}

export const services: Service[] = [
    {
        title: 'LOCATION SOUND RECORDING',
        description:
            'Audio field recording for feature films, documentaries, commercials, and live events with precise capture and clean signal management.',
        icon: '◉',
    },
    {
        title: 'AUDIO POST PRODUCTION',
        description:
            'Sound supervision, sound design, editing, dialogue cleanup, and FX layering for films, shorts, and documentaries.',
        icon: '▣',
    },
    {
        title: 'SOUND LIVE EVENT',
        description:
            'Audio design and live sound support for exhibitions, conferences, cultural events, and branded experiences.',
        icon: '◌',
    },
    {
        title: 'OTHER SOUND SERVICES',
        description:
            'Mixing and sound design for games, TVCs, and digital content with a creative and technical-first workflow.',
        icon: '✦',
    },
]
