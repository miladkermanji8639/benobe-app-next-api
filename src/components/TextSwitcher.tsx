'use client';

import { useState, useEffect } from 'react';

interface TextSwitcherProps {
  texts: string[];
  interval?: number;
}

const TextSwitcher: React.FC<TextSwitcherProps> = ({ texts, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    const switchText = setInterval(() => {
      setFadeState('fadeOut');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeState('fadeIn');
      }, 300);
    }, interval);

    return () => clearInterval(switchText);
  }, [texts.length, interval]);

  return (
    <div className="flex flex-row items-center justify-center gap-2 text-lg text-black xl:gap-4 xl:text-4xl xl:text-white">
      <p>نام</p>
      <div
        className={`w-[75px] text-center font-bold text-primary transition-opacity duration-300 xl:w-[125px] ${fadeState === 'fadeIn' ? 'animate-fadeIn' : 'animate-fadeOut'}`}
      >
        {texts[currentIndex]}
      </div>
      <p>را جستجو کنید</p>
    </div>
  );
};

export default TextSwitcher;
