export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [],
        },
        sitemap: 'https://coconet.com/sitemap.xml', // Update with your actual domain
    };
}
