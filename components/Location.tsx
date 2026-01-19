"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            {/* Background decoration */}
            <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                        <MapPin className="w-4 h-4" />
                        Serving Fairless Hills & Surrounding Areas
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
                        Conveniently Located <br />
                        <span className="text-white/50">in Fairless Hills, PA</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Our state-of-the-art facility is equipped to handle the largest rigs on the road. Easy access from major highways.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Visit Us</h4>
                                <p className="text-gray-400">225 Lincoln Hwy<br />Fairless Hills, PA 19030</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="p-3 bg-accent/20 rounded-lg text-accent">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Operating Hours</h4>
                                <p className="text-gray-400">Mon - Fri: 7:00 AM - 9:00 PM</p>

                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="p-3 bg-white/10 rounded-lg text-white">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Contact</h4>
                                <p className="text-gray-400">Phone: 267-319-2421</p>
                                <p className="text-gray-400">Email: connect.melo1inc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[600px] rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative group">
                    {/* Map Placeholder or IFrame */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <iframe
                            src="https://maps.google.com/maps?q=MeloVRK+Truck+%26+Trailer+Repair+Shop+225+Lincoln+Hwy+Fairless+Hills+PA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-white font-bold">MeloVRK HQ</p>
                                <p className="text-sm text-gray-400">2.4 miles away</p>
                            </div>
                            <a
                                href="https://www.google.com/maps/place/MeloVRK+Truck+%26+Trailer+Repair+Shop/@40.1879193,-74.8579031,16z/data=!3m1!5s0x89c15147a8ed59dd:0xaa9006cf47fc2d8!4m9!1m2!2m1!1struck+and+trailer+repair!3m5!1s0x89c1517aea59dccb:0x3360f38e7cffa775!8m2!3d40.1879193!4d-74.8518646!16s%2Fg%2F11wqn0j2vc?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                            >
                                Navigate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
