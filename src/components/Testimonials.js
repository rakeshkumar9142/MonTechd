import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStore Pro',
      company: 'E-commerce Platform',
      content: 'MonTech IT transformed our customer service with their AI chatbot. The results exceeded our expectations - 300% increase in customer engagement and 60% reduction in support tickets. Their team is professional, responsive, and truly understands business needs.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, DataFlow Solutions',
      company: 'Analytics Platform',
      content: 'The AI-powered analytics dashboard they built for us is incredible. Real-time insights, automated reporting, and a 50% improvement in decision-making speed. MonTech IT delivered exactly what we needed, on time and within budget.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthStart Inc',
      company: 'SaaS Startup',
      content: 'Our landing page conversion rates skyrocketed after working with MonTech IT. 250% increase in leads and a much better user experience. Their attention to detail and conversion optimization expertise is outstanding.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'David Thompson',
      position: 'Founder, InnovateLab',
      company: 'Tech Startup',
      content: 'Working with MonTech IT was a game-changer for our business. Their AI assistant solution streamlined our operations and provided insights we never had before. The ROI was immediate and substantial.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('reviews.title.part1')} <span className="gradient-text">{t('reviews.title.part2')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Quote className="text-white" size={32} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
            <div className="text-gray-600 font-medium">{t('reviews.stats.satisfaction')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">4.9/5</div>
            <div className="text-gray-600 font-medium">{t('reviews.stats.average')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <div className="text-gray-600 font-medium">{t('reviews.stats.clients')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
            <div className="text-gray-600 font-medium">{t('reviews.stats.success')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
