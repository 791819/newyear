import React from 'react';
import { Gift, Heart, Calendar } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { BlessingCard } from './components/BlessingCard';
import { Footer } from './components/Footer';
import { ParticleEffect } from './components/ParticleEffect';
import { FireworkButton } from './components/buttons/FireworkButton';

function App() {
  const blessings = [
    {
      Icon: Gift,
      character: '福',
      blessing: '愿您新的一年福星高照，万事如意'
    },
    {
      Icon: Calendar,
      character: '禄',
      blessing: '祝您新年事业蒸蒸日上，前程似锦'
    },
    {
      Icon: Heart,
      character: '寿',
      blessing: '愿您新的一年身体健康，幸福安康'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-950 text-white overflow-hidden">
      <HeroSection />
      <ParticleEffect />

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blessings.map((blessing, index) => (
          <BlessingCard key={index} {...blessing} />
        ))}
      </div>
      <FireworkButton />
      <Footer />
    </div>
  );
}

export default App;