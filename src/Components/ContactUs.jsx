import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container flex flex-col md:flex-row p-8 text-white" style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3ceb88154101663.633c280709e08.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <style>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #B2456E; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .typewriter {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
        
          animation: typewriter 2s steps(40, end) 1s 1 normal both, blink-caret .75s step-end infinite;
        }

        .contact-form {
          border: 2px solid white;
          padding: 2rem;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          margin: auto;
          animation: fadeIn 2s ease-out;
        }

        .contact-form input,
        .contact-form textarea {
          border: 2px solid #B2456E;
          background-color: white;
          color: black;
          padding: 1rem;
          border-radius: 4px;
          width: 100%;
          margin-bottom: 1rem;
          transition: background-color 0.3s, border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: white;
        }
        .contact-form button {
          background-color: #B2456E;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s, transform 0.3s;
        }

        .contact-form button:hover {
          background-color: white;
          color: #B2456E;
          transform: scale(1.05);
        }

        .zola-branding {
          font-size: 2rem;
          font-weight: bold;
          color: #B2456E;
          animation: pulse 2s infinite;
        }

        .text-section img {
          animation: fadeDown 2s ease-in;
        }

        @media (min-width: 768px) {
          .contact-form .flex {
            display: flex;
            gap: 1rem;
          }

          .contact-form .flex input {
            width: calc(50% - 0.5rem);
            margin-right: 0;
          }
        }
      `}</style>

      <div className="text-section md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-5xl lg:w-[80vh]  font-bold md:text-xl typewriter text-white  pl-14"> Contact <span className='text-[#B2456E]'>Us</span> </h2>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZpd3ptZjl2OWxzMnd3ZzI2czV5ZmtvM2FmbnZyczRrOXZ0d3NheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vBa3cuYCr6L6g/giphy.webp" alt="Placeholder" className="mt-4 h-[50vh] pl-5 rounded-full" />
      </div>

      <div className="contact-form md:w-1/2">
        <div className="zola-branding mb-4 flex justify-center"><span className='text-xl'>ZOLA</span>  <span className='text-white text-xl'>Your Fashion store</span></div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="flex justify-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
