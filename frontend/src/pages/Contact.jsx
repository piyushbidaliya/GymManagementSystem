import React from 'react';

const Contact = () => {
  return (
    <div className="bg-hero bg-center bg-no-repeat h-screen bg-cover w-full">
      <div className='relative top-28'>
      <div className="my-5 text-center">
        <h1 className="text-3xl border-current inline-block text-white">Contact Us</h1>
      </div>

      <div className="w-full max-w-lg mx-auto p-5 border border-gray-300 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-white">Name:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-bold text-white">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              pattern="[0-9]{10}"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-white">Email:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-bold text-white">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Send"
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
