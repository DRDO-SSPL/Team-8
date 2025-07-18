import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const BreathingModal = ({ isOpen, onClose, breathingType = '4-4-6' }) => {
  const [phase, setPhase] = useState('inhale');
  const [count, setCount] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsActive(false);
      setPhase('inhale');
      setCount(4);
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > 1) return prev - 1;

        if (phase === 'inhale') {
          setPhase('hold');
          return 4;
        } else if (phase === 'hold') {
          setPhase('exhale');
          return breathingType === '4-4-6' ? 6 : 4;
        } else if (phase === 'exhale') {
          if (breathingType === '4-4-4-4') {
            setPhase('hold-empty');
            return 4;
          } else {
            setPhase('inhale');
            return 4;
          }
        } else if (phase === 'hold-empty') {
          setPhase('inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase, breathingType]);

  const startBreathing = () => setIsActive(true);
  const stopBreathing = () => setIsActive(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-[#FDFCF9] to-[#F3F0FF] dark:from-[#1E1B2E] dark:to-[#2C2542] rounded-3xl p-12 max-w-lg w-full text-center relative shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <X size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white" />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2E2E2E] dark:text-[#EDE9FE] mb-3">Breathe & Center</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Follow the gentle rhythm to find your calm</p>
        </div>

        <div className="relative flex items-center justify-center mb-12">
          <div 
            className={`absolute w-80 h-80 rounded-full transition-all duration-1000 ${
              isActive && phase === 'inhale' ? 'scale-110 opacity-30' : 
              isActive && phase === 'exhale' ? 'scale-90 opacity-20' : 
              'scale-100 opacity-25'
            } bg-gradient-to-r from-[#A78BFA] to-[#D946EF] dark:from-[#C4B5FD] to-[#F472B6]`}
          />
          
          <div 
            className={`relative w-64 h-64 rounded-full border-4 border-[#A78BFA] dark:border-[#C4B5FD] transition-all duration-1000 flex items-center justify-center shadow-2xl ${
              isActive && phase === 'inhale' ? 'scale-125 bg-gradient-to-br from-[#A78BFA]/20 to-[#D946EF]/20' : 
              isActive && phase === 'exhale' ? 'scale-75 bg-gradient-to-br from-[#A78BFA]/10 to-[#D946EF]/10' : 
              'scale-100 bg-gradient-to-br from-[#A78BFA]/15 to-[#D946EF]/15'
            }`}
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-[#A78BFA] dark:text-[#C4B5FD] mb-2 tabular-nums">
                {count}
              </div>
              <div className="text-lg text-[#2E2E2E] dark:text-[#EDE9FE] capitalize font-medium tracking-wide">
                {phase === 'hold' ? 'Hold' : phase === 'hold-empty' ? 'Hold Empty' : phase === 'inhale' ? 'Breathe In' : 'Breathe Out'}
              </div>
            </div>

            {isActive && (
              <>
                <div className="absolute top-4 right-8 w-2 h-2 bg-[#A78BFA] dark:bg-[#C4B5FD] rounded-full animate-ping opacity-60" />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#D946EF] dark:bg-[#F472B6] rounded-full animate-pulse opacity-50" />
                <div className="absolute top-12 left-4 w-1 h-1 bg-[#A78BFA] dark:bg-[#C4B5FD] rounded-full animate-bounce opacity-40" />
              </>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {!isActive ? (
            <button
              onClick={startBreathing}
              className="w-full bg-gradient-to-r from-[#A78BFA] to-[#9333EA] dark:from-[#C4B5FD] dark:to-[#A78BFA] hover:from-[#9333EA] hover:to-[#7C3AED] text-white dark:text-[#1E1B2E] py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Begin Breathing Exercise
            </button>
          ) : (
            <button
              onClick={stopBreathing}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Pause Exercise
            </button>
          )}
          
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {breathingType === '4-4-6' ? (
                <>
                  <span className="font-medium">Breathe in</span> for 4 seconds • <span className="font-medium">Hold</span> for 4 • <span className="font-medium">Breathe out</span> for 6
                </>
              ) : (
                <>
                  <span className="font-medium">Breathe in</span> for 4 • <span className="font-medium">Hold</span> for 4 • <span className="font-medium">Breathe out</span> for 4 • <span className="font-medium">Hold empty</span> for 4
                </>
              )}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Let your body find its natural rhythm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreathingModal;
