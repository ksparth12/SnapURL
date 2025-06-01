
import { useState } from 'react';
import { Copy, QrCode, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showCustomAlias, setShowCustomAlias] = useState(false);

  const generateShortCode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleShorten = async () => {
    if (!url) {
      toast({
        title: "Please enter a URL",
        description: "URL field cannot be empty",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const shortCode = customAlias || generateShortCode();
    const shortUrl = `snap.ly/${shortCode}`;
    setShortenedUrl(shortUrl);
    
    // Save to localStorage (simulated database)
    const savedUrls = JSON.parse(localStorage.getItem('snapurl_links') || '[]');
    const newLink = {
      id: Date.now(),
      original: url,
      shortened: shortUrl,
      clicks: Math.floor(Math.random() * 100),
      createdAt: new Date().toISOString(),
    };
    savedUrls.unshift(newLink);
    localStorage.setItem('snapurl_links', JSON.stringify(savedUrls.slice(0, 5))); // Keep only 5 recent
    
    setIsLoading(false);
    
    toast({
      title: "URL shortened successfully!",
      description: "Your shortened URL is ready to use",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${shortenedUrl}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      
      toast({
        title: "Copied to clipboard!",
        description: "The shortened URL has been copied",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass dark:dark-glass rounded-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl dark:shadow-purple-900/20">
        <div className="space-y-6">
          {/* Main URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Enter your long URL
            </label>
            <div className="relative">
              <Input
                type="url"
                placeholder="https://example.com/very-long-url-that-needs-shortening"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-14 text-lg bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/20 focus:border-purple-400 focus:ring-purple-400 dark:focus:border-purple-500 dark:focus:ring-purple-500 rounded-xl dark:text-white dark:placeholder:text-gray-400"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-400 dark:text-gray-500">
                {url.length}/2048
              </div>
            </div>
          </div>

          {/* Custom Alias Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowCustomAlias(!showCustomAlias)}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
            >
              {showCustomAlias ? 'Hide' : 'Add'} custom alias
            </button>
            {showCustomAlias && (
              <span className="text-xs text-gray-500 dark:text-gray-400">Optional</span>
            )}
          </div>

          {/* Custom Alias Input */}
          {showCustomAlias && (
            <div className="space-y-2 animate-fade-in-up">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Custom alias (optional)
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-l-xl border border-r-0 dark:border-gray-600">
                  snap.ly/
                </span>
                <Input
                  placeholder="custom-name"
                  value={customAlias}
                  onChange={(e) => setCustomAlias(e.target.value)}
                  className="rounded-l-none bg-white/50 dark:bg-white/5 border-white/30 dark:border-white/20 focus:border-purple-400 focus:ring-purple-400 dark:focus:border-purple-500 dark:focus:ring-purple-500 dark:text-white dark:placeholder:text-gray-400"
                />
              </div>
            </div>
          )}

          {/* Shorten Button */}
          <Button
            onClick={handleShorten}
            disabled={isLoading}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] dark:shadow-purple-900/20"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Shortening...</span>
              </div>
            ) : (
              'Shorten Now'
            )}
          </Button>

          {/* Result */}
          {shortenedUrl && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Your shortened URL:</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      https://{shortenedUrl}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleCopy}
                      className="hover:bg-green-100 dark:hover:bg-green-800/30 dark:border-green-700 dark:text-green-400"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:bg-green-100 dark:hover:bg-green-800/30 dark:border-green-700 dark:text-green-400"
                    >
                      <QrCode className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default URLShortener;
