import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, BadgeCheck, Home } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: 'Premium Quality',
      description: 'We source only the highest quality tiles and sanitaryware from trusted manufacturers'
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Expert Consultation',
      description: 'Our knowledgeable staff provides personalized guidance for your project needs'
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: 'Vast Selection',
      description: 'Explore thousands of designs suitable for residential and commercial spaces'
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: 'Complete Solutions',
      description: 'From tiles to sanitaryware, we offer everything you need for your renovation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About MODI TILES
            </h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-gray-700 mb-6">
              Founded with a passion for quality and design, MODI TILES has been a trusted name in 
              Bengaluru for premium tiles and sanitaryware. We offer an extensive collection of 
              products to transform your spaces into works of art.
            </p>
            <p className="text-gray-700 mb-8">
              Our showroom near Willow Park showcases a wide range of tiles and sanitaryware products
              from leading brands. Whether you're renovating your home or working on a commercial project,
              our team is dedicated to helping you find the perfect solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/Cqds0mY.jpeg" 
                  alt="MODI TILES Showroom" 
                  className="w-full h-auto object-cover"
                  data-component-name="AboutSection"
                />
              </div>
              <div className="absolute top-1/4 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-secondary/10 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;