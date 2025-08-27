import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { t } = useTranslation();

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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t('hero.headline1')}{' '}
            <span className="gradient-text">{t('hero.headlineHighlight')}</span>
            <br />
            {t('hero.headline2')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-4 mb-12"
          >
            {t('getAQuote')}
            <ArrowRight className="ml-2 inline-block" size={20} />
          </motion.button>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-8 md:space-x-16 text-gray-400"
          >
            <motion.div
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              className="flex flex-col items-center space-y-2"
            >
              <Bot size={32} />
              <span className="text-sm font-medium">{t('hero.features.aiPowered')}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              className="flex flex-col items-center space-y-2"
            >
              <Zap size={32} />
              <span className="text-sm font-medium">{t('hero.features.fast')}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: '#3b82f6' }}
              className="flex flex-col items-center space-y-2"
            >
              <Globe size={32} />
              <span className="text-sm font-medium">{t('hero.features.global')}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
