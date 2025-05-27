import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Palette, 
  ShoppingBag, 
  Users 
} from 'lucide-react';

const services = [
  {
    icon: <Truck size={36} className="text-primary" />,
    title: 'Delivery Service',
    description: 'We offer delivery services to ensure your products reach you safely and on time.'
  },
  {
    icon: <Palette size={36} className="text-primary" />,
    title: 'Design Consultation',
    description: 'Get expert advice on selecting the right products for your project and style.'
  },
  {
    icon: <ShoppingBag size={36} className="text-primary" />,
    title: 'Wholesale Options',
    description: 'Special pricing and support for bulk orders and trade professionals.'
  },
  {
    icon: <Users size={36} className="text-primary" />,
    title: 'After-Sales Support',
    description: 'We provide dedicated support even after your purchase is complete.'
  }
];

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive services to ensure your project is a success from
            selection to installation and beyond.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-cream p-6 rounded-lg hover:shadow-soft transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-primary/5 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                Looking for Custom Solutions?
              </h3>
              <p className="text-gray-600 max-w-xl">
                Our experts can help you with customized products and solutions tailored
                to your specific requirements and design vision.
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-md transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;