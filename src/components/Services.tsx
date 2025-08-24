import { motion } from 'framer-motion'
import { Bot, Brain, Globe, MessageCircle, Zap, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Chatbots',
      description: 'Customer support automation, integration with Telegram, WhatsApp, and other platforms.',
      features: ['24/7 Customer Support', 'Multi-platform Integration', 'Smart Response System', 'Analytics & Insights'],
      color: 'primary'
    },
    {
      icon: Brain,
      title: 'AI Assistants',
      description: 'Smart business helpers with personalized solutions for your specific needs.',
      features: ['Custom AI Training', 'Process Automation', 'Data Analysis', 'Predictive Insights'],
      color: 'secondary'
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'High-conversion websites designed for sales and promotion with modern UI/UX.',
      features: ['Conversion Optimization', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading'],
      color: 'primary'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating intelligent solutions that drive business growth and enhance customer experience.
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
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card p-8 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-200 transition-colors duration-300`}>
                <service.icon className={`w-8 h-8 text-${service.color}-600`} />
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
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 text-${service.color}-600 hover:text-${service.color}-700 font-semibold flex items-center space-x-2 transition-colors duration-200`}
              >
                <span>Learn More</span>
                <Zap size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">Experienced developers and designers at your service</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
