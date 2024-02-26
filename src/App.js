import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.css"; 
import About from './components/About';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Counter from './components/Counter';
import Nav from './components/Nav';
import Contactus from './components/Contactus';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Post from './components/Post';




function App() {
  return (
    <>
      <Nav/>
<Post/>
      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='about' element={<About />} />
        < Route path='section-2' element={<Section2 />} />
        < Route path='contact-us' element={<Contactus />} />
        < Route path='blogs' element={<Blogs />} />
        < Route path='section-1' element={<Section1 />} />
        < Route path='footer' element={<Footer />} />
        < Route path='counter' element={<Counter />} />


      </Routes>
 
  
    </>

  );
}

export default App;
