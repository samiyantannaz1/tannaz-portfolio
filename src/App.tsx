import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navbar/Navbar";
import Services from "./components/Services/Servises";
import Portfolio from "./components/Portfolio/Portfilo";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const {theme}=useTheme()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

return (
  <div className={theme}>
    <Toaster position="top-right" />

    <Navigation />
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer/>
    <ScrollToTop />
  </div>
);
}

export default App;

//npm install swiper
//npm install @emailjs/browser  نصب ایمیل