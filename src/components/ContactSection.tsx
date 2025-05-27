import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const businessHours = [
    { day: 'Monday', hours: '9 a.m.–8 p.m.' },
    { day: 'Tuesday', hours: '9 a.m.–8 p.m.' },
    { day: 'Wednesday', hours: '9 a.m.–8 p.m.' },
    { day: 'Thursday', hours: '9 a.m.–8 p.m.' },
    { day: 'Friday', hours: '9 a.m.–8 p.m.' },
    { day: 'Saturday', hours: '9 a.m.–8 p.m.' },
    { day: 'Sunday', hours: '11 a.m.–5 p.m.' }
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our showroom or get in touch with us for inquiries, quotes, or to schedule a consultation.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-soft">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    Near willow park, k Channasandra, RAMPURA road, kalkere, Bengaluru, Karnataka 560043, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">+919880023099</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-lg mb-1">Business Hours</h4>
                  <div className="text-gray-600 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between py-1">
                        <span className="font-medium mr-2">{item.day}:</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-lg mb-4">Find Us On Map</h4>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.990538338189!2d77.7175425!3d13.0333881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116496310811%3A0x51499d2d84c633f!2sK%20Channasandra%2C%20Bengaluru%2C%20Karnataka%20560043%2C%20India!5e0!3m2!1sen!2sus!4v1678900000000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;