import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './About.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

function About() {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });

        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <section className="work" id="culture">
                <div className="heading">
                    <h2>Colours Of Culture</h2>
                    <p>From splendid paintings to beautiful wood crafts and textiles, India resounds with a rich and unique culture.</p>
                </div>
                <div className="content">
                    <div data-aos="flip-right" className="workBx">
                        <p>The Indian culinary repertoire reflects the cultural diversity of the country. The term “Indian food” denotes a mélange of flavours from different parts of the country and showcases centuries of cultural exchange with the far corners of the world.</p>
                    </div>
                    <div data-aos="flip-left" className="workBx">
                        <p>The most important classical traditions of music in India are the Hindustani classical tradition which finds home in the northern and western parts of the country and the Carnatic classical tradition, which is practiced primarily in the southern parts of the country.</p>
                    </div>
                    <div data-aos="flip-right" className="workBx">
                        <p>Considered to be the oldest dance and an inspiration to all other styles, Bharat Natyam, a temple dance of Tamil Nadu, is an enchanting performance that relates scenes from religious texts and myths in a series of quick and complicated neat motions.</p>
                    </div>
                    <div data-aos="flip-left" data-aos-offset="100" className="workBx">
                        <p>Festivals in India are a vibrant representation of the culture and ancient traditions of the country. The most prominent celebration is that of Diwali, which is popularly called the festival of lights. Like most festivals in the country, its story is rooted in myths, legends and religion.</p>
                    </div>
                </div>
                <div className="heading white">
                    <a href="https://indianculture.gov.in/" target="#" className="btn">View More</a>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
