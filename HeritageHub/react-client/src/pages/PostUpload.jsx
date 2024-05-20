import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostUpload.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';

function PostUpload() {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [detailedDescription, setDetailedDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('shortDescription', shortDescription);
        formData.append('description', detailedDescription);
        formData.append('postImage', image);
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:90/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });
            alert(response.data);
            navigate('/Post');
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                // Token is invalid or expired, log the user out
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert('Session expired. Please log in again.');
                navigate('/login');
            } else {
                alert(error.response.data);
            }

        }
    };

    return (
        <div>
            <Header />
            <section className="upload-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Upload Your Post</h2>
                    <h3>Share your heritage and culture experiences</h3>
                </div>
            </section>
            <section className="upload-section py-5">
                <div className="container">
                    <div className="heading mb-4 text-center">
                        <h2>Post Upload</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="upload-form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shortDescription">Short Description</label>
                            <textarea
                                className="form-control"
                                id="shortDescription"
                                value={shortDescription}
                                onChange={(e) => setShortDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="detailedDescription">Detailed Description</label>
                            <textarea
                                className="form-control"
                                id="detailedDescription"
                                value={detailedDescription}
                                onChange={(e) => setDetailedDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                // accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-upload btn-block mt-3">Post</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default PostUpload;
