import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Globe, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: MessageCircle,
      title: t('servicesSection.cards.chatbots.title'),
      description: t('servicesSection.cards.chatbots.description'),
      features: [t('servicesSection.cards.chatbots.features.0'), t('servicesSection.cards.chatbots.features.1'), t('servicesSection.cards.chatbots.features.2'), t('servicesSection.cards.chatbots.features.3')]
    },
    {
      icon: Bot,
      title: t('servicesSection.cards.ai.title'),
      description: t('servicesSection.cards.ai.description'),
      features: [t('servicesSection.cards.ai.features.0'), t('servicesSection.cards.ai.features.1'), t('servicesSection.cards.ai.features.2'), t('servicesSection.cards.ai.features.3')]
    },
    {
      icon: Globe,
      title: t('servicesSection.cards.landing.title'),
      description: t('servicesSection.cards.landing.description'),
      features: [t('servicesSection.cards.landing.features.0'), t('servicesSection.cards.landing.features.1'), t('servicesSection.cards.landing.features.2'), t('servicesSection.cards.landing.features.3')]
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
    <section id="services" className="py-20 bg-white">
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
            {t('servicesSection.title.part1')} <span className="gradient-text">{t('servicesSection.title.part2')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSection.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="card p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-200"
              >
                {t('common.learnMore')}
                <ArrowRight className="ml-2" size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            {t('servicesSection.bottomCta.text')}
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
            {t('servicesSection.bottomCta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
