import Hero from '../src/components/Hero';
import Marquee from '../src/components/Marquee';
import Services from '../src/components/Services';
import Portfolio from '../src/components/Portfolio';
import Clients from '../src/components/Clients';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

export const metadata = {
    title: 'Home',
    description: 'Coconet is a premier digital marketing and web development agency. We craft stunning websites and powerful marketing strategies to grow your business.',
    openGraph: {
        title: 'Coconet | Digital Marketing & Web Development',
        description: 'Coconet is a premier digital marketing and web development agency. We craft stunning websites and powerful marketing strategies to grow your business.',
    },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Marquee />
            <Services />
            <Portfolio />
            <Clients />
            <About />
            <Contact />
        </>
    );
}
