import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageCircle, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { databases, CONTACT_COLLECTION_ID, DATABASE_ID } from '../config/appwrite';
import { ID } from 'appwrite';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submittedName, setSubmittedName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      // Create a new document in Appwrite
      await databases.createDocument(
        DATABASE_ID,              // Database ID from appwrite.js
        CONTACT_COLLECTION_ID,    // Collection ID from appwrite.js
        ID.unique(),              // Auto-generate unique document ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
  
      setSubmitStatus('success');
      setSubmittedName(formData.name);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const openTelegram = () => {
    window.open('https://t.me/MonTech_IT_Bot', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/77086570811?text=Привет%20MonTech%20IT,%20я%20хотел%20бы%20обсудить%20проект.', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:montech.kz@gmail.com?subject=Project%20Inquiry', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            {t('contact.title.part1')} <span className="gradient-text">{t('contact.title.part2')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('contact.left.title')}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {t('contact.left.text')}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Telegram */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openTelegram}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-colors duration-200"
                >
                  <MessageCircle size={24} />
                  <span>{t('contact.methods.telegram')}</span>
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-colors duration-200"
                >
                  <Phone size={24} />
                  <span>{t('contact.methods.whatsapp')}</span>
                </motion.button>

                {/* Email */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openEmail}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-colors duration-200"
                >
                  <Mail size={24} />
                  <span>{t('contact.methods.email')}</span>
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">{t('contact.why.title')}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t('contact.why.items.0')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t('contact.why.items.1')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t('contact.why.items.2')}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {t('contact.why.items.3')}
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                  >
                    <CheckCircle size={20} />
                    <span>{t('contact.form.success', { name: submittedName })}</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span>{t('contact.form.error')}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
