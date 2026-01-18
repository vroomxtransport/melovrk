export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="relative w-[400px] h-[120px]">
                    <img
                        src="/images/logo.png"
                        alt="MeloVRK Logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-gray-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} MeloVRK Truck & Trailer Repair. All rights reserved.
                    </div>
                    <div className="text-primary text-xs mt-1 font-medium">
                        Built by Levani Grigolia
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* Social placeholders */}
                </div>
            </div>
        </footer>
    );
}
