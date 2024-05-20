import { useLocation } from 'react-router-dom';
import './PostDescription.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

function PostDescription() {
    const location = useLocation();
    const { post } = location.state;

    return (
        <div>
            <Header />
            <div className="post-description-container">
                <section className="post-banner d-flex align-items-center justify-content-center text-center">
                    <div className="textBx">
                        <h2>{post.title}</h2>
                        <h3>{post.shortDescription}</h3>
                    </div>
                </section>
                <section className="post-details py-5">
                    <div className="container">
                        <div className="post-image">
                            <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                        </div>
                        <div className="post-content text-center mt-5">
                            <p>{post.description}</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default PostDescription;
