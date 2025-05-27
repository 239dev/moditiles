import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'floor-tiles',
    name: 'Floor Tiles',
    description: 'Durable and stylish floor tiles for every room'
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    description: 'Elegant wall tiles to transform your space'
  },
  {
    id: 'bathroom-tiles',
    name: 'Bathroom Tiles',
    description: 'Waterproof and beautiful tiles for bathrooms'
  },
  {
    id: 'sanitaryware',
    name: 'Sanitaryware',
    description: 'Premium bathroom fixtures and accessories'
  },
  {
    id: 'parking-tiles',
    name: 'Parking Tiles',
    description: 'Durable tiles suitable for parking areas and driveways'
  }
];

const ProductCategories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Product Categories
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of high-quality tiles and sanitaryware products
            for your home and commercial spaces.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 p-6 flex flex-col justify-between"
            >
              <div className="text-gray-900">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;