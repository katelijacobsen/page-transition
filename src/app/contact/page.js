"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 2 }}
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About Page</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">About Us</h2>
              <p className="mt-2 text-gray-600">
                Learn more about our team and mission.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-500 hover:text-blue-600"
                >
                  contact@example.com
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
