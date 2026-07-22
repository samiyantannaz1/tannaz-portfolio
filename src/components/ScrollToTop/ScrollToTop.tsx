import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 300);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>

  );

}

export default ScrollToTop;