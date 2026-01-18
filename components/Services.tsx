"use client";

import { Truck, Box, Check, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const truckServices = [
    "Air & cabin filter replacement",
    "Air conditioning",
    "Battery",
    "Brakes",
    "Engine Computer",
    "Differential repair",
    "Electrical issues",
    "Exhaust",
    "Oil change",
    "Steering & suspension repair",
    "Transmission",
    "ABS diagnostics",
    "Alternator installation",
    "Alternator repair",
    "APU repair",
    "APU services",
    "Axle repair",
    "Clutch repair",
    "Computer diagnostic",
    "Liftgate repair",
    "Lights & wiring",
    "PM services",
    "Truck inspections",
    "Waterpump repair"
];

const trailerServices = [
    "ABS brake diagnostics",
    "Axle repair and replacements",
    "Liftgate repair",
    "Lights and wiring",
    "Roof repairs or replacements",
    "Reefer unit repair",
    "... and much more!"
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Background elements */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive maintenance and repair solutions for your entire fleet.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Truck Services Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute -right-12 -bottom-12 opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 pointer-events-none">
                            <Image
                                src="/images/services/truck-icon.png"
                                alt="Truck Service Icon"
                                width={400}
                                height={400}
                                className="w-[300px] md:w-[400px] h-auto object-contain"
                            />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10 text-white">
                            <div className="p-3 rounded-xl bg-primary/20 text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-display">Truck Repairs</h3>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 relative z-10">
                            {truckServices.map((service, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Trailer Services Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute -right-12 -bottom-12 opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 pointer-events-none">
                            <Image
                                src="/images/services/trailer-icon.png"
                                alt="Trailer Service Icon"
                                width={400}
                                height={400}
                                className="w-[300px] md:w-[400px] h-auto object-contain"
                            />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10 text-white">
                            <div className="p-3 rounded-xl bg-accent/20 text-accent">
                                <Box className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-display">Trailer Repairs</h3>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 relative z-10">
                            {trailerServices.map((service, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors">
                                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{service}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 relative z-10">
                            <div className="flex items-center gap-3 mb-2 text-white font-bold">
                                <Wrench className="w-5 h-5 text-primary" />
                                <span>Need something else?</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                We handle complex repairs and custom work. Contact us to discuss your specific needs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
