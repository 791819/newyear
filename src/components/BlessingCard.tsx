import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BlessingCardProps {
  Icon: LucideIcon;
  character: string;
  blessing: string;
}

export function BlessingCard({ Icon, character, blessing }: BlessingCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-gradient-to-b from-red-900/50 to-red-950/50 backdrop-blur-lg p-8 rounded-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
        <div className="absolute inset-0 bg-red-500/5 rounded-lg" />
        <Icon className="w-12 h-12 mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">{character}</h2>
        <p className="text-red-200 group-hover:text-white transition-colors duration-300">{blessing}</p>
      </div>
    </div>
  );
}