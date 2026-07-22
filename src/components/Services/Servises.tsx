

import "./Services.css";
import { services } from "../../data/services";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motion";

function Services() {
  return (
    <section className="services py-5" id="services">
      <div className="container">

        <motion.div
          className="section-title text-center mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <p>What I can do for you</p>
        </motion.div>

        <div className="row">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              className="col-lg-4 col-md-6 mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
            >

              <motion.div
                className="service-card text-center"
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <i className={`bi ${service.icon} service-icon`}></i>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;