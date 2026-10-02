import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { GALLERY_IMAGES } from '../data/hostelData';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2, Sparkles, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Bedrooms & Pods' },
    { id: 'garden', label: 'Garden & Courtyard' },
    { id: 'lounge', label: 'Common Lounge' },
    { id: 'amenities', label: 'Facilities & Coffee' },
    { id: 'ipoh', label: 'Ipoh Vibe' },
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (indexInFiltered: number) => {
    setLightboxIndex(indexInFiltered);
  };

  return (
    <div className="py-12 space-y-12 bg-slate-900 text-slate-100 min-h-screen">
      
      {/* Page Title Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-widest rounded-full">
          Beds In Garden Hostel · Photo Gallery
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif-display font-bold text-white tracking-tight">
          Visual Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our lush tropical garden courtyard, custom wooden privacy pods, relaxed co-working lounges, and the historic charm of Ipoh, Perak.
        </p>

        {/* Category Tabs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-950 border border-purple-500'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-slate-950 border border-purple-900/40 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:border-purple-600/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-purple-950/90 text-purple-200 text-[10px] font-semibold rounded-md border border-purple-800/50 backdrop-blur-md">
                  {item.categoryLabel}
                </span>

                {/* Zoom Icon Affordance */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-purple-800/50">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Text overlay on bottom */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-base font-serif-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        images={filteredImages}
        currentIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(newIndex) => setLightboxIndex(newIndex)}
      />

    </div>
  );
};
