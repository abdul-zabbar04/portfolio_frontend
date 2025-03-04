import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track button loading

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set button to "Submitting..."

    try {
      const response = await axios.post('http://127.0.0.1:8000/port_folio/contact/', formData);
      // console.log(response);
      if (response.status === 201) {
        // console.log("status 201");
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("There was an error sending your message. Please try again.", { position: "top-center" });
    } finally {
      setIsSubmitting(false); // Reset button state
    }
  };

  return (
    <div id="contact" className="container mx-auto px-6 py-12 lg:px-16 lg:py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Reach Out</h2>
        <p className="mt-4 text-lg font-medium text-gray-600">
          I&apos;d be happy to hear from you! Whether you have any questions, want to explore collaboration opportunities, or just want to say hi, don&apos;t hesitate to get in touch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md border border-gray-200">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">Contact Information</h3>
          <div className="space-y-5 text-gray-800">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-lg">abdul.zabbar.eee@gmail.com <br /> a4zabbar@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <p className="text-lg">+880 1859915989</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-xl" />
              <p className="text-lg">+880 1859915989</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <p className="text-lg">Sirajganj, Bangladesh</p>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-500">Connect with Me</h4>
              <div className="flex gap-6 mt-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/md-abdul-zabbar-eee/" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                  <FaLinkedin className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition duration-300" />
                </a>
                <a target="_blank" href="https://www.facebook.com/abdul.zabbar.04/" className="btn btn-outline text-white btn-sm btn-square">
                  <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-700 transition duration-300" />
                </a>
                <a href="https://github.com/abdul-zabbar04" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                  <FaGithub className="text-gray-800 text-2xl cursor-pointer hover:text-gray-900 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-800 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Phone Number</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 h-32 rounded-md bg-gray-100 text-gray-800 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
