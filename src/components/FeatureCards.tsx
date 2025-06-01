
import { ArrowRight, QrCode, ChartBar } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: ArrowRight,
      title: 'Instant Shortening',
      description: 'Convert long URLs to short, memorable links in seconds',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0s',
    },
    {
      icon: ChartBar,
      title: 'Advanced Analytics',
      description: 'Track clicks, locations, and performance metrics',
      gradient: 'from-blue-500 to-purple-500',
      delay: '0.2s',
    },
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Generate QR codes for easy sharing and access',
      gradient: 'from-pink-500 to-orange-500',
      delay: '0.4s',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="group relative p-6 glass dark:dark-glass rounded-2xl border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-purple-900/30 animate-fade-in-up shadow-lg dark:shadow-purple-900/20"
            style={{ animationDelay: feature.delay }}
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              {feature.description}
            </p>
            
            {/* Arrow indicator */}
            <div className="flex items-center mt-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
              <span className="text-sm font-medium mr-2">Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
