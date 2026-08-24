export type Project = {
    title: string
    image: string
    imdb: string
}

export const projects: Project[] = [
    {
        title: 'Phí Phông',
        image: new URL('../assets/images/projects/Phí Phông.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com',
    },
    {
        title: 'Thám Tử Kiên',
        image: new URL('../assets/images/projects/Thám Tử Kiên.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com',
    },
    {
        title: 'Tử Chiến Trên Không',
        image: new URL('../assets/images/projects/Tử Chiến Trên Không.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com',
    },
    {
        title: 'Lật Mặt 7: Một Điều Ước',
        image: new URL('../assets/images/projects/Lật Mặt 7.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com',
    },
]
