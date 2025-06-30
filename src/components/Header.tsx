import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-real-estate-blue">
            Pedro de Toledo
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-real-estate-blue transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-real-estate-blue transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-real-estate-blue transition-colors"
            >
              Contato
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
