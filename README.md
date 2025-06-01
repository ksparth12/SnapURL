# SnapURL

<div align="center">

**Modern URL shortening with powerful analytics**

</div>

SnapURL is a sleek, modern URL shortening application built with React, TypeScript, and Tailwind CSS. It transforms long, unwieldy URLs into concise, trackable links with just a few clicks.

## ✨ Features

- **Instant URL Shortening**: Convert any long URL to a short, memorable link in seconds
- **Custom Aliases**: Create personalized short links with your own custom text
- **QR Code Generation**: Generate scannable QR codes for easy mobile access
- **Click Analytics**: Track usage statistics with a beautiful analytics dashboard
- **Dark/Light Mode**: Seamless theme switching for comfortable viewing any time of day
- **Responsive Design**: Works perfectly on all devices from mobile to desktop
- **Local Storage**: Recent links are saved automatically in your browser
- **Copy to Clipboard**: One-click copying of shortened URLs

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Technologies

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast builds and hot module replacement
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components based on Radix UI primitives
- **React Query** for data fetching and state management
- **React Router** for client-side routing
- **React Hook Form** for form handling with Zod validation
- **Recharts** for beautiful analytics visualizations
- **Lucide React** for consistent, customizable icons

## 🔧 Project Structure

```
snapurl/
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── URLShortener.tsx  # Main shortening component
│   │   ├── FeatureCards.tsx  # Feature display cards
│   │   ├── StatsSection.tsx  # Analytics visualization
│   │   └── ...            # Other components
│   ├── pages/             # Application pages
│   │   ├── Index.tsx      # Home page with shortener
│   │   ├── About.tsx      # About page
│   │   └── Contact.tsx    # Contact page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── styles/            # Global styles
└── package.json           # Dependencies and scripts
```

## 💡 How to Use

1. Enter your long URL in the input field
2. Optionally add a custom alias (e.g., "my-special-link")
3. Click "Shorten Now"
4. Copy your new shortened URL or QR code
5. Share it anywhere!

## 👥 Who It's For

- **Digital Marketers**: Track campaign performance with detailed analytics
- **Content Creators**: Share cleaner links across social platforms
- **Businesses**: Create branded short links for marketing materials
- **Developers**: Share API endpoints or repository URLs efficiently
- **General Users**: Anyone who needs to share long URLs in a manageable format

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- shadcn/ui for the exceptional component library
- Tailwind CSS for the utility-first styling
- React for the component-based architecture
- Lucide for the beautiful icon set
- Vite for the fast development experience

## 📬 Contact

Feel free to reach out if you have any questions or feedback:

- **Email**: [ksparth12@gmail.com](mailto:ksparth12@gmail.com)
- **GitHub**: [ksparth12](https://github.com/ksparth12)
- **LinkedIn**: [ksparth128](https://linkedin.com/in/ksparth128)

---

<div align="center">

**Made with ❤️ by [Parth Sharma](https://github.com/ksparth12)**

© 2025 SnapURL. Engineered by Parth Sharma.

</div>