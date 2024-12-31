import React from 'react';
import { Sparkles } from 'lucide-react';

export function FireworkButton() {
  return (
    <button
      className="fixed bottom-24 right-8 bg-gradient-to-r from-red-600 to-yellow-500 
                 text-white px-6 py-3 rounded-full shadow-lg 
                 hover:scale-105 transition-transform duration-300
                 flex items-center gap-2 group animate-bounce"
    >
      <Sparkles className="w-5 h-5 group-hover:animate-spin" />
      <a href='./newyear.html'>放烟花</a>
    </button>
  );
}