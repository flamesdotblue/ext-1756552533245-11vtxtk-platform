import React from 'react';

const designs = [
  {
    id: 1,
    title: 'Serpent & Chrysanthemum',
    size: 'Forearm / Calf',
    price: '$280+ ',
    img: 'https://images.unsplash.com/photo-1615529162924-1c3a9af9cf2b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Daggered Rose',
    size: 'Upper arm',
    price: '$220+',
    img: 'https://images.unsplash.com/photo-1604176354204-9268737828bf?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Panther Head',
    size: 'Shoulder / Thigh',
    price: '$300+',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Sacred Heart',
    size: 'Any placement',
    price: '$180+',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Swallow & Daisies',
    size: 'Forearm / Chest',
    price: '$260+',
    img: 'https://images.unsplash.com/photo-1578321272237-9064e23f59f3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Jaguar & Palm',
    size: 'Calf / Back',
    price: '$320+',
    img: 'https://images.unsplash.com/photo-1542367597-8849eb941bc8?q=80&w=1400&auto=format&fit=crop',
  },
];

const AvailableDesigns = () => {
  return (
    <section id="designs" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">See Available Designs</h2>
            <p className="text-neutral-400 mt-1">Pick from current flash. Minor adjustments available during consult.</p>
          </div>
          <a href="#booking" className="hidden md:inline-block text-sm text-rose-400 hover:text-rose-300">Book your pick →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((d) => (
            <article key={d.id} className="group bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight">{d.title}</h3>
                <div className="mt-1 text-sm text-neutral-400">{d.size}</div>
                <div className="mt-2 font-medium text-rose-300">{d.price}</div>
                <div className="mt-4 flex gap-2">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center w-full px-3 py-2 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm transition"
                  >
                    Book this design
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableDesigns;
