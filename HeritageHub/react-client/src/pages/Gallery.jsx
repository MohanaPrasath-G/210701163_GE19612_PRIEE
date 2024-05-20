import { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Gallery() {
    const [photos, setPhotos] = useState([])
    // const [photos, setPhotos] = useState([
    //     // Sample data
    //     { id: 1, title: 'Taj Mahal', imageUrl: '/src/assets/Taj.jpg' },
    //     { id: 2, title: 'India Gate', imageUrl: '/src/assets/indiaget.jpg' },
    //     { id: 3, title: 'Varanasi', imageUrl: '/src/assets/varansi.jpg' },
    //     { id: 1, title: 'Taj Mahal', imageUrl: '/src/assets/Taj.jpg' },
    //     { id: 2, title: 'India Gate', imageUrl: '/src/assets/indiaget.jpg' },
    //     { id: 3, title: 'Varanasi', imageUrl: '/src/assets/varansi.jpg' },
    //     { id: 1, title: 'Taj Mahal', imageUrl: '/src/assets/Taj.jpg' },
    //     { id: 2, title: 'India Gate', imageUrl: '/src/assets/indiaget.jpg' },
    //     { id: 3, title: 'Varanasi', imageUrl: '/src/assets/varansi.jpg' },
    //     { id: 1, title: 'Taj Mahal', imageUrl: '/src/assets/Taj.jpg' },
    //     { id: 2, title: 'India Gate', imageUrl: '/src/assets/indiaget.jpg' },
    //     { id: 3, title: 'Varanasi', imageUrl: '/src/assets/varansi.jpg' }

    // ]);

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });

        const fetchGallery = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:90/gallery', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setPhotos(response.data)
            } catch (error) {
                console.error('Error fetching gallery', error);
            }
        };

        fetchGallery();
    }, []);

    return (
        <div>
            <Header />
            <section className="gallery-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Gallery</h2>
                    <h3>Explore beautiful moments</h3>
                </div>
            </section>
            <section className="gallery-section py-5">
                <div className="container-fluid">
                    <div className="row">
                        {photos.map((photo) => (
                            <div key={photo.id} className="col-md-4 col-sm-6 mb-4">
                                <div className="gallery-item" data-aos="fade-up">
                                    <img src={photo.imageUrl} alt={photo.title} className="img-fluid" />
                                    <div className="gallery-content">
                                        <h3>{photo.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Gallery;
