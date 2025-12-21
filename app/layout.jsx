import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from '../src/context/ThemeContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import CustomCursor from '../src/components/CustomCursor';
import WhatsAppButton from '../src/components/WhatsAppButton';
import '../src/index.css';
import '../src/App.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata = {
    title: {
        default: 'Coconet | Digital Marketing & Web Development',
        template: '%s | Coconet',
    },
    description: 'Coconet is a premier digital marketing and web development agency. We craft stunning websites and powerful marketing strategies to grow your business.',
    keywords: ['digital marketing', 'web development', 'SEO', 'branding', 'web design', 'marketing agency'],
    authors: [{ name: 'Coconet' }],
    creator: 'Coconet',
    publisher: 'Coconet',
    metadataBase: new URL('https://coconet.com'), // Update with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://coconet.com', // Update with your actual domain
        siteName: 'Coconet',
        title: 'Coconet | Digital Marketing & Web Development',
        description: 'Coconet is a premier digital marketing and web development agency. We craft stunning websites and powerful marketing strategies to grow your business.',
        images: [
            {
                url: '/og-image.jpg', // Add your OG image
                width: 1200,
                height: 630,
                alt: 'Coconet - Digital Marketing & Web Development',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coconet | Digital Marketing & Web Development',
        description: 'Coconet is a premier digital marketing and web development agency. We craft stunning websites and powerful marketing strategies to grow your business.',
        images: ['/og-image.jpg'], // Add your Twitter card image
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add your verification codes
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <meta name="theme-color" content="#5D4037" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%235D4037'/><circle cx='50' cy='50' r='30' fill='%23EBE5D9'/></svg>" />
            </head>
            <body>
                <ThemeProvider>
                    <div className="app">
                        <CustomCursor />
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <ScrollToTop />
                        <WhatsAppButton />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
