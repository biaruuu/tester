import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-900/80 to-red-800/60 backdrop-blur-sm border border-red-700/50">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4 z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                BEST Free Anime App
              </h2>
              <p className="text-base md:text-lg text-white/90">
                Watch all Anime in HD on your Android devices
              </p>
              <button className="flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold text-lg group w-fit">
                Download Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                <div className="w-48 h-48 bg-red-500/20 rounded-full blur-3xl" />
              </div>
              <div className="relative flex items-center justify-center h-full">
                <div className="text-white/30 text-6xl font-bold">
                  App Preview
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
