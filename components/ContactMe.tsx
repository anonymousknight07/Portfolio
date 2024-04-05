"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
   
    <div style={{ backgroundColor: 'black' }}>
    <form className='w-full  mx-auto flex flex-col justify-center items-center 'onSubmit={handleSubmit}>
  <input
    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required 
    className="border text-black input-ele border-gray-300 rounded-md px-4 py-3 mt-2 focus:outline-none focus:ring focus:border-blue-300 w-full max-w-md"
    placeholder="Your Name here"
  />
  <input
   type="email" id="email" name="email" value={formData.email} onChange={handleChange} required 
    placeholder="Your Email here"
    className="border text-black input-ele border-gray-300 rounded-md px-4 py-3 mt-3 focus:outline-none focus:ring focus:border-blue-300 w-full max-w-md"
  />
  <textarea
    id="message" name="message" value={formData.message} onChange={handleChange} required
    className="border text-black input-ele border-gray-300 rounded-md px-4 py-3 mt-3 focus:outline-none focus:ring focus:border-blue-300 w-full max-w-md"
    placeholder="Your Message here"
  ></textarea>
  <input
    type="submit"
    value="Send"
    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-4 cursor-pointer"
  />
</form>


    </div>

  );
};

export default ContactForm;
