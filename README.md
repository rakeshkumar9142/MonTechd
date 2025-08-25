# MonTech IT Landing Page

A modern, minimalistic, and trustworthy landing page for MonTech IT - a company specializing in chatbots, AI assistants, and landing pages for businesses.

## 🚀 Features

- **Modern Design**: Clean, professional UI with blue/purple gradient theme
- **Responsive**: Fully responsive design for mobile and desktop
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Proper meta tags, titles, and descriptions
- **Contact Form**: Integrated with Appwrite backend
- **Performance**: Optimized for fast loading (< 2s)
- **Accessibility**: WCAG compliant design

## 🛠 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Appwrite
- **Font**: Inter (Google Fonts)

## 📋 Sections

1. **Hero Section**: Main headline with CTA button
2. **Services**: 3 service cards (Chatbots, AI Assistants, Landing Pages)
3. **Why Choose Us**: 4 feature highlights with icons
4. **Case Studies**: 3 example project cards
5. **Testimonials**: Client reviews carousel
6. **Call to Action**: Final CTA section
7. **Contact**: Form with Appwrite integration + social buttons

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd montech-it-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Appwrite (Optional)**
   
   If you want to use the contact form functionality:
   
   - Create an Appwrite account at [appwrite.io](https://appwrite.io)
   - Create a new project
   - Create a database and collection for contact form submissions
   - Update the configuration in `src/config/appwrite.js`:
     ```javascript
     export const CONTACT_COLLECTION_ID = 'your-collection-id';
     ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Services section
│   ├── WhyChooseUs.js  # Why choose us section
│   ├── CaseStudies.js  # Case studies section
│   ├── Testimonials.js # Testimonials carousel
│   ├── CallToAction.js # CTA section
│   ├── Contact.js      # Contact form
│   └── Navbar.js       # Navigation bar
├── config/
│   └── appwrite.js     # Appwrite configuration
├── utils/
│   └── cn.js          # Utility functions
├── App.js             # Main app component
├── index.js           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  },
  purple: {
    50: '#faf5ff',
    // ... other shades
    900: '#581c87',
  }
}
```

### Content

Update the content in each component file to match your business needs:

- **Hero**: Update headline and subheadline in `src/components/Hero.js`
- **Services**: Modify services in `src/components/Services.js`
- **Case Studies**: Update projects in `src/components/CaseStudies.js`
- **Testimonials**: Change reviews in `src/components/Testimonials.js`

### Contact Information

Update contact details in `src/components/Contact.js`:

- Telegram link: `https://t.me/montech_it`
- WhatsApp number: `1234567890`
- Email: `contact@montech-it.com`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Optimization

- **Lazy Loading**: Images are optimized and lazy-loaded
- **Code Splitting**: React components are optimized
- **Minimal Dependencies**: Only essential packages included
- **Optimized Images**: Using Unsplash CDN for fast loading

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: contact@montech-it.com
- Telegram: @montech_it
- WhatsApp: +1234567890

---

Built with ❤️ by MonTech IT
