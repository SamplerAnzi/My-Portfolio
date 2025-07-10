// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 px-8 bg-black/20">
//       <h3 className="text-hero font-bold tracking-tight mb-6 leading-tight text-center">Get in Touch</h3>
      
//       <form
//         action="https://formsubmit.co/angellinagill.2402@gmail.com"
//         method="POST"
//         data-netlify="false"
//          className="max-w-xl mx-auto space-y-4"
//       >
//         {/* Anti-spam honeypot */}
//         <input type="text" name="_honey" style={{ display: 'none' }} />

//         {/* Disable captcha and redirect */}
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_next" value="https://angellina-gill.netlify.app/#sent" />


//         <input type="text" name="name" placeholder="Name" className="w-full p-2 rounded text-black" required />
//         <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
//         <textarea name="message" placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>
        
//         <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
//           Send
//         </button>
//       </form>
//     </section>
//   );
// }
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === '#sent') {
      toast.success('Message sent successfully!');
      // Clean up hash from URL after showing message
      window.history.replaceState(null, null, ' ');
    }
  }, []);

  return (
    <section id="contact" className="py-16 px-8 bg-black/20">
      <h3 className="text-hero font-bold tracking-tight mb-6 leading-tight text-center">Get in Touch</h3>

      <form
        action="https://formsubmit.co/angellinagill.2402@gmail.com"
        method="POST"
        data-netlify="false"
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Anti-spam honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        {/* Disable captcha and redirect */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://angellinagill.netlify.app/#sent" 
        />

        <input type="text" name="name" placeholder="Name" className="w-full p-2 rounded text-black" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded text-black" required />
        <textarea name="message" placeholder="Message" rows="4" className="w-full p-2 rounded text-black" required></textarea>

        <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
          Send
        </button>
      </form>

      {/* Toast container for success message */}
      <ToastContainer position="bottom-right" />
    </section>
  );
}
