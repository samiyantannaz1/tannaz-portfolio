

import "./Portfilo.css";
import { projects } from "../../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motion";

function Portfolio() {
  return (
    <section className="portfolio py-5" id="portfolio">
      <div className="container">

        {/* Section Title */}
        <motion.div
          className="section-title text-center mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="portfolio-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

                <div className="portfolio-overlay">
                  <h4>{project.title}</h4>

                  <p>{project.category}</p>

                  <div className="portfolio-buttons">

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-warning"
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      GitHub
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light"
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        Live Demo
                      </motion.a>
                    )}

                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Portfolio;