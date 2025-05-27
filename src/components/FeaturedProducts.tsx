import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Italian Marble Tiles",
    category: "Floor Tiles",
    image: "https://images.pexels.com/photos/6585648/pexels-photo-6585648.jpeg",
    price: "₹180/sq.ft"
  },
  {
    id: 2,
    name: "Modern Bathroom Set",
    category: "Sanitaryware",
    image: "https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg",
    price: "₹28,500"
  },
  {
    id: 3,
    name: "Designer Wall Tiles",
    category: "Wall Tiles",
    image: "https://images.pexels.com/photos/4992483/pexels-photo-4992483.jpeg",
    price: "₹120/sq.ft"
  },
  {
    id: 4,
    name: "Premium Shower System",
    category: "Sanitaryware",
    image: "https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg",
    price: "₹15,900"
  },
  {
    id: 5,
    name: "Wooden Finish Tiles",
    category: "Floor Tiles",
    image: "https://images.pexels.com/photos/6508858/pexels-photo-6508858.jpeg",
    price: "₹160/sq.ft"
  },
  {
    id: 6,
    name: "Luxury Basin Set",
    category: "Sanitaryware",
    image: "https://images.pexels.com/photos/3006145/pexels-photo-3006145.jpeg",
    price: "₹12,500"
  }
];

const FeaturedProducts: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3 >= products.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 3 < 0 ? Math.max(0, products.length - 3) : prev - 3));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our premium selection of tiles and sanitaryware that blend
              style, quality, and functionality for your home.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next products"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-medium">{product.price}</span>
                  <button className="bg-primary/10 hover:bg-primary/20 text-primary font-medium px-4 py-2 rounded-md transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Request Full Catalog
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;