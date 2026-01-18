"use client";

import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-b from-white/5 to-black border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Background glowing blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10"></div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
                            Ready to get back on the road?
                        </h2>
                        <p className="text-gray-400">
                            Request a quote or schedule service today.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Company</label>
                                <input type="text" placeholder="Trucking Co." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Phone</label>
                                <input type="tel" placeholder="(555) 555-5555" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 font-medium ml-1">Service Type</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors">
                                    <option>General Repair</option>
                                    <option>Roadside Assistance</option>
                                    <option>Preventative Maintenance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                            <textarea rows={4} placeholder="Describe your issue..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                            <Send className="w-5 h-5" />
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
