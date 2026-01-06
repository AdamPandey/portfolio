import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes } from "react-icons/fa";

// --- DATA ---
const devProjects = [
  {
    id: 1,
    title: "Prime Meridian",
    description: "An immersive geographical discovery platform. Users can interact with a real-time 3D globe to explore countries, view detailed statistics, and visualize global data.",
    tags: ["React", "Three.js", "3D Visualization", "API"],
    link: "https://prime-meridian.pages.dev/",
    github: "#"
  },
  {
    id: 2,
    title: "MediCare Dashboard",
    description: "A comprehensive medical administration system. Features include patient management, appointment scheduling, and secure authentication.",
    tags: ["React", "Firebase", "Dashboard", "Context API"],
    link: "https://ca2-medical-app.web.app/welcome",
    github: "#"
  }
];

const animProjects = [
  { id: 1, title: "Auto Rickshaw Transf.", file: "/videos/rickshaw.mp4", type: "3D Animation" },
  { id: 2, title: "Sword Scene", file: "/videos/sword-scene.mp4", type: "Fight Choreography" },
  { id: 3, title: "Sword Title Motion", file: "/videos/sword-title.mp4", type: "Motion Graphics" },
  { id: 4, title: "Bird V Man", file: "/videos/bird-v-man.mp4", type: "Short Film" },
  { id: 5, title: "Light Duties", file: "/videos/light-duties.mp4", type: "Short Film" },
  { id: 6, title: "Rinse and Repeat", file: "/videos/rinse-and-repeat.mp4", type: "Short Film" },
];

// --- COMPONENT FOR INDIVIDUAL VIDEO CARDS ---
const VideoCard = ({ anim, onSelect }) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset to start (thumbnail)
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-accent/50 aspect-video shadow-lg"
      onClick={() => onSelect(anim.file)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={anim.file}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Play Icon Overlay (Fades out on hover) */}
      <div 
        className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
      >
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1 group-hover:bg-accent group-hover:text-white transition-colors">
            <FaPlay className="text-xl" />
        </div>
      </div>
      
      {/* Text Overlay (Always visible but styled) */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
        <h3 className="font-bold text-lg text-white group-hover:text-accent transition-colors truncate">{anim.title}</h3>
        <span className="text-xs text-slate-300 uppercase tracking-wider">{anim.type}</span>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        
        {/* --- DEVELOPMENT SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            <span className="border-b-4 border-secondary pb-2">Full Stack Development</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {devProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-secondary/50 transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">{project.title}</h3>
                    <div className="flex gap-4 text-xl">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-secondary"><FaGithub /></a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-secondary"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm px-3 py-1 bg-slate-900 rounded-full text-secondary font-mono border border-slate-700">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- ANIMATION SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            <span className="border-b-4 border-accent pb-2">Animation & Motion</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animProjects.map((anim) => (
              <VideoCard key={anim.id} anim={anim} onSelect={setSelectedVideo} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white bg-slate-800/50 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <FaTimes />
              </button>
              
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;