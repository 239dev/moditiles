import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Elevate Your Space",
      subtitle: "Premium Tiles & Sanitaryware",
      description: "Discover our exclusive collection of designer tiles and premium sanitaryware for your dream home."
    },
    {
      image: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg",
      title: "Premium Quality",
      subtitle: "Bathroom Solutions",
      description: "Transform your bathroom with our extensive range of elegant sanitaryware and accessories."
    },
    {
      image: "https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg",
      title: "Designer Collection",
      subtitle: "Tiles for Every Space",
      description: "From classic to contemporary, find tiles that perfectly complement your interior design vision."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <motion.h2 
                className="text-lg md:text-xl uppercase tracking-wider mb-2 text-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#products"
                  className="group bg-white text-gray-900 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-white flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Explore Products
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900 transform hover:scale-105"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;