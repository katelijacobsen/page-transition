"use client"
import { motion } from 'motion/react';
import Link from 'next/link';
import UnicornScene from './components/GradientBackground.tsx';

export default function Home() {
    return (
        <main className="relative w-full h-screen">
            <UnicornScene projectId={"data/4flspySlCrfvkfRH7Co8.json"}/>
        </main>
    );
}