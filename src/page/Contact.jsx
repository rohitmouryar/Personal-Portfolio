import Navbar from "../components/Navbar";
import "../styles/contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "YOUR_PUBLIC_KEY"
    )
    .then((result) => {
      console.log(result.text);
      alert("Message Sent ✅");

      setForm({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch((error) => {
      console.log(error.text);
      alert("Something went wrong ❌");
    });
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading Animation */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        {/* Form Animation */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            whileFocus={{ scale: 1.03 }}
          />

          <motion.input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            whileFocus={{ scale: 1.03 }}
          />

          <motion.textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            whileFocus={{ scale: 1.03 }}
          />

          {/* Button Animation */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Contact;