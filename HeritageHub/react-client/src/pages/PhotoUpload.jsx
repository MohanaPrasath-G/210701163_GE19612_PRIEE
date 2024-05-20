import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';
import './PhotoUpload.css';

function PhotoUpload() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('galleryImage', image);
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:90/gallery_upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            alert(response.data);
            navigate('/gallery');
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                // Token is invalid or expired, log the user out
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert('Session expired. Please log in again.');
                navigate('/login');
            } else {
                alert(error.response.data);
            }        }
    };

    return (
        <div>
            <Header />
            <section className="upload-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Upload Photo</h2>
                    <h3>Share your experiences with us</h3>
                </div>
            </section>
            <section className="upload-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Upload Photo</h3>
                                    <form onSubmit={handleUpload}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Choose Image</label>
                                            <input type="file" className="form-control" id="image" onChange={handleImageChange} required />
                                        </div>
                                        <button type="submit" className="btn upload-btn">Upload</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default PhotoUpload;
