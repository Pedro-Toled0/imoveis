import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-real-estate-blue to-blue-700 p-1">
              <div className="w-full h-full rounded-2xl bg-real-estate-light-gray flex items-center justify-center overflow-hidden">
                <img
                src="/imagens/PedroFoto.png"
                alt="Foto do especialista"
                className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-real-estate-gold text-black px-4 py-2 rounded-full font-semibold text-sm">
              CRECI & CNAI
              </div>
            </div>
            </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-real-estate-blue mb-4">
                Um Especialista ao seu Dispor
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Com anos de experiência no mercado imobiliário de São Carlos, ofereço um serviço 
                de avaliação de imóveis pautado pela ética, precisão técnica e conhecimento de mercado. 
                Garanta a segurança e o valor justo para o seu patrimônio.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-real-estate-blue mb-4">
                Credenciais Profissionais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 border-2 border-real-estate-blue/20 hover:border-real-estate-blue/40 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-real-estate-blue">CRECISP</div>
                    <div className="text-real-estate-gold font-semibold">237958-F</div>
                  </div>
                </Card>
                <Card className="p-4 border-2 border-real-estate-blue/20 hover:border-real-estate-blue/40 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-real-estate-blue">CNAI</div>
                    <div className="text-real-estate-gold font-semibold">39817</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-real-estate-blue">
                Serviços Especializados
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-real-estate-gold rounded-full"></span>
                  Avaliação para venda de imóveis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-real-estate-gold rounded-full"></span>
                  Processos de partilha e inventário
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-real-estate-gold rounded-full"></span>
                  Laudos técnicos especializados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
