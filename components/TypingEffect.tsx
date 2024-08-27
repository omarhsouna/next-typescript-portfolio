"use client";
import React, { useState, useEffect } from 'react';
interface Props {
    texts :string[]
}
const TypingEffect = ({texts}:Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [selectedTextIndex, setSelectedTextIndex] = useState(0)
  const [index, setIndex] = useState(0);
  const text = texts[selectedTextIndex];

  useEffect(() => {
    if(selectedTextIndex === texts.length){
        setDisplayedText("");
        setSelectedTextIndex(0);
        setIndex(0);
        return;
    }
      const timeoutId = setTimeout(() => {
         if(index === text.length){
        setIndex(0);
        setDisplayedText("");
        setSelectedTextIndex(selectedTextIndex=> selectedTextIndex+1);
      }
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
      }, 150);
      return () => clearTimeout(timeoutId);
  }, [index, selectedTextIndex, text, texts]);

  return (
    <div className="text-lg font-semibold text-white text-[44px] lg:text-8xl">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;