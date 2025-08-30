import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(244,63,94,0.25),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Bold, neo-traditional tattoo art
            </h1>
            <p className="mt-4 text-neutral-300 text-lg">
              Flash sheets, limited prints, and custom bookings by a studio focused on saturated color, heavy lines, and timeless motifs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#designs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-medium transition"
              >
                See Available Designs
                <ArrowRight size={18} />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-700 hover:border-neutral-500 text-neutral-100 transition"
              >
                Book a Session
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl shadow-rose-900/20">
              <img
                src="https://images.unsplash.com/photo-1597852074816-36a6c8ec4b52?q=80&w=1600&auto=format&fit=crop"
                alt="Neo-traditional tattoo flash collage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
