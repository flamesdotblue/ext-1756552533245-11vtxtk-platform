import React from 'react';
import { Calendar, ExternalLink, Mail, ShoppingCart } from 'lucide-react';

const shopItems = [
  {
    id: 'sheet-01',
    title: 'Flash Sheet Vol. I',
    price: '$35',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'print-01',
    title: 'Jaguar Print (11x17)',
    price: '$28',
    img: 'https://images.unsplash.com/photo-1544551763-7ef4200b62ba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'sheet-02',
    title: 'Flash Sheet Vol. II',
    price: '$35',
    img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1400&auto=format&fit=crop',
  },
];

const sketches = [
  'https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548095115-45697e961f65?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567968513553-0d7c36d8c5f7?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513483460609-8de0aa1f7d8a?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=1400&auto=format&fit=crop',
];

const GalleryShopBooking = () => {
  return (
    <section className="py-16 md:py-24">
      <div id="shop" className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Shop: Flash Sheets & Prints</h2>
            <p className="text-neutral-400 mt-1">Limited runs printed on heavyweight archival stock.</p>
          </div>
          <a
            href="#booking"
            className="hidden md:inline-block text-sm text-neutral-300 hover:text-white"
          >
            Curious about a custom? Let’s talk →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItems.map((item) => (
            <article key={item.id} className="group bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-rose-300 font-medium">{item.price}</span>
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-sm">
                    <ShoppingCart size={16} /> Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div id="gallery" className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Sketchbook</h2>
            <p className="text-neutral-400 mt-1">Process shots and linework studies from the bench.</p>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-rose-400 hover:text-rose-300"
          >
            Follow on Instagram <ExternalLink size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {sketches.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg border border-neutral-800">
              <img src={src} alt={`Sketchbook ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>

      <div id="booking" className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Booking & Inquiries</h2>
            <p className="mt-2 text-neutral-300">
              Ready to claim a flash design or discuss a custom? Use the calendar to request a consult. I’ll reply with prep, pricing, and aftercare details.
            </p>
            <ul className="mt-4 text-sm text-neutral-400 list-disc list-inside space-y-1">
              <li>Studio: By appointment only (downtown)</li>
              <li>Minimum: $150 — Deposits required for booking</li>
              <li>Neo-traditional focus: bold lines, saturated color</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-medium"
              >
                <Calendar size={18} /> Request a consult
              </a>
              <a
                href="mailto:booking@needle-ember.studio"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500"
              >
                <Mail size={18} /> booking@needle-ember.studio
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1556228720-c1e77759f5ce?q=80&w=1600&auto=format&fit=crop"
                alt="Studio desk with inks and sketches"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1600&auto=format&fit=crop"
                alt="Stencil and machine ready for tattoo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryShopBooking;
