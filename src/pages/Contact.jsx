import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_qir8hmc",      // <-- replace
        "template_ngo7moz",     // <-- replace
        formRef.current,
        "qzyFA9818d_0dUAqE"       // <-- replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        background: "linear-gradient(135deg, #FFE7DD 0%, #FFC2AE 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          bg-white/90 backdrop-blur-md 
          p-12 rounded-[24px]
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          border border-[#ffbca6]
          max-w-lg w-full
        "
      >
        <h2 className="text-center text-4xl font-bold text-[#FF7F50]">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          We'd love to hear from you — just fill in the form below.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#FF7F50] focus:ring-[#FF7F50]/30 outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#FF7F50] focus:ring-[#FF7F50]/30 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#FF7F50] focus:ring-[#FF7F50]/30 outline-none transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className={`w-full py-3 text-lg rounded-xl text-white font-semibold shadow-md transition ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#FF7F50] hover:bg-[#ff6a36]"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {status && (
          <p className="text-center mt-6 text-gray-800 font-semibold">
            {status}
          </p>
        )}
      </motion.div>
    </section>
  );
}
