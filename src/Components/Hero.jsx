import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="pt-16 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-base-200">
      {/* Left Side Content */}
      <div className="text-center md:text-left md:w-2/3">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="text-primary">Md. Abdul Zabbar</span>
        </motion.h1>
        <p className="mt-4 text-lg md:text-lg text-gray-600">
  <span className="font-semibold text-secondary">Backend Developer</span> (Django REST Framework) | <span className="font-semibold text-secondary">Electrical and Electronic Engineering Student</span> <br />
  A passionate backend web developer crafting modern web experiences.
</p>


        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a href="#projects" className="btn btn-primary px-6 py-3">View My Work</a>
          <a href="#contact" className="btn btn-outline btn-secondary px-6 py-3">Contact Me</a>
        </div>
      </div>

      {/* Right Side Image */}
      <motion.div
        className="mt-10 md:mt-0 md:w-1/3 flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={heroImg} alt="Hero Image" className="w-64 md:w-full rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
