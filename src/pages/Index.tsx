import Navigation from '@/components/Navigation';
import FloatingShapes from '@/components/FloatingShapes';
import URLShortener from '@/components/URLShortener';
import FeatureCards from '@/components/FeatureCards';
import StatsSection from '@/components/StatsSection';
import { Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-black dark:via-gray-950 dark:to-black transition-all duration-500">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">Shorten Links.</span>
                <br />
                <span className="text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Amplify Impact.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                Transform your long URLs into powerful, trackable short links with beautiful analytics and insights.
              </p>
            </div>

            {/* URL Shortening Form */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <URLShortener />
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400 mt-8 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Global CDN</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why choose <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">SnapURL</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of simplicity and power with our cutting-edge URL shortening platform.
            </p>
          </div>

          <FeatureCards />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <StatsSection />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 mt-24 relative overflow-hidden transition-colors duration-500 border-t dark:border-gray-800">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      <path d="M12 8l4 4" />
                      <path d="M8 12l4 4" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">SnapURL</span>
                  <span className="text-xs text-gray-400 -mt-1">Link Smarter</span>
                </div>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Making the web more accessible, one short link at a time. Designed for performance and reliability.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ksparth12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/ksparth128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:ksparth12@gmail.com"
                  className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">🔗</span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-400 dark:text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center">
                    → Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 dark:text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center">
                    → About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center">
                    → Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Developer Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code className="mr-2 w-5 h-5" />
                Developer
              </h3>
              <div className="space-y-3">
                <p className="text-gray-400 dark:text-gray-300">
                  <strong className="text-white flex items-center">
                    Parth Sharma
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse ml-2" />
                  </strong><br />
                  Final-Year CS Student<br />
                  Chandigarh University
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 dark:text-gray-300 text-center md:text-left">
                © 2025 SnapURL. Engineered by Parth Sharma.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-300">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </span>
                <span>Made in India 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
