export default function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center pt-48 pb-24 px-6"
    >
      <h1 className="text-hero font-bold tracking-tight mb-6 leading-tight">
  Hi, I'm Angellina <span className="inline-block animate-waving-hand">👋</span>
</h1>


      <p className="text-xl max-w-2xl text-white/80 leading-relaxed">
        I'm a developer with hands-on experience in <span className="text-cyan-400">C++</span>, <span className="text-orange-400">Java</span>, and <span className="text-blue-400">React</span>. I focus on building <strong className="text-white">efficient</strong>, <strong className="text-white">scalable</strong> web applications and love solving real-world technical challenges.
      </p>

     <a
  href="AngellinaGResume.pdf"
  download
  className="mt-8 inline-block border border-white text-white text-xl font-medium py-2.5 px-6 rounded-xl hover:bg-white hover:text-black transition duration-300"
>
  Download Resume
</a>

    </section>
  );
}
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min.js";

// export default function Hero() {
//   const heroRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect && heroRef.current) {
//       setVantaEffect(
//         WAVES({
//           el: heroRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0x1e90ff,
//           shininess: 50,
//           waveHeight: 20,
//           waveSpeed: 1.2,
//           backgroundColor: 0x0a192f,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return (
//     <section
//       ref={heroRef}
//       className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
//     >
//       <div className="z-10 text-white text-center px-4">
//         <h1 className="text-5xl font-extrabold mb-4 leading-tight">
//           Hi, I'm Angellina <span className="inline-block animate-waving-hand">👋</span>
//         </h1>
//         <p className="text-lg max-w-2xl mx-auto text-white/80">
//           I’m a developer with hands-on experience in{" "}
//           <span className="text-cyan-400 font-semibold">C++</span>,{" "}
//           <span className="text-orange-400 font-semibold">Java</span>, and{" "}
//           <span className="text-blue-400 font-semibold">React</span>. I love building creative, scalable digital experiences.
//         </p>

//         <a
//           href="AngellinaGResume.pdf"
//           download
//           className="mt-8 inline-block border border-white text-white text-xl font-medium py-2.5 px-6 rounded-xl hover:bg-white hover:text-black transition duration-300"
//         >
//           Download Resume
//         </a>
        
//       </div>
//     </section>
//   );
// }


