export default function manifest() {
    return {
        name: 'Coconet - Digital Marketing & Web Development',
        short_name: 'Coconet',
        description: 'Premier digital marketing and web development agency',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#8b5cf6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
