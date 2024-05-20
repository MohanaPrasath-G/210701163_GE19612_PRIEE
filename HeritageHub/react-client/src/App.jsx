import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import PostUpload from './pages/PostUpload';
import PostDescription from './pages/PostDescription';
import Gallery from './pages/Gallery';
import PhotoUpload from './pages/PhotoUpload';
import Post from './pages/Post';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/Post' element={<Post />}></Route>
          <Route path='/uploadPost' element={<PostUpload />}></Route>
          <Route path='/uploadPhoto' element={<PhotoUpload />}></Route>
          <Route path="/posts/:title" element={<PostDescription />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
