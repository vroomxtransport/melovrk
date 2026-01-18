"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Reviews", href: "#reviews" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Location", href: "#location" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-[400px] h-[120px]">
                        <img
                            src="/images/logo.png"
                            alt="MeloVRK Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:2673192421"
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                    >
                        <Phone className="w-4 h-4" />
                        <span>24/7 Emergency</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-white/80 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:2673192421"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-black font-bold rounded-lg"
                    >
                        <Phone className="w-4 h-4" />
                        Call Now
                    </a>
                </div>
            )}
        </nav>
    );
}
