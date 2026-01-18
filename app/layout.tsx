import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "MeloVRK Truck & Trailer Repair Shop",
  description: "Professional Truck & Trailer Repair in PA. Modern, reliable, and fast service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}>
        {children}
      </body>
    </html>
  );
}
