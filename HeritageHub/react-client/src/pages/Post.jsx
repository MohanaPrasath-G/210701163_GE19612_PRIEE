import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Post.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Post() {
    const [posts,setPosts]=useState([])

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });
        const fetchPosts = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:90/posts', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setPosts(response.data)
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Header />
            <section className="post-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Posts</h2>
                    <h3>Discover stories and experiences</h3>
                </div>
            </section>
            <section className="post-section py-5">
                <div className="container-fluid">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-md-4 col-sm-6 mb-4">
                                <div className="post-item" data-aos="fade-up">
                                    <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                                    <div className="post-content">
                                        <h3>{post.title}</h3>
                                        <p>{post.shortDescription} 
                                            <Link to={`/posts/${post.title}`} state={{ post }} className="readmore-link">Read More</Link>
                                        </p>
                                        <p className="uploaded-by">Uploaded by: {post.uploadedBy}</p>
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

export default Post;
