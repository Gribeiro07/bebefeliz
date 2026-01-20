import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/10 rounded-full mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-mint" />
              <span className="text-sm font-medium text-mint-dark">100% Natural</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6">
              <span className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Alívio Natural
              </span>
              <span className="block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                para seu{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-mint-dark">Bebê</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-mint/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 L100,12 L0,12 Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Acabe com a cólica e traga de volta o sorriso da sua família.
              <span className="font-script text-peach-dark text-2xl inline-block ml-1">Naturalmente.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button
                onClick={scrollToBuy}
                size="lg"
                className="bg-mint hover:bg-mint-dark text-white rounded-full px-8 py-6 text-lg btn-magnetic group"
              >
                Comprar Agora
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full px-8 py-6 text-lg border-2 border-mint/30 hover:border-mint hover:bg-mint/5"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-mint/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-mint" />
                </div>
                <span>Recomendado por Pediatras</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-peach/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-peach-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span>100% Seguro</span>
              </div>
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
                  <Heart className="w-24 h-24 text-peach mx-auto mb-4 animate-pulse-soft" />
                  <h3 className="font-display text-2xl text-mint-dark">Método<br />Shantala</h3>
                  <p className="text-sm text-muted-foreground mt-2">Toque de Amor</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-peach rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Heart className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-2 -right-4 px-4 py-2 bg-white rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-bold text-mint-dark">Alívio Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
