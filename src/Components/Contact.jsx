import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://abdulzabbar.vercel.app/port_folio/contact/", formData);
      if (response.status === 201) {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.", { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-16 lg:py-14">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">Reach Out</h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">
          I&apos;d love to hear from you! Whether you have questions or want to collaborate, feel free to get in touch.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-blue-600">Contact Information</h3>
          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-sm sm:text-lg">abdul.zabbar.eee@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <p className="text-sm sm:text-lg">+880 1859915989</p>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <p className="text-sm sm:text-lg">+880 1859915989</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <p className="text-sm sm:text-lg">Sirajganj, Bangladesh</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/md-abdul-zabbar-eee/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://www.facebook.com/abdul.zabbar.04/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:text-blue-700 transition duration-300" />
              </a>
              <a href="https://github.com/abdul-zabbar04" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-2xl hover:text-gray-900 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 h-28 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" disabled={isSubmitting} className={`w-full py-3 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
