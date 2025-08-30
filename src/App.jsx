import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import AvailableDesigns from './components/AvailableDesigns';
import GalleryShopBooking from './components/GalleryShopBooking';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <HeaderNav />
      <main>
        <Hero />
        <AvailableDesigns />
        <GalleryShopBooking />
      </main>
      <footer className="border-t border-neutral-800 bg-neutral-950/60 backdrop-blur py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Needle & Ember Studio — Neo-traditional tattoo art</p>
          <div className="flex items-center gap-6">
            <a href="#designs" className="hover:text-neutral-200 transition">See Available Designs</a>
            <a href="#booking" className="hover:text-neutral-200 transition">Book a Session</a>
            <a href="#shop" className="hover:text-neutral-200 transition">Shop</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
