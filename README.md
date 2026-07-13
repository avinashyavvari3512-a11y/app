# Premium AI & Data Engineering Portfolio

A modern, production-ready personal portfolio website for **Avinash Yavvari** - Senior Data Engineer & AI Platform Architect.

## 🚀 Features

### Design & UX
- **Premium Dark Theme** with custom color palette (#050505, #4F8CFF, #00D4FF, #7C5CFC)
- **Glassmorphism** effects throughout
- **Smooth animations** powered by Framer Motion
- **Scroll-based interactions** and parallax effects
- **Responsive design** optimized for all devices
- **Premium typography** with Space Grotesk and Inter fonts

### Sections
1. **Hero Section** - Animated headline with rotating role display
2. **About Me** - Professional story with impact metrics
3. **Skills** - Interactive animated skill cards across 6 categories
4. **Experience Timeline** - Beautiful vertical timeline with achievements
5. **Featured Projects** - 8 projects with filtering by category
6. **Architecture Diagrams** - Animated enterprise architecture visualizations
7. **Achievements** - Animated counters showing business impact
8. **Certifications** - Industry credentials showcase
9. **Contact Form** - EmailJS-powered with MongoDB storage

### Technical Features
- **Next.js 15.5** with App Router
- **TypeScript** ready (using .js for faster development)
- **Framer Motion** for premium animations
- **EmailJS** integration for contact form
- **MongoDB** for contact data persistence
- **Google Analytics** for tracking
- **shadcn/ui** components
- **TailwindCSS** for styling
- **SEO optimized** with Open Graph tags

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5
- **Styling**: TailwindCSS, shadcn/ui
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Email**: EmailJS
- **Analytics**: Google Analytics
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter)

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ or Yarn
- MongoDB instance
- EmailJS account
- Google Analytics account (optional)

### Environment Variables

The following environment variables are configured in `.env`:

```bash
# Database
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db

# Application
NEXT_PUBLIC_BASE_URL=https://ai-data-architect.preview.emergentagent.com

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ze9WLoTcRbHxDqGWf
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id  # ⚠️ UPDATE THIS
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  # ⚠️ UPDATE THIS

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-401009370

# Resume PDF
NEXT_PUBLIC_RESUME_URL=https://customer-assets.emergentagent.com/job_ai-data-architect/artifacts/evz1gnjt_Avinash%20Yavvari%20Resume_HCP.pdf
```

### EmailJS Setup (IMPORTANT)

To enable the contact form, you need to:

1. **Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)**
2. **Create an Email Service** (Gmail, Outlook, etc.)
3. **Create an Email Template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{company}}` - Sender's company (optional)
4. **Get your Service ID and Template ID**
5. **Update `.env` file** with your IDs:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   ```

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 🎨 Color Palette

- **Background**: `#050505`
- **Card Background**: `#101010`
- **Primary**: `#4F8CFF` (Blue)
- **Secondary**: `#00D4FF` (Cyan)
- **Accent**: `#7C5CFC` (Purple)
- **Text**: `#FFFFFF`
- **Muted Text**: `#B3B3B3`

## 📱 Sections Overview

### Hero Section
- Animated gradient background with neural network effects
- Rotating role display (Data Engineering, AI, Cloud, etc.)
- Three CTA buttons: View Projects, Download Resume, Let's Connect
- Smooth scroll indicator

### About Section
- Professional narrative highlighting 7+ years experience
- 4 key metrics cards (animated on scroll)
- Core expertise tags

### Skills Section
- 6 categories: Cloud, Data Engineering, Programming, AI/ML, BI, DevOps
- Animated skill badges
- Hover effects on cards

### Experience Timeline
- Vertical timeline with 3 positions
- Alternating left/right layout
- Achievement bullets with measurable impact
- Technology tags

### Projects Section
- 8 featured projects with images
- Filter by: All, Cloud, AI, ML, Healthcare, Data Engineering, Analytics
- Project cards with:
  - Hero image
  - Description
  - Technologies
  - Impact metrics
  - GitHub & Demo links (placeholder)

### Architecture Diagrams
- Enterprise Data Platform flow
- Modern AI RAG Architecture flow
- Animated nodes and arrows
- Interactive hover effects

### Achievements
- 6 animated counters
- Records processed, dashboards, accuracy, improvements
- Triggers on scroll into view

### Certifications
- 6 industry certifications
- Azure, Snowflake, Databricks, Fabric, Generative AI, AWS
- Premium card design with icons

### Contact Form
- Fields: Name, Email, Company (optional), Subject, Message
- EmailJS integration for sending emails
- MongoDB storage for contact submissions
- Form validation with Zod
- Success/error states
- Social links (LinkedIn, GitHub, Email)

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`/app/components/hero-section.js`):
   - Change name, title, description
   - Update roles array for rotating text

2. **About Section** (`/app/components/about-section.js`):
   - Update professional story
   - Modify stats/metrics

3. **Experience** (`/app/components/experience-section.js`):
   - Update companies, roles, dates
   - Add/remove achievements

4. **Projects** (`/app/components/projects-section.js`):
   - Add/remove projects
   - Update images, descriptions, technologies

5. **Social Links** (Footer & Contact):
   - Update LinkedIn, GitHub, Twitter, Email URLs

### Images

Images are sourced from:
- Unsplash (via vision_expert_agent)
- Pexels

To use your own images:
- Replace image URLs in project cards
- Add images to `/public` folder
- Update image paths in components

## 📊 Analytics

Google Analytics is configured with ID: `G-401009370`

Track events:
```javascript
import { event } from '@/lib/google-analytics';

event({
  action: 'button_click',
  category: 'engagement',
  label: 'Download Resume',
  value: 1
});
```

## 🔒 Security

- ✅ EmailJS public key is safe to expose (client-side)
- ✅ MongoDB connection string in environment variables (server-only)
- ✅ API routes protected with validation
- ✅ Form validation with Zod

## 🚀 Deployment

The site is currently deployed at:
**https://ai-data-architect.preview.emergentagent.com**

To deploy elsewhere:
1. Update `NEXT_PUBLIC_BASE_URL` in `.env`
2. Configure MongoDB connection
3. Set up EmailJS
4. Deploy to Vercel, Netlify, or any Node.js host

## 📝 TODO / Future Enhancements

- [ ] Complete EmailJS Service ID and Template ID configuration
- [ ] Add MDX blog functionality
- [ ] Implement Three.js 3D elements (rotating globe, neural network visualization)
- [ ] Add Command Palette (Ctrl+K) for quick navigation
- [ ] Create resume page with embedded PDF viewer
- [ ] Add project case studies
- [ ] Implement dark/light theme toggle
- [ ] Add testimonials section with real content
- [ ] Performance optimization (lazy loading, image optimization)
- [ ] Add unit tests

## 🐛 Known Issues

1. **EmailJS**: Service ID and Template ID need to be configured in EmailJS dashboard
2. **Resume Button**: Links to provided PDF URL - verify it's accessible
3. **GitHub/Demo Links**: Currently placeholders - need real project URLs

## 📄 License

This portfolio is a custom build for Avinash Yavvari. All rights reserved.

## 🙏 Credits

- **Design Inspiration**: Apple, Stripe, Vercel, Linear, OpenAI, Anthropic, Cursor
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter)
- **Images**: Unsplash, Pexels
- **Framework**: Next.js
- **UI Components**: shadcn/ui

---

Built with ❤️ using Next.js, Framer Motion, and modern web technologies.
