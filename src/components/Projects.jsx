export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 md:px-20 bg-black/10">
      <h3 className=" text-hero font-bold tracking-tight mb-6 leading-tight text-center text-center ">Projects</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        {/* <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-200/30 transition duration-300 transform hover:-translate-y-2"> */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-200/30 transition duration-300 transform hover:-translate-y-2">
          <h4 className="text-xl font-semibold mb-2 text-white">Venue Booking System</h4>
          <p className="text-l text-gray-300 mb-4">
            A Java-based desktop app to manage event venues, reservations, and user data with MySQL.
          </p>
          <a
            href="https://github.com/SamplerAnzi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-300 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-200/30 transition duration-300 transform hover:-translate-y-2">
          <h4 className="text-2xl font-semibold mb-2 text-white">Portfolio Website</h4>
          <p className="text-xl text-gray-300 mb-4">
            A responsive portfolio built using React, Tailwind CSS, and interactive visual effects.
          </p>
          <a
            href="https://github.com/SamplerAnzi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-300 hover:underline text-sm"
          >
           View on GitHub →
          </a>
        </div>

{/* Project 3 */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-200/30 transition duration-300 transform hover:-translate-y-2">
          <h4 className="text-2xl font-semibold mb-2 text-white">Library Management System</h4>
          <p className="text-xl text-gray-300 mb-4">
            C++ based Library Management System, allowing users to manage booksdisplaying book details. 
          </p>
          <a
            href="https://github.com/SamplerAnzi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-300 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>



      </div>
    </section>
  );
}
