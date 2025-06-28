import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
// 1. A imagem do QR Code é importada aqui
import qrCodeZap from '../assets/imagens/QrCodeZAP.png';

const ContactSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = '5516997527532';
    const message = 'Olá! Gostaria de solicitar uma avaliação de imóvel.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:pedro.toledo@creci.org.br';
  };

  const openPhone = () => {
    window.location.href = 'tel:+5516997527532';
  };

  const openFacebook = () => {
    // Replace with actual Facebook profile URL
    window.open('https://www.facebook.com/profile.php?id=100071185627021', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-real-estate-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-real-estate-blue mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Solicite sua avaliação ou tire suas dúvidas. Estou aqui para ajudar!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-real-estate-blue">WhatsApp / Telefone</h3>
                    <p className="text-gray-600">(16) 99752-7532</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        onClick={openWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1"
                      >
                        WhatsApp
                      </Button>
                      <Button 
                        onClick={openPhone}
                        variant="outline"
                        className="text-xs px-3 py-1"
                      >
                        Ligar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-real-estate-blue">E-mail</h3>
                    <p className="text-gray-600">pedro.toledo@creci.org.br</p>
                    <Button 
                      onClick={openEmail}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 mt-2"
                    >
                      Enviar E-mail
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">f</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-real-estate-blue">Facebook</h3>
                    <p className="text-gray-600">Siga-me nas redes sociais</p>
                    <Button 
                      onClick={openFacebook}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 mt-2"
                    >
                      Visitar
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
              {/* QR Code */}
              <div className="flex flex-col items-center justify-center">
                <Card className="p-8 text-center">
                  {/* A tag <img> substitui o div anterior */}
                  <img 
                    // 2. A variável importada é usada aqui
                    src={qrCodeZap} 
                    alt="QR Code para contato de Pedro de Toledo" 
                    className="w-48 h-48 rounded-lg mb-4 mx-auto"
                  />
                  <h3 className="font-semibold text-real-estate-blue mb-2">
                    QR Code
                  </h3>
                  <p className="text-sm text-gray-600">
                    Aponte sua câmera e salve meu contato!
                  </p>
                </Card>
              </div>
          </div>

          {/* Main CTA */}
          <div className="bg-real-estate-blue text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para uma Avaliação Profissional?
            </h3>
            <p className="mb-6 opacity-90">
              Entre em contato agora e garanta o valor justo do seu imóvel
            </p>
            <Button 
              onClick={openWhatsApp}
              className="bg-real-estate-gold hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-full"
            >
              Solicitar Avaliação via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;