"use client";

export default function ContactForm() {
  return (
    <form className="bg-white rounded-lg shadow p-6 w-full max-w-xl">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name*</label>
        <input type="text" className="w-full border-b border-gray-200 bg-transparent py-2 px-1 focus:outline-none" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email*</label>
        <input type="email" className="w-full border-b border-gray-200 bg-transparent py-2 px-1 focus:outline-none" required />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input type="tel" className="w-full border-b border-gray-200 bg-transparent py-2 px-1 focus:outline-none" />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea className="w-full border-b border-gray-200 bg-transparent py-2 px-1 focus:outline-none" rows={3}></textarea>
      </div>
      <button type="submit" className="w-full py-2 rounded border border-gray-300 text-gray-400 font-semibold text-sm cursor-not-allowed bg-gray-50" disabled>
        SUBMIT
      </button>
    </form>
  );
}
