"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
        {
          from_email: email,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error);
        }
      );
  };
  return (
    <div
      className="bg-slate-900  flex justify-center items-center mt-6 flex-col w-screen  h-screen py-4"
      id="contactus"
    >
      <h2 className="text-center text-5xl text-gray-400 font-extrabold mb-8">
        Contact
      </h2>
      <div className="sm:w-full w-[90%] max-w-md p-8 backdrop-blur bg-gray-100   rounded-lg shadow-md">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              className="w-full p-2 border-2 border-slate-800 rounded-md"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
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
