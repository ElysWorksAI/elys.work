"use client";

import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
        >
          <FaArrowLeft className="w-6 h-6" />
          <span className="sr-only">Back to Home</span>
        </Link>
      </div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have a question or want to work with us? Get in touch and
              we&apos;ll get back to you as soon as we can.
            </p>
          </div>

          <form className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {/* <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                placeholder="Your name"
                disabled
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                placeholder="you@example.com"
                disabled
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                placeholder="Your message..."
                disabled
              />
            </div> */}

            <div>
              <button
                type="button"
                onClick={() =>
                  (window.location.href = "mailto:elys.dev@hotmail.com")
                }
                className="w-full rounded-lg px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105"
              >
                Contact via Email
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:elys.dev@hotmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaEnvelope className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/company/elys-saas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/elysdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
