//  import { useState } from 'react';
import '@fontsource-variable/inter';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-inter">
      {/* Navbar */}
      <nav className="bg-black/30 backdrop-blur-md px-8 py-4 fixed top-0 w-full z-10 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-extrabold tracking-wider">Angellina Gill</h1>
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#skills" className="hover:text-yellow-300 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/SamplerAnzi" target="_blank" className="hover:text-gray-300">GitHub</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-400">Instagram</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-4">
        <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Angellina 👋</h2>
        <p className="text-lg max-w-xl">I'm a developer with hands-on experience in C++, Java, and React. I focus on building efficient, scalable web applications and enjoy solving real-world technical challenges.</p>
        <a
          href="AngellinaGResume.pdf"
          download
          className="mt-6 inline-block bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 bg-black/20 text-white">
        <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>
        <p className="max-w-4xl mx-auto text-center text-lg leading-7">
          I have a strong foundation in C, C++, Java, and JavaScript, enabling me to build efficient and scalable applications. As a frontend developer, I specialize in React.js and React Native, crafting dynamic web and mobile applications with clean and responsive UI using HTML, CSS, and Bootstrap. On the backend, I work with Firebase, Firestore, and SQL, ensuring seamless data management and real-time updates. I am also proficient in DBMS concepts and have experience integrating databases with applications. Additionally, I use Git and GitHub for version control and effective collaboration. Beyond development, I actively solve coding challenges on LeetCode and HackerRank to continuously enhance my problem-solving skills.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/20 p-4 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">Venue Booking System</h4>
            <p>A Java-based app for managing venue reservations and capacities.</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">Portfolio Website</h4>
            <p>This responsive React + Tailwind portfolio website.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-black/20">
        <h3 className="text-3xl font-bold text-center mb-8">Get in Touch</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 rounded text-black" required />
          <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
          <textarea placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
          <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-black/30">
        <p className="mt-2">© 2025 Angellina Gill</p>
      </footer>
    </div>
  );
}
