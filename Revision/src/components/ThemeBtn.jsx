import { useState } from "react";
import useTheme from "../context/theme.js"
import Card from "./Card.jsx";

export default function ThemeBtn() {
  return (
  <div className="w-screen min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ResumeBuilder</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Features</a>
            <a href="#" className="hover:text-indigo-600">Templates</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </nav>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">
            Get Started
          </button>
          <Card />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Left Side */}
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your <span className="text-indigo-600">Professional Resume</span> in Minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Create a job-winning resume effortlessly with our smart and customizable resume builder.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition">
              Create Resume
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
              View Templates
            </button>
          </div>
        </div>

        {/* Right Side (Resume Preview Card) */}
        <div className="mt-10 md:mt-0">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-80 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-2">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <p className="text-sm mb-2"><span className="font-semibold">Email:</span> john@example.com</p>
            <p className="text-sm mb-2"><span className="font-semibold">Phone:</span> +91 9876543210</p>
            <p className="text-sm"><span className="font-semibold">Skills:</span> React, Node.js, Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Why Choose Us?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Everything you need to build the perfect resume.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">⚡ Easy to Use</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Build resumes quickly with our user-friendly editor.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">🎨 Modern Templates</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Choose from professional, ATS-friendly templates.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">📄 Export Anywhere</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Download your resume as PDF and share instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
        <p>© 2025 ResumeBuilder. All rights reserved.</p>
      </footer>
    </div>
);

}
