"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";

const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.jpg",
    "/images/gallery/5.png",
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="gallery" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                        Our <span className="text-primary">Work</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See our team in action and the quality of our facility.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`MeloVRK Gallery Image ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay gradient for text readability if needed, currently just nice fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10 hover:bg-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "bg-white/50 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
