export type TeamMember = {
    name: string
    role: string
    image: string
    imdb?: string
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Vũ Thành Long',
        role: 'Sound Supervisor / Re-Recording Mixer',
        image: new URL('../assets/images/team/Vu Thanh Long.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com/name/nm10072997/',
    },
    {
        name: 'Nguyễn Khánh Nam',
        role: 'Re-Recording Mixer / Sound Designer',
        image: new URL('../assets/images/team/Nguyen Khanh Nam.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com/name/nm10943543/',
    },
    {
        name: 'Dung Lai',
        role: 'Sound Post Producer',
        image: new URL('../assets/images/team/Dung Lai.jpg', import.meta.url).href,
        imdb: 'https://www.imdb.com/name/nm10072996/',
    },
    {
        name: 'Vương Gia Bảo',
        role: 'Re-Recording Mixer / Sound Designer',
        image: new URL('../assets/images/team/Vuong Gia Bao.jpg', import.meta.url).href,
    },
    {
        name: 'Ngân Nguyễn',
        role: 'Sound Post Producer / Operation Manager',
        image: new URL('../assets/images/team/Ngan Nguyen.jpg', import.meta.url).href,
    },
    {
        name: 'JIRO',
        role: 'Sound Designer / Mix Mastering Music',
        image: new URL('../assets/images/team/Jiro.jpg', import.meta.url).href,
    },
    {
        name: 'Huy Lê',
        role: 'Sound Designer',
        image: new URL('../assets/images/team/Huy Le.jpg', import.meta.url).href,
    },
    {
        name: 'Hoàng Yến Nhi',
        role: 'Sound Designer',
        image: new URL('../assets/images/team/Hoang Yen Nhi.jpg', import.meta.url).href,
    },
    {
        name: 'Trần Xuân Cát Tường',
        role: 'Sound Designer',
        image: new URL('../assets/images/team/Tran Xuan Cat Tuong.jpg', import.meta.url).href,
    },
]
