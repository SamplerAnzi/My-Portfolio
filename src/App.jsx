import '@fontsource-variable/inter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useEffect } from 'react';

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Cursor-following glow effect
  useEffect(() => {
    const moveLight = (e) => {
      const light = document.getElementById('cursor-light');
      if (light) {
        light.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(0, 255, 255, 0.2), transparent 80%)`;

      }
    };
    window.addEventListener('mousemove', moveLight);
    return () => window.removeEventListener('mousemove', moveLight);
  }, []);

  return (
   <div className="relative min-h-screen text-white font-inter overflow-hidden">



      {/* Background image */}
      {/* <div
  className="absolute inset-0 bg-cover bg-center opacity-20 -z-20"
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=compress&cs=tinysrgb&dpr=2&h=1080')" }}
></div> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy"></div>


      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 },
            color: { value: '#00ffff' },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            links: {
              enable: true,
              color: '#00ffff',
              distance: 120,
              opacity: 0.4,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'attract' },
            },
            modes: {
              attract: { distance: 100 },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />
      {/* <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    background: { color: "#0a192f" },
    particles: {
      number: { value: 200 },
      size: { value: 1.5 },
      move: { enable: true, speed: 0.3 },
      color: { value: "#ffffff" },
      opacity: { value: 0.8 },
    },
  }}
  className="absolute inset-0 -z-10"
/> */}


      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-indigo-900 to-purple-950 opacity-30 -z-20" />

      {/* Cursor Light */}
      <div id="cursor-light" className="pointer-events-none fixed inset-0 z-0 transition-all duration-200" />

      {/* Main Content */}
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
