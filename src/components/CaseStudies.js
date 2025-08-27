import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();
  const caseStudies = [
    {
      title: t('cases.items.0.title'),
      company: 'TechStore Pro',
      description: t('cases.items.0.description'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [t('cases.items.0.results.0'), t('cases.items.0.results.1'), t('cases.items.0.results.2')],
      category: t('cases.items.0.category')
    },
    {
      title: t('cases.items.1.title'),
      company: 'DataFlow Solutions',
      description: t('cases.items.1.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [t('cases.items.1.results.0'), t('cases.items.1.results.1'), t('cases.items.1.results.2')],
      category: t('cases.items.1.category')
    },
    {
      title: t('cases.items.2.title'),
      company: 'GrowthStart Inc',
      description: t('cases.items.2.description'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      results: [t('cases.items.2.results.0'), t('cases.items.2.results.1'), t('cases.items.2.results.2')],
      category: t('cases.items.2.category')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="cases" className="py-20 bg-white">
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
            {t('cases.title.part1')} <span className="gradient-text">{t('cases.title.part2')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Company */}
                <p className="text-sm text-primary-600 font-semibold mb-2">
                  {study.company}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                      {result}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-200"
                >
                  {t('cases.viewButton')}
                  <ExternalLink className="ml-2" size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {t('cases.bottomCta.text')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            {t('cases.bottomCta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
