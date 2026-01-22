import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export function Hero() {
  const productRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (productRef.current) {
        const rect = productRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = ((e.clientY - centerY) / 30) * -1;
        const rotateY = (e.clientX - centerX) / 30;

        setMousePosition({ x: rotateY, y: rotateX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToBuy = () => {
    const element = document.querySelector('#buy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-mint/30 rounded-full blur-3xl animate-blob-morph" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-peach/30 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cream/40 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-mint/20 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '-6s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-peach/20 rounded-full mb-6 animate-fade-in-up border border-peach/30">
              <span className="text-sm font-semibold text-peach-dark">Para mães que já tentaram simeticona, bolsas térmicas e ruído branco, mas continuam sem dormir.</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              <span className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Não é 'Gases'. É
              </span>
              <span className="block text-peach-dark animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Hiperestimulação Nervosa.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Descubra como desligar o 'Alarme Biológico' do seu bebê em 7 minutos usando apenas as pontas dos seus dedos.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              Esqueça a massagem genérica. Acesse o <strong>Protocolo de Ressonância Vagal</strong>: a única técnica que sincroniza o sistema nervoso do bebê para induzir o sono profundo, sem remédios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                onClick={scrollToBuy}
                size="lg"
                className="bg-mint hover:bg-mint-dark text-white rounded-full px-8 py-6 text-lg btn-magnetic group uppercase font-bold tracking-wide shadow-lg shadow-mint/30"
              >
                QUERO O FIM DO CHORO AGORA
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                Mais de 1.200 mães recuperaram suas noites de sono (Avaliação 4.9/5)
              </span>
            </div>
          </div>

          {/* Visual Representation of Method */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={productRef}
              className="relative animate-float-slow"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-mint/20 rounded-full blur-3xl scale-75 animate-pulse-soft" />

              {/* Method Icon Composition */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50 shadow-xl">
                <div className="text-center p-8">
                  <Sparkles className="w-24 h-24 text-mint mx-auto mb-4 animate-pulse-soft" />
                  <h3 className="font-display text-2xl text-mint-dark leading-tight">Protocolo<br />Ressonância Vagal</h3>
                  <p className="text-sm text-muted-foreground mt-2">Toque de Precisão</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-peach rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-white font-bold text-center text-xs leading-tight">Zero<br />Remédios</span>
              </div>

              <div className="absolute -bottom-2 -right-4 px-6 py-3 bg-white rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-bold text-mint-dark">Sono em 7 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
