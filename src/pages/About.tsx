
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Mail, Code, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-black dark:via-gray-950 dark:to-black transition-all duration-500">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text dark:gradient-text-dark">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know the developer behind SnapURL
            </p>
          </div>

          <div className="space-y-16">
            {/* Personal Introduction */}
            <section className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fade-in-up hover:scale-105 transition-all duration-500 shadow-lg dark:shadow-purple-900/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  <span className="text-2xl">👋</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hello!</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                <strong className="text-gray-900 dark:text-white">Hello! I'm Parth Sharma</strong>, a passionate and driven Final-Year Computer Science Student at Chandigarh University, on the cusp of launching my career as a Software Engineer.
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="mailto:ksparth12@gmail.com"
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-right"
                >
                  <Mail className="w-4 h-4" />
                  <span>ksparth12@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/ksparth128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>ksparth128</span>
                </a>
                <a
                  href="https://github.com/ksparth12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-right"
                  style={{ animationDelay: '0.4s' }}
                >
                  <Github className="w-4 h-4" />
                  <span>ksparth12</span>
                </a>
              </div>
            </section>

            {/* My Journey Section */}
            <section className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fade-in-up hover:scale-105 transition-all duration-500 shadow-lg dark:shadow-purple-900/20" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">💻 My Journey</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in <strong className="text-gray-900 dark:text-white">C++, Data Structures & Algorithms (DSA), and Full-Stack Development</strong>, I thrive on solving complex problems and building efficient, scalable solutions. My academic journey has equipped me with hands-on experience in both frontend and backend technologies, and I'm constantly exploring new frameworks and tools to stay ahead in the ever-evolving tech landscape.
              </p>
            </section>

            {/* What I Do Section */}
            <section className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fade-in-up hover:scale-105 transition-all duration-500 shadow-lg dark:shadow-purple-900/20" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🚀 What I Do</h2>
              </div>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Develop clean, optimized code with a focus on performance and usability.</span>
                </li>
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Build full-stack web applications using modern technologies.</span>
                </li>
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Solve algorithmic challenges to sharpen my problem-solving skills.</span>
                </li>
                <li className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Collaborate on projects that bridge theory and real-world impact.</span>
                </li>
              </ul>
            </section>

            {/* Looking Ahead Section */}
            <section className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fade-in-up hover:scale-105 transition-all duration-500 shadow-lg dark:shadow-purple-900/20" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(234,179,8,0.6)]">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔍 Looking Ahead</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm eager to contribute my skills to innovative tech projects, learn from industry experts, and grow as a versatile developer. Whether it's internships, open-source contributions, or networking with fellow tech enthusiasts—I'm always open to new opportunities!
              </p>
            </section>

            {/* Let's Connect Section */}
            <section className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fade-in-up hover:scale-105 transition-all duration-500 shadow-lg dark:shadow-purple-900/20" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mr-4 shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🌟 Let's Connect!</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                If you're as passionate about technology as I am, let's collaborate, share ideas, or just chat about the latest in tech!
              </p>
              
              {/* Call to Action */}
              <div className="text-center">
                <div className="inline-flex space-x-4">
                  <a
                    href="mailto:ksparth12@gmail.com"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-bounce-in"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
