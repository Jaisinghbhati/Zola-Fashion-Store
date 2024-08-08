import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ContactForm from './Components/ContactUs';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import MenSection from './Components/MenSection';
import WomenSection from './Components/WomenSection';
import KidsSection from './Components/KidsSection';
import ZolaMovies from './Components/ZolaMovies';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage carousal={<Carousel />} />} />
          <Route path="/ContactUs" element={<ContactForm />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Mens" element={<MenSection />} />
          <Route path="/Women" element={<WomenSection />} />
          <Route path="/Kids" element={<KidsSection />} />
          <Route path="/Movies" element={<ZolaMovies/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
