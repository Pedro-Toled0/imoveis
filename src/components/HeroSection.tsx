import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = '5516997527532';
    const message = 'Olá! Gostaria de solicitar uma avaliação de imóvel.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-real-estate-blue to-blue-800 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaDE0VjM0aDEwdjE0SDQ2djEwSDM2VjQ0SDI2VjM0aDEweiIvPgo8L2c+CjwvZz4KPHN2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Avaliação de Imóveis
            <span className="block text-real-estate-gold">Precisa e Confiável</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Por <strong>Pedro de Toledo</strong>, corretor e avaliador de imóveis credenciado pelo 
            <span className="text-real-estate-gold font-semibold"> CRECISP</span> e 
            <span className="text-real-estate-gold font-semibold"> CNAI</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={openWhatsApp}
              className="bg-real-estate-gold hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📱 Solicite sua Avaliação pelo WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-real-estate-gold rounded-full"></span>
              <span>CRECISP 237958-F</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-real-estate-gold rounded-full"></span>
              <span>CNAI 39817</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
