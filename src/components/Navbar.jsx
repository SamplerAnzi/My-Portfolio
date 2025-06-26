import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    // <nav className="bg-black/30 backdrop-blur-md px-6 md:px-20 py-6 fixed top-0 w-full z-10 flex justify-between items-center shadow-md font-semibold text-white">
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-[#0a192f]/80 to-transparent px-6 py-4 flex justify-between items-center">
      {/* Left: Nav Links */}
      <div className="flex space-x-10 text-3xl">
       <a href="#projects" className="hover:text-blue-500 transition-colors">Skills</a>

        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-5">
        <a href="https://www.linkedin.com/in/angellina-gill-6a3b18226/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-white hover:text-blue-400 text-4xl" />
        </a>
        <a href="https://github.com/SamplerAnzi" target="_blank" rel="noreferrer">
          <FaGithub className="text-white hover:text-gray-300 text-4xl" />
        </a>
        <a href="https://www.instagram.com/angellina.gill24/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-white hover:text-pink-400 text-4xl" />
        </a>
      </div>
    </nav>
  );
}
