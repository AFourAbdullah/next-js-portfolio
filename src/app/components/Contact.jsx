"use client";
import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/email", { email, message });
      setStatus("Email sent successfully!");
    } catch (error) {
      setStatus("Error sending email. Please try again.");
    }
  };
  return (
    <div className="bg-slate-900  flex justify-center items-center mt-6 flex-col w-screen  h-screen py-4">
      <h2 className="text-center text-5xl text-gray-400 font-extrabold mb-8">
        Contact
      </h2>
      <div className="sm:w-full w-[90%] max-w-md p-8 backdrop-blur bg-gray-100   rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border-2 border-slate-800 rounded-md"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border-2 border-slate-800 rounded-md resize-none"
              rows="4"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
