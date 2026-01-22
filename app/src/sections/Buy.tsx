import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Truck, Shield, CreditCard, Gift, Clock, Headphones, BookOpen, Video } from 'lucide-react';

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
    { icon: Truck, text: 'Acesso Imediato' },
    { icon: Shield, text: 'Garantia de 7 dias' },
    { icon: CreditCard, text: 'Pagamento Seguro' },
    { icon: Clock, text: 'Suporte 24h' },
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
            Oferta Especial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            O que você recebe ao <br />
            <span className="text-mint-dark">desbloquear o Protocolo Hoje</span>
          </h2>
        </div>

        {/* Single Offer Card with Anchoring */}
        <div className={`max-w-lg mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-glow ring-2 ring-mint scale-[1.02]">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-foreground mb-2">Protocolo Ressonância Vagal (Completo)</h3>

              <div className="text-sm text-muted-foreground mb-6 space-y-1">
                <p className="line-through">Consulta especialista sono: R$ 400,00</p>
                <p className="line-through">Um mês de remédios: R$ 150,00</p>
                <p className="font-medium text-mint-dark">Sua sanidade mental: Inestimável</p>
              </div>

              {/* Price Anchoring */}
              <div className="flex flex-col items-center gap-2 mb-4">
                <span className="text-lg text-muted-foreground">Hoje por apenas:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-mint-dark">11x R$ 5,22</span>
                </div>
                <span className="text-sm font-medium text-peach-dark">ou R$ 47,00 à vista</span>
              </div>

              <div className="inline-flex items-center gap-1 px-4 py-1 bg-mint/10 rounded-full">
                <span className="text-sm font-bold text-mint-dark">OFERTA POR TEMPO LIMITADO</span>
              </div>
            </div>

            {/* Features (Stack) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center flex-shrink-0 mt-1">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-foreground"><strong>Módulo Principal:</strong> O Guia Visual do PRVT (Vídeos de 3 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-foreground"><strong>Bônus 1:</strong> O Manual do "SOS Madrugada" (O que fazer quando nada funciona)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center flex-shrink-0 mt-1">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-foreground"><strong>Bônus 2:</strong> Áudios de Frequência Binaural (Para acalmar a mãe)</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button
              onClick={() => window.location.href = 'https://pay.kiwify.com.br/TvLt8mT'}
              className="w-full rounded-full py-8 text-xl font-bold btn-magnetic bg-mint hover:bg-mint-dark text-white shadow-lg hover:shadow-xl transition-all uppercase"
            >
              QUERO O FIM DO CHORO AGORA
            </Button>

            <div className="mt-4 text-center">
              <span className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                Compra 100% Segura via Kiwify
              </span>
            </div>
          </div>
        </div>

        {/* Guarantees - Updated with "Night Silent Challenge" */}
        <div className={`max-w-4xl mx-auto mb-12 bg-white/60 p-8 rounded-3xl border border-mint/20 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-display text-2xl text-foreground mb-4">O Desafio da 'Noite Silenciosa' (Garantia de 7 Dias)</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            "Eu assumo o risco. Aplique o protocolo hoje à noite. Se o seu bebê não se acalmar e dormir mais rápido do que com qualquer outro método que você já tentou, envie um e-mail. Devolvemos 100% do seu dinheiro. Sem letras miúdas. <strong className="text-mint-dark">Ou você dorme, ou é de graça.</strong>"
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            {guarantees.map((guarantee, index) => (
              <div
                key={guarantee.text}
                className="flex items-center gap-2 justify-center p-2 rounded-lg"
              >
                <guarantee.icon className="w-4 h-4 text-mint" />
                <span className="text-xs font-medium text-foreground">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
