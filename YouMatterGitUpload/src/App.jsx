import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import BlogsPage from './pages/BlogsPage';
import ExercisesPage from './pages/ExercisesPage.jsx';

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/chat';

  return (
    <div className="min-h-screen bg-[#FDFCF9] dark:bg-[#1E1B2E] text-[#2E2E2E] dark:text-[#EDE9FE] transition-colors duration-300">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
