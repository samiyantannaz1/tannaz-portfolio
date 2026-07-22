// // import "./Hero.css";
// // import { motion } from "framer-motion";
// // import { fadeLeft, fadeRight, fadeUp } from "../../animations/motion";
// // function Hero() {
// //   return (
// //     <section className="hero">

// //       <div className="container">

// //         <div className="hero-content">

// //           <h3>
// //             Welcome To My Portfolio
// //           </h3>

// //           <h1>
// //             I'm Tannaz
// //             <br />
// //             Frontend Developer
// //           </h1>

// //           <a 
// //             href="#portfolio"
// //             className="btn btn-warning btn-lg"
           
// //           >
// //             View My Work
// //           </a>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Hero;


// import "./Hero.css";
// import { motion } from "framer-motion";
// import { fadeLeft, fadeUp } from "../../animations/motion";

// function Hero() {
//   return (
//     <section className="hero" id="home">
//       <div className="container">
//         <motion.div
//           className="hero-content"
//           variants={fadeLeft}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h3
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//           >
//             Welcome To My Portfolio
//           </motion.h3>

//           <motion.h1
//             variants={fadeUp}
//             transition={{ delay: 0.4 }}
//           >
//             I'm Tannaz
//             <br />
//             Frontend Developer
//           </motion.h1>

//           <motion.a
//             href="#portfolio"
//             className="btn btn-warning btn-lg"
//             variants={fadeUp}
//             transition={{ delay: 0.6 }}
//             whileHover={{
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//           >
//             View My Work
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import "./Hero.css";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../animations/motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay" />

      <div className="container">

        <motion.div
          className="hero-content"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >

          <motion.h3
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Welcome To My Portfolio
          </motion.h3>

          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            I'm Tannaz
            <br />
            Frontend Developer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 0.5 }}
          >
            I build modern, responsive and user-friendly web applications
            using React, Next.js and TypeScript.
          </motion.p>

          <motion.a
            href="#portfolio"
            className="hero-btn"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Work
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;