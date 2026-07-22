import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Navbar.css";

import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";



  const navItems = [
    {
      name: "Home",
      link: "#home",
      id: "home",
    },
    {
      name: "Services",
      link: "#services",
      id: "services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
      id: "portfolio",
    },
    {
      name: "About",
      link: "#about",
      id: "about",
    },
    {
      name: "Contact",
      link: "#contact",
      id: "contact",
    },
  ];


function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      let currentSection = "home";
      let minDistance = Infinity;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const distance = Math.abs(
            section.getBoundingClientRect().top - 120
          );

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `${
    scrolled ? "navbar scrolled" : "navbar"
  } ${theme === "dark" ? "navbar-dark-mode" : ""}`;

  return (
  <Navbar
    expand="lg"
    fixed="top"
    variant={theme === "dark" ? "dark" : "light"}
    className={navbarClass}
  >
      <Container>

        {/* Logo */}

        <Navbar.Brand
          href="#home"
          className="brand-name"
          onClick={() => setActiveSection("home")}
        >
          Tannaz Portfolio
        </Navbar.Brand>

        {/* Mobile Toggle */}

        <Navbar.Toggle aria-controls="navbar-menu" />

        {/* Menu */}

        <Navbar.Collapse id="navbar-menu">
          <Nav className="ms-auto align-items-center">

            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.link}
                onClick={() => setActiveSection(item.id)}
                className={
                  activeSection === item.id
                    ? "active-link"
                    : ""
                }
              >
                {item.name}
              </Nav.Link>
            ))}

            {/* Theme Button */}

            <button
              type="button"
              className={`theme-btn ${theme}`}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </button>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;