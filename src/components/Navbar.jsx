import { FaLinkedin, FaGithub, FaInstagram, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaChevronLeft, FaChevronRight, FaBriefcase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { name: "Home", href: "#", icon: <FaHome /> },
  { name: "About", href: "#about", icon: <FaUser /> },
  { name: "Experience", href: "#experience", icon: <FaBriefcase /> },
  { name: "Tech", href: "#tech", icon: <FaCode /> },
  { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> }
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/blueskullMRX", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/amgrout-zakaria/", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/blue._.skull/", label: "Instagram" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed left-4 top-1/3 -translate-y-1/2 z-50 hidden md:flex items-start gap-2">
      {/* Toggle Button */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="p-3 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-2 px-3 py-4 bg-neutral-900/80 backdrop-blur-md rounded-2xl border border-neutral-800">
              {/* Logo/Initials */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm mb-2">
                ZA
              </div>
              
              {/* Divider */}
              <div className="w-6 h-px bg-neutral-700 my-1"></div>
              
              {/* Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="group relative p-3 text-lg text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  {/* Tooltip */}
                  <span className="absolute left-full ml-3 px-3 py-1 bg-neutral-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                    {link.name}
                  </span>
                </motion.a>
              ))}
              
              {/* Divider */}
              <div className="w-6 h-px bg-neutral-700 my-1"></div>
              
              {/* Social Links */}
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-3 text-lg text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="absolute left-full ml-3 px-3 py-1 bg-neutral-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
              
              {/* Divider */}
              <div className="w-6 h-px bg-neutral-700 my-1"></div>
              
              {/* Hide Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-3 text-lg text-neutral-400 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft />
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar
