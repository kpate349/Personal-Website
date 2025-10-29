import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "bf68f9e4-626e-4820-a798-16a21bb8fa62");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {!submitted && (
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4 transition-opacity duration-500 opacity-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-1 text-gray-700 font-medium">Company (Optional)</label>
            <input
              type="text"
              name="company"
              id="company"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      )}

      {submitted && (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-12 space-y-4 animate-fade-in">
          <div className="w-16 h-16 border-4 border-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-gray-800">Message Sent Successfully</p>
        </div>
      )}
    </div>
  );
}
