import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="w-full max-w-5xl py-20">
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-lg text-center text-gray-400">
        Have a project in mind? We'd love to hear from you.
      </p>
      <form className="mt-8 max-w-xl mx-auto">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-4 bg-gray-800 rounded-lg"/>
          <input type="email" placeholder="Email" className="p-4 bg-gray-800 rounded-lg"/>
          <textarea placeholder="Message" className="p-4 bg-gray-800 rounded-lg h-32"></textarea>
          <button type="submit" className="p-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
