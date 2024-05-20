import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from 'axios';


function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:90/register', { email, password });
            alert(response.data);
            navigate('/login');
            // Handle successful signup (e.g., redirect to login)
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <div className="container-fluid bg-img-login con-img ">
            <div className="card custom-card">
                <div className="card-body custom-card-body">
                    <h5 className="card-title custom-card-title">Sign Up</h5>
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label custom-form-label">Email address</label>
                            <input type="text" className="form-control custom-form-control" id="exampleInputName1" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label custom-form-label">Email address</label>
                            <input type="email" className="form-control custom-form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label custom-form-label">Password</label>
                            <input type="password" className="form-control custom-form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label custom-form-label">Confirm Password</label>
                            <input type="password" className="form-control custom-form-control" id="exampleInputPassword2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn log-btn">Continue</button>
                    </form>
                    <p className="mt-3 custom-link-text">Already have an account? <Link to="/login" className="custom-link">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;


