import React from 'react';
import { Sparkles, Star, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="http://nav.corndreams.ink/bless/newyear/bj.avif"
          alt="Chinese New Year Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/10" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-bounce bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            元旦快乐
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur opacity-30 animate-pulse" />
        </div>
        <p className="text-xl md:text-2xl mb-8 text-red-200 animate-pulse">
          Happy New Year • 2025
        </p>
        <div className="flex justify-center gap-4 text-red-200 text-yellow-400">
          <Sparkles className="w-8 h-8 animate-spin" />
          <Star className="w-8 h-8 animate-pulse" />
          <Heart className="w-8 h-8 animate-bounce" />
        </div>
      </div>
    </div>
  );
}