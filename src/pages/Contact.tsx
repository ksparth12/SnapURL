
import Navigation from '@/components/Navigation';
import { Mail, Github, Linkedin, Clock, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-black dark:via-gray-950 dark:to-black transition-colors duration-500">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text dark:gradient-text-dark">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to connect? Reach out through any of these channels and let's start a conversation!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-scale-in">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:ksparth12@gmail.com"
                      className="text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-300"
                    >
                      ksparth12@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/ksparth128"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-300"
                    >
                      ksparth128
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(75,85,99,0.6)]">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub</h3>
                    <a 
                      href="https://github.com/ksparth12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-300"
                    >
                      ksparth12
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-bounce-in">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Response Time</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond to emails within 24 hours. For urgent matters, LinkedIn messages are usually faster!
                </p>
              </div>

              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Location</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Based in Chandigarh, India 🇮🇳<br />
                  Available for remote opportunities worldwide
                </p>
              </div>

              <div className="glass dark:dark-glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.6)]">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Let's Collaborate</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Open to discussing internships, projects, and exciting opportunities in tech. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-purple-900/20 animate-float">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Connect?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Choose your preferred way to reach out, and I'll get back to you soon!
              </p>
              <a
                href="mailto:ksparth12@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
