import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Truck, Shield, CreditCard, Gift, Clock } from 'lucide-react';

export function Buy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const guarantees = [
    { icon: Truck, text: 'Frete Grátis acima de R$ 150' },
    { icon: Shield, text: 'Garantia de 30 dias' },
    { icon: CreditCard, text: 'Pagamento Seguro' },
    { icon: Clock, text: 'Entrega Rápida' },
  ];

  return (
    <section id="buy" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-warm to-mint/10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            Compre Agora
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Pronto para ver seu{' '}
            <span className="text-mint-dark">bebê feliz</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para sua família e garanta o alívio do seu bebê hoje mesmo
          </p>
        </div>

        {/* Single Offer Card with Anchoring */}
        <div className={`max-w-lg mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-glow ring-2 ring-mint scale-[1.02]">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-foreground mb-2">Método Shantala Completo</h3>
              <p className="text-sm text-muted-foreground mb-6">O guia definitivo para o alívio do seu bebê</p>

              {/* Price Anchoring */}
              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="text-lg text-muted-foreground line-through">de R$ 97,00 por</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-mint-dark">R$ 57,00</span>
                  <span className="text-sm text-muted-foreground">à vista</span>
                </div>
                <span className="text-sm font-medium text-peach-dark">ou 11x de R$ 5,22</span>
              </div>

              <div className="inline-flex items-center gap-1 px-4 py-1 bg-mint/10 rounded-full">
                <span className="text-sm font-bold text-mint-dark">OFERTA POR TEMPO LIMITADO</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {[
                'Acesso Imediato ao Curso',
                'Técnica Passo a Passo',
                'Bônus: Guia do Sono',
                'Suporte via WhatsApp',
                'Garantia de 7 Dias'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              onClick={() => window.location.href = 'https://pay.kiwify.com.br/TvLt8mT'}
              className="w-full rounded-full py-8 text-xl font-bold btn-magnetic bg-mint hover:bg-mint-dark text-white shadow-lg hover:shadow-xl transition-all"
            >
              QUERO ALIVIAR A DOR DELE AGORA
            </Button>

            <div className="mt-4 text-center">
              <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                Compra 100% Segura via Kiwify
              </span>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {guarantees.map((guarantee, index) => (
            <div
              key={guarantee.text}
              className="flex items-center gap-3 justify-center p-4 bg-white/50 rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <guarantee.icon className="w-5 h-5 text-mint" />
              <span className="text-sm font-medium text-foreground">{guarantee.text}</span>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className={`bg-gradient-to-r from-mint to-mint-dark rounded-2xl p-6 text-white text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gift className="w-6 h-6" />
            <span className="font-display text-xl">Oferta Especial</span>
          </div>
          <p className="text-mint-light">
            Compre hoje e ganhe <span className="font-bold">10% de desconto</span> na sua próxima compra!
          </p>
        </div>
      </div>
    </section>
  );
}
