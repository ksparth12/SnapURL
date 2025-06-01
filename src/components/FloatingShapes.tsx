
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated background shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-6 h-6 border-2 border-purple-300/30 rotate-45 animate-pulse-glow"></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 border-2 border-pink-300/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 transform rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FloatingShapes;
