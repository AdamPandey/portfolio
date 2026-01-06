import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Let's Work Together
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-xl mx-auto mb-12"
        >
          I'm currently available for freelance work or full-time opportunities. 
          Connect with me on LinkedIn to discuss how I can bring value to your team.
        </motion.p>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <a 
            href="https://www.linkedin.com/in/adam-p-media-film-games/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 font-bold text-lg"
          >
            <FaLinkedin className="text-2xl" />
            Connect on LinkedIn
          </a>
        </motion.div>

        <footer className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Adarsh Pandey. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Contact;