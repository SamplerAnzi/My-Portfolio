// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 px-8 bg-black/20">
//       <h3 className="text-hero font-bold tracking-tight mb-6 leading-tight text-center text-center ">Get in Touch</h3>
//       <form className="max-w-xl mx-auto space-y-4">
//         <input type="text" placeholder="Name" className="w-full p-2 rounded text-black" required />
//         <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
//         <textarea placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
//         <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">Send</button>
//       </form>
//     </section>
//   );
// }
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           alert("Failed to send message. Try again.");
//           console.error(error);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-16 px-8 bg-black/20">
//       <h3 className="text-hero font-bold tracking-tight mb-6 leading-tight text-center">Get in Touch</h3>
//       <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        
//         <input type="text" name="user_name" placeholder="Name" className="w-full p-2 rounded text-black" required />
//         <input type="email" name="user_email" placeholder="Email" className="w-full p-2 rounded text-black" required />
//         <textarea name="message" placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
//         <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">Send</button>
//       </form>
//     </section>
//   );
// }

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-black/20">
      <h3 className="text-hero font-bold tracking-tight mb-6 leading-tight text-center">Get in Touch</h3>
      
      <form
        action="https://formsubmit.co/angellinagill.2402@gmail.com"
        method="POST"
        data-netlify="false"
        // className="max-w-xl mx-auto space-y-4"
      >
        {/* Anti-spam honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        {/* Disable captcha and redirect */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        <input type="text" name="name" placeholder="Name" className="w-full p-2 rounded text-black" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
        <textarea name="message" placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
        
        <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
          Send
        </button>
      </form>
    </section>
  );
}
