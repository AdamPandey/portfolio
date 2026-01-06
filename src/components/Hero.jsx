import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="about" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-secondary font-medium mb-4"
        >
          Hello, I'm Adarsh Pandey
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Full Stack Developer <br />
          <span className="text-slate-500">& Animator</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg mb-10"
        >
          I build immersive web experiences by blending robust code with captivating motion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="#projects"
            className="px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-secondary/90 transition-colors"
          >
            View Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-slate-600 rounded-full hover:border-white transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;