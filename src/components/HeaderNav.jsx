import React from 'react';
import { Instagram, Mail, ShoppingCart } from 'lucide-react';

const HeaderNav = () => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-baseline gap-2">
          <span className="text-2xl font-black tracking-tight text-neutral-50">Needle & Ember</span>
          <span className="text-[10px] uppercase tracking-widest text-rose-400 group-hover:text-rose-300 transition">Neo-traditional</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#designs" className="hover:text-white transition">Available Designs</a>
          <a href="#shop" className="hover:text-white transition">Shop</a>
          <a href="#gallery" className="hover:text-white transition">Sketchbook</a>
          <a href="#booking" className="hover:text-white transition">Booking</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full border border-neutral-800 hover:border-rose-500 hover:text-rose-400 transition"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:booking@needle-ember.studio"
            aria-label="Email"
            className="p-2 rounded-full border border-neutral-800 hover:border-rose-500 hover:text-rose-400 transition"
          >
            <Mail size={18} />
          </a>
          <a href="#shop" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-500 transition text-sm">
            <ShoppingCart size={16} />
            <span>Shop</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
