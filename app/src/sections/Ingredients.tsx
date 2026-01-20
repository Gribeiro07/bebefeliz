import { useEffect, useRef, useState } from 'react';
import { Droplet, Leaf, Sparkles, Shield, Heart, Star } from 'lucide-react';

export function Ingredients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);

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

  const ingredients = [
    {
      icon: Droplet,
      name: 'Óleo de Funcho',
      description: 'Ajudada na digestão e reduz gases intestinais',
      benefit: 'Alívio das cólicas',
    },
    {
      icon: Leaf,
      name: 'Extrato de Camomila',
      description: 'Propriedades calmantes e anti-inflamatórias',
      benefit: 'Relaxamento natural',
    },
    {
      icon: Sparkles,
      name: 'Óleo de Erva-Doce',
      description: 'Facilita a digestão e alivia desconfortos',
      benefit: 'Digestão suave',
    },
    {
      icon: Shield,
      name: 'Probióticos',
      description: 'Equilibram a flora intestinal do bebê',
      benefit: 'Sistema imune',
    },
    {
      icon: Heart,
      name: 'Vitamina D',
      description: 'Essencial para o desenvolvimento saudável',
      benefit: 'Desenvolvimento',
    },
    {
      icon: Star,
      name: 'Magnésio',
      description: 'Auxilia no funcionamento do sistema nervoso',
      benefit: 'Bem-estar geral',
    },
  ];

  return (
    <section id="ingredients" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-warm to-mint/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            Composição
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Ingredientes{' '}
            <span className="text-mint-dark">Naturais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada componente foi cuidadosamente selecionado para garantir máxima segurança e eficácia
          </p>
        </div>

        {/* Ingredients Grid - Molecular Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveNode(index)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={`relative bg-white rounded-2xl p-6 shadow-soft transition-all duration-300 ${
                activeNode === index ? 'shadow-glow scale-[1.02]' : ''
              }`}>
                {/* Connection lines (visual decoration) */}
                {activeNode === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute top-1/2 right-0 w-8 h-px bg-gradient-to-r from-mint/50 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-b from-mint/50 to-transparent" />
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeNode === index ? 'bg-mint scale-110' : 'bg-mint/10'
                }`}>
                  <ingredient.icon className={`w-7 h-7 transition-colors duration-300 ${
                    activeNode === index ? 'text-white' : 'text-mint-dark'
                  }`} />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-lg text-foreground mb-1">{ingredient.name}</h3>
                <p className="text-sm text-mint-dark font-medium mb-2">{ingredient.benefit}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{ingredient.description}</p>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-mint/5 transition-opacity duration-300 -z-10 ${
                  activeNode === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-4">
            Livre de conservantes, corantes e aromatizantes artificiais
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft">
            <Shield className="w-5 h-5 text-mint" />
            <span className="text-sm font-medium text-foreground">Testado e aprovado dermatologicamente</span>
          </div>
        </div>
      </div>
    </section>
  );
}
