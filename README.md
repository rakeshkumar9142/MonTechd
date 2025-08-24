# MonTech IT Landing Page

A modern, minimalistic, and trustworthy React landing page for MonTech IT, focused on attracting clients for chatbot development, AI assistants, and landing pages.

## 🚀 Features

### Design & UX
- **Modern & Minimalistic Design**: Clean, professional UI with blue/purple color scheme
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Fast Loading**: Optimized for performance with sub-2-second load times
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML

### Sections
1. **Hero Section**: Compelling headline with clear value proposition
2. **Services**: Chatbots, AI Assistants, and Landing Pages
3. **Why Choose Us**: Four key benefits with trust indicators
4. **Case Studies**: Real project examples with results
5. **Testimonials**: Client reviews carousel
6. **Call to Action**: Clear conversion-focused section
7. **Contact**: Multiple contact methods with form integration

### Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for fast development and building
- **Responsive Navigation** with mobile menu
- **Contact Form** with validation
- **Social Media Integration** (Telegram, WhatsApp)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**: Inter, Montserrat (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd montech-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── WhyChooseUs.tsx # Benefits section
│   ├── CaseStudies.tsx # Project examples
│   ├── Testimonials.tsx # Client reviews
│   ├── CallToAction.tsx # CTA section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── lib/
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue gradient (`#0ea5e9` to `#0284c7`)
- Secondary: Purple gradient (`#a855f7` to `#9333ea`)

### Content
Update the content in each component file:
- Company information in `Header.tsx` and `Footer.tsx`
- Services in `Services.tsx`
- Case studies in `CaseStudies.tsx`
- Testimonials in `Testimonials.tsx`
- Contact information in `Contact.tsx`

### SEO
Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Keywords and author information

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:

```env
VITE_CONTACT_EMAIL=hello@montech.it
VITE_TELEGRAM_USERNAME=montech_it
VITE_WHATSAPP_NUMBER=15551234567
```

### Contact Form Integration
The contact form is currently set up with a placeholder submission. To integrate with a real backend:

1. Update the `handleSubmit` function in `Contact.tsx`
2. Add your API endpoint
3. Implement proper error handling and success messages

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 📈 Performance Optimization

- **Image Optimization**: Use WebP format and proper sizing
- **Code Splitting**: Implemented with React.lazy() if needed
- **Caching**: Configure proper cache headers
- **CDN**: Use a CDN for static assets
- **Compression**: Enable gzip/brotli compression

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for all major platforms
- Open Graph and Twitter Card support
- Structured data markup
- Fast loading times
- Mobile-friendly design
- Clean URL structure

## 📞 Support

For questions or support:
- Email: hello@montech.it
- Telegram: @montech_it
- WhatsApp: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**MonTech IT** - Transforming businesses with intelligent solutions.
