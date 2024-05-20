import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../component/Header'
import Footer from '../component/Footer';

function Home() {

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
            <Header></Header>
            <section className="banner" id="home">
                <div className="textBx">
                    <h2>Welcome To <span>Incredible!ndia</span></h2>
                    <h3>Oldest civilizations in the world</h3>
                    <a href="#about" className="btn">Read More</a>
                </div>
            </section>
            <section className="about" id="about">
                <div className="heading">
                    <h2>About India</h2>
                </div>
                <div className="content">
                    <div className="contentBx w50">
                        <h3>Why is India <color>Oldest Civilization</color>?</h3>
                        <p>According to research, <strong> &quot;India&apos;s history and culture is dynamic, spanning back to the beginning of human civilization.
                            The history of India is punctuated by constant integration of migrating people with the diverse cultures that surround India.
                            By the end of the fourth millennium BC, India had emerged as a region of highly developed civilization &quot;</strong></p>
                    </div>
                    <div>
                        <p>India is one of the oldest civilizations in the world with a kaleidoscopic variety and rich cultural heritage.
                            It has achieved all-round socio-economic progress during the last 65 years of its Independence.</p>
                    </div>
                </div>
            </section>
            <section className="services" id="heritage">
                <div className="heading white">
                    <h2>Indian Heritage</h2>
                    <p>Here are some heritage destiny of India, where you have to go. <a href="https://youtu.be/lK3oqU2WNY0">click here</a></p>
                </div>
                <div className="content">
                    <div data-aos="flip-up" className="servicesBx">
                        <img src={`/src/assets/Taj.jpg`} alt="" />
                        <h2>Tajmahal is symbol of love</h2>
                        <p>An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world&apos;s heritage.</p>
                    </div>
                    <div data-aos="flip-up" className="servicesBx">
                        <img src={`/src/assets/indiaget.jpg`} alt="" />
                        <h2>India gate placed in delhi</h2>
                        <p>India Gate, official name Delhi Memorial, originally called All-India War Memorial, dedicated to the troops of British India who died in wars fought between 1914 and 1919. The iconic India Gate, an arch gate made using sandstone, situated in the Rajpath area, Delhi.</p>
                    </div>
                    <div data-aos="flip-up" className="servicesBx">
                        <img src={`/src/assets/varansi.jpg`} alt="" />
                        <h2>It is the city of lord shiva</h2>
                        <p>Shri Kashi Vishwanath temple in Varanasi holds immense significance to the Hindus and is one of the most famous temples in India dedicated to Lord Shiva. The divine shrine stands tall on the Western bank of the holy river Ganga and is one of the twelve Jyotirlingas.</p>
                    </div>
                </div>
            </section>
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
            <Footer></Footer>
        </div>
    )
}


export default Home;
