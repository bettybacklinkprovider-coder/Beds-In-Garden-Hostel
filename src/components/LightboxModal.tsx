import React, { useEffect } from 'react';
import { GalleryImage } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigateIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    onNavigateIndex(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % images.length;
    onNavigateIndex(next);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-in fade-in duration-200">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-3 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full transition-colors border border-purple-800/40"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Content Box */}
      <div className="relative max-w-5xl w-full flex flex-col items-center my-auto">
        
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-900/80 hover:bg-purple-900 text-white rounded-full border border-purple-800/50 shadow-xl transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-900/80 hover:bg-purple-900 text-white rounded-full border border-purple-800/50 shadow-xl transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative rounded-2xl overflow-hidden border border-purple-800/60 shadow-2xl max-h-[75vh] bg-slate-900 flex items-center justify-center">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-950/80 border border-purple-700/50 rounded-full text-xs font-semibold text-purple-300 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentImage.categoryLabel}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{currentIndex + 1} of {images.length}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-serif-display font-bold text-white">
            {currentImage.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentImage.description}
          </p>
        </div>

      </div>
    </div>
  );
};
