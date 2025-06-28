import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-real-estate-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="text-sm opacity-90">
              © 2025 - Pedro Natal Paes de Toledo - Avaliação de Imóveis
            </p>
            <p className="text-sm opacity-90">
              Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs opacity-75">
            <span>CRECISP 237958-F</span>
            <span>|</span>
            <span>CNAI 39817</span>
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-xs opacity-60">
              Corretor de Imóveis e Perito Avaliador
            </p>
            <p className="text-[10px] font-mono tracking-tight" style={{ fontFamily: 'monospace, "Courier New", Courier, monospace', fontSize: '10px', letterSpacing: '0.5px' }}>
              Desenvolvido por @AdhemarMolon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
