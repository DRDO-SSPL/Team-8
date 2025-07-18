import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, BookOpen, Heart, Shield, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF9] dark:bg-[#1E1B2E] transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-[#EDE9FE] leading-tight mb-6">
                Your feelings are{' '}
                <span className="text-[#A78BFA] dark:text-[#D8B4FE]">valid</span>.{' '}
                Your mind{' '}
                <span className="text-[#A78BFA] dark:text-[#D8B4FE]">matters</span>.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Start your healing journey with supportive conversations and mindful resources designed for your peace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/chat"
                  className="bg-[#A78BFA] hover:bg-[#9333EA] text-white py-4 px-8 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Start Chatting</span>
                </Link>
                <Link
                  to="/blogs"
                  className="bg-transparent border-2 border-[#A78BFA] dark:border-[#D8B4FE] text-[#A78BFA] dark:text-[#D8B4FE] hover:bg-[#A78BFA] hover:text-white dark:hover:bg-[#D8B4FE] dark:hover:text-gray-900 py-4 px-8 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>Explore Blogs</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#A78BFA]/20 to-[#D946EF]/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-[#A78BFA] to-[#D946EF] rounded-full flex items-center justify-center animate-pulse">
                    <Heart size={80} className="text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FEF3C7] dark:bg-[#FBCFE8] rounded-full flex items-center justify-center animate-bounce">
                  <Heart size={24} className="text-[#A78BFA]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#D1FAE5] dark:bg-[#6EE7B7] rounded-full flex items-center justify-center animate-bounce delay-300">
                  <Heart size={20} className="text-[#A78BFA]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-[#EDE9FE] mb-12">
            Why Choose YouMatter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#FDFCF9] dark:bg-[#1E1B2E] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#A78BFA]/10 dark:bg-[#D8B4FE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#A78BFA] dark:text-[#D8B4FE]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EDE9FE] mb-2">Safe Space</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your conversations are private and judgment-free. Share your thoughts safely.
              </p>
            </div>
            <div className="text-center p-6 bg-[#FDFCF9] dark:bg-[#1E1B2E] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#A78BFA]/10 dark:bg-[#D8B4FE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-[#A78BFA] dark:text-[#D8B4FE]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EDE9FE] mb-2">Compassionate AI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI adapts to your emotional needs with friend, listener, and advice modes.
              </p>
            </div>
            <div className="text-center p-6 bg-[#FDFCF9] dark:bg-[#1E1B2E] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#A78BFA]/10 dark:bg-[#D8B4FE]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-[#A78BFA] dark:text-[#D8B4FE]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EDE9FE] mb-2">Expert Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access curated wellness articles and guided exercises from mental health experts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

