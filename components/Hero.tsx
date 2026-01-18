"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const encode = (data: { [key: string]: string }) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()) as { [key: string]: string };

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode(data),
            });

            if (response.ok) {
                alert("Thank you! Your request has been received. We will contact you shortly.");
                form.reset();
            } else {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Form Error:", error);
            alert("Submission failed. Please try again or call us directly at 267-319-2421.");
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-real.png"
                    alt="Truck Repair Shop"
                    fill
                    priority
                    className="object-cover opacity-95"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#050505] opacity-0 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent z-1"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-1"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Serving Fairless Hills, PA & Surrounding Areas
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] mb-6 drop-shadow-2xl">
                        Heavy Duty <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Repair Experts
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed drop-shadow-md">
                        Professional truck and trailer repair services. from roadside assistance to full-service shop diagnostics. We get you back on the road, fast and reliable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://www.google.com/maps/place/MeloVRK+Truck+%26+Trailer+Repair+Shop/@40.1879193,-74.8579031,16z/data=!3m1!5s0x89c15147a8ed59dd:0xaa9006cf47fc2d8!4m9!1m2!2m1!1struck+and+trailer+repair!3m5!1s0x89c1517aea59dccb:0x3360f38e7cffa775!8m2!3d40.1879193!4d-74.8518646!16s%2Fg%2F11wqn0j2vc?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button px-8 py-4 rounded-lg text-white font-bold flex items-center justify-center gap-2 group bg-primary/10 hover:bg-primary/20 border-primary/40"
                        >
                            Get Directions
                            <MapPin className="w-4 h-4 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                        >
                            Our Services
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Element / Decoration - REMOVED */}
                {/* Service Inquiry Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block w-full max-w-md ml-auto"
                >
                    <div className="rounded-2xl p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Form Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] -z-10"></div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Quick Service Request</h3>
                            <p className="text-gray-400 text-sm">Get a quote or schedule a repair in minutes.</p>
                        </div>

                        <form
                            name="quick-service-request"
                            method="POST"
                            data-netlify="true"
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="quick-service-request" />
                            <div>
                                <input type="text" name="name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-500" />
                            </div>
                            <div>
                                <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-500" />
                            </div>
                            <div>
                                <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors text-gray-400">
                                    <option value="" disabled selected>Service Needed</option>
                                    <option value="Roadside Assistance" className="bg-black">Roadside Assistance</option>
                                    <option value="Tire Repair/Change" className="bg-black">Tire Repair/Change</option>
                                    <option value="Engine Diagnostics" className="bg-black">Engine Diagnostics</option>
                                    <option value="Preventative Maintenance" className="bg-black">Preventative Maintenance</option>
                                    <option value="Other" className="bg-black">Other</option>
                                </select>
                            </div>
                            <div>
                                <textarea name="description" rows={3} placeholder="Briefly describe the issue..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-500 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] text-sm">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
