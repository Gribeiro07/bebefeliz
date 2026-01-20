import { useEffect, useRef, useState } from 'react';
import { Droplets, Clock, ShieldCheck, Leaf, Award, Heart } from 'lucide-react';

export function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

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

  const benefits = [
    {
      icon: Clock,
      title: 'Alívio Rápido',
      subtitle: 'Em apenas 15 minutos',
      description: 'Nossa fórmula age rapidamente no sistema digestivo do bebê, proporcionando alívio imediato da dor e desconforto causados pela cólica.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      subtitle: 'Ingredientes seguros',
      description: 'Composto exclusivamente por ingredientes naturais cuidadosamente selecionados, sem adição de químicos ou componentes artificiais.',
      color: 'bg-peach',
      lightColor: 'bg-peach/10',
    },
    {
      icon: ShieldCheck,
      title: 'Totalmente Seguro',
      subtitle: 'Sem contraindicações',
      description: 'Livre de açúcar, álcool e conservantes. Testado e aprovado por pediatras, garantindo total segurança para o seu bebê.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Award,
      title: 'Recomendado',
      subtitle: 'Por especialistas',
      description: 'Aprovado e recomendado por mais de 500 pediatras em todo o Brasil. Confiado por milhares de famílias.',
      color: 'bg-peach',
      lightColor: 'bg-peach/10',
    },
    {
      icon: Droplets,
      title: 'Fácil Aplicação',
      subtitle: 'Prático e rápido',
      description: 'Com conta-gotas preciso, basta adicionar à mamadeira ou diretamente na boca do bebê. Simples e prático para os pais.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Heart,
      title: 'Bem-Estar Total',
      subtitle: 'Sono tranquilo',
      description: 'Além de aliviar a cólica, promove um sono mais tranquilo e reparador, trazendo mais disposição para o bebê.',
      color: 'bg-peach',
      lightColor: 'bg-peach/10',
    },
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cream/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            Benefícios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Por que escolher o{' '}
            <span className="text-mint-dark">Bebê Feliz</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa fórmula única oferece múltiplos benefícios para o conforto e bem-estar do seu bebê
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft card-hover cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeCard === index ? 'ring-2 ring-mint' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${benefit.lightColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color === 'bg-mint' ? 'text-mint-dark' : 'text-peach-dark'}`} />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm font-medium text-mint-dark mb-3">{benefit.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              
              {/* Hover decoration */}
              <div className={`absolute top-4 right-4 w-2 h-2 ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Progress indicator for horizontal scroll feel */}
        <div className="flex justify-center gap-2 mt-10">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCard === index ? 'w-8 bg-mint' : 'bg-mint/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
