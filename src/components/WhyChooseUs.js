import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Brain, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: DollarSign,
      title: t('why.features.payAfter.title'),
      description: t('why.features.payAfter.description'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: t('why.features.fastTransparent.title'),
      description: t('why.features.fastTransparent.description'),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Brain,
      title: t('why.features.expertise.title'),
      description: t('why.features.expertise.description'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: t('why.features.tailored.title'),
      description: t('why.features.tailored.description'),
      color: 'from-orange-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="why-us" className="py-20 gradient-bg">
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
            {t('why.title.part1')} <span className="gradient-text">{t('why.title.part2')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <div className="text-gray-600 font-medium">{t('why.stats.projects')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
            <div className="text-gray-600 font-medium">{t('why.stats.satisfaction')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
            <div className="text-gray-600 font-medium">{t('why.stats.support')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">2x</div>
            <div className="text-gray-600 font-medium">{t('why.stats.delivery')}</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {t('why.bottomCta.text')}
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
            {t('why.bottomCta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
