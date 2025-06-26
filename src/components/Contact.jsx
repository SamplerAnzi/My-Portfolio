export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-black/20">
      <h3 className="text-hero font-extrabold tracking-tight mb-6 leading-tight text-center text-center ">Get in Touch</h3>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded text-black" required />
        <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
        <textarea placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
        <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">Send</button>
      </form>
    </section>
  );
}
