"use client";

import { Users, Map, Clock } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                            About <span className="text-primary">Us</span>
                        </h2>
                        <h3 className="text-2xl text-white/90 font-bold mb-6">
                            Local Family Owned Truck & Trailer Repair
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            MeloVRK Truck & Trailer Repair is a local family-owned company in Fairless Hills, PA.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We provide heavy-duty truck and trailer repair services both on-site and on the road. Our expertise includes Tire Change, Jumpstarts, Lockouts, Fuel Delivery, Engine Oil Delivery, Antifreeze Delivery, Computer Diagnostics, Starter Replacement, Trailer Brakes, Air Line Repairs, and much more.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Users className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-white font-bold mb-1">Family Owned</h4>
                                <p className="text-sm text-gray-500">Personalized care and honest service you can trust.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Map className="w-8 h-8 text-accent mb-3" />
                                <h4 className="text-white font-bold mb-1">PA & NJ Coverage</h4>
                                <p className="text-sm text-gray-500">Serving counties across both states with rapid response.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-[100px] rounded-full"></div>
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-6 font-display">Why Choose MeloVRK?</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    <span>Fast & Reliable Roadside Assistance</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <span>Expertise in major Truck & Trailer brands</span>
                                </li>

                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <span>Comprehensive diagnostics & electrical repair</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-white font-bold mb-2">Call us to schedule service:</p>
                                <a href="tel:2673192421" className="text-3xl font-display font-bold text-primary hover:text-white transition-colors block">
                                    267-319-2421
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
