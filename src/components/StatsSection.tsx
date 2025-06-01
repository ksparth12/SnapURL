
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    links: 0,
    clicks: 0,
    users: 0,
  });

  const finalStats = {
    links: 12847,
    clicks: 45230,
    users: 2847,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        links: Math.floor(finalStats.links * progress),
        clicks: Math.floor(finalStats.clicks * progress),
        users: Math.floor(finalStats.users * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900 text-white py-16 mt-24 rounded-3xl mx-4 transition-all duration-500 hover:scale-105 shadow-2xl dark:shadow-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in-up">
          Trusted by developers worldwide
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2 animate-fade-in-up hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold">
              {formatNumber(stats.links)}+
            </div>
            <div className="text-xl text-purple-100 dark:text-purple-200">
              Links Shortened
            </div>
          </div>
          
          <div className="space-y-2 animate-fade-in-up hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold">
              {formatNumber(stats.clicks)}+
            </div>
            <div className="text-xl text-purple-100 dark:text-purple-200">
              Total Clicks
            </div>
          </div>
          
          <div className="space-y-2 animate-fade-in-up hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold">
              {formatNumber(stats.users)}+
            </div>
            <div className="text-xl text-purple-100 dark:text-purple-200">
              Happy Users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
