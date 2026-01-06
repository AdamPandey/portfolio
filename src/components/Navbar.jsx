import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
        >
          Adarsh.dev
        </motion.div>
        
        <ul className="flex space-x-8 text-slate-300 font-medium">
          {['About', 'Projects', 'Contact'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="cursor-pointer transition-colors"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;