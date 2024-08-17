"use client";
import React, { useState, useEffect } from 'react';
interface Props {
    texts :string[]
}
const TypingEffect = ({texts}:Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [selectedText, setSelectedText] = useState(0)
  const [index, setIndex] = useState(0);
  const text = texts[selectedText];
  useEffect(() => {
    if(selectedText === texts.length){
        setDisplayedText("");
        setSelectedText(0);
        setIndex(0);
        return;
    }
    if(index === text.length){
        setIndex(0);
        setDisplayedText("");
        setSelectedText(selectedText=> selectedText+1);
        return;  
      }
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [index, selectedText, text]);

  return (
    <div className="text-lg font-semibold text-white text-[44px] lg:text-8xl">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;