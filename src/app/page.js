"use client"
import { motion } from 'motion/react';
import Link from 'next/link';


export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-xl p-8"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h1>
                    
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
                            <p className="mt-2 text-gray-600">
                                Feel free to reach out through any of these channels:
                            </p>
                        </div>

                        <div className="space-y-4">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-600">
                                    your.email@example.com
                                </a>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-600">+1 (234) 567-8900</span>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-gray-600">Copenhagen, Denmark</span>
                            </motion.div>
                        </div>

                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="mt-8"
                        >
                            <Link href="/contact"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}