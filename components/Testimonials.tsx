"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        author: "Pickabu Hu",
        date: "1 month ago",
        rating: 5,
        text: "I highly recommend this truck shop, they are extremely knowledgeable, highly professionals. Quality of their work is excellent. People are very welcoming. Special thanks to Mamuka, Dima, Alena and Pasha. Thank you guys for making my experience so smooth and pleasant!",
        initial: "P"
    },
    {
        author: "Salome Putkaradze",
        date: "3 months ago",
        rating: 5,
        text: "Great price. I always have an excellent experience with them. I get my entire fleet serviced at Melo. Their knowledge and professionalism really stand out—they quickly diagnose the problem, explain everything clearly, and get my trucks back on the road.",
        initial: "S"
    },
    {
        author: "AJ's Computer Solutions",
        date: "5 months ago",
        rating: 5,
        text: "Mamuka, I've known him for about 7 years. he's very knowledgeable about what he's doing and very accurately in Diagnostics... I highly recommend his service if you are in the area.",
        initial: "A"
    },
    {
        author: "Michael Voskoboynikov",
        date: "11 months ago",
        rating: 5,
        text: "Car Hauler friendly shop can handle all needs, very knowledgeable gets to the bottom of the problem quickly and gets you back on the road. All of our trucks are serviced here when nearby.",
        initial: "M"
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                        Client <span className="text-primary">Reviews</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
                        Rated 4.7 Stars on
                        <span className="font-bold flex items-center gap-0.5">
                            <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                        </span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {review.initial}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{review.author}</h4>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                                <div className="ml-auto bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                                    <span className="text-[#4285F4] font-bold text-sm">G</span>
                                </div>
                            </div>

                            <div className="flex mb-3 gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/search?q=melovrk&sourceid=chrome&ie=UTF-8#lrd=0x89c1517aea59dccb:0x3360f38e7cffa775,1,,,,"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium"
                    >
                        Read All Reviews on Google
                        <Star className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
