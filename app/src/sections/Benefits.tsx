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
      description: 'A técnica age rapidamente relaxando a musculatura e o sistema digestivo do bebê, proporcionando alívio notável já na primeira sessão.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      subtitle: 'Sem medicamentos',
      description: 'Método totalmente manual e natural, sem necessidade de ingestão de remédios ou produtos químicos. Apenas o toque de amor.',
      color: 'bg-peach',
      lightColor: 'bg-peach/10',
    },
    {
      icon: ShieldCheck,
      title: 'Totalmente Seguro',
      subtitle: 'Sem contraindicações',
      description: 'Técnica validada por especialistas e recomendada por pediatras, garantindo total segurança para recém-nascidos.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Award,
      title: 'Recomendado',
      subtitle: 'Por especialistas',
      description: 'Aprovado e recomendado por pediatras e fisioterapeutas em todo o Brasil como a melhor alternativa natural para cólicas.',
      color: 'bg-peach',
      lightColor: 'bg-peach/10',
    },
    {
      icon: Droplets,
      title: 'Fácil de Aprender',
      subtitle: 'Passo a passo simples',
      description: 'Vídeo-aulas didáticas e objetivas. Qualquer pessoa pode aprender e aplicar a técnica com segurança no conforto de casa.',
      color: 'bg-mint',
      lightColor: 'bg-mint/10',
    },
    {
      icon: Heart,
      title: 'Bem-Estar Total',
      subtitle: 'Sono tranquilo',
      description: 'Além de aliviar a cólica, promove um sono mais tranquilo, reduz o choro e fortalece o vínculo entre pais e bebê.',
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
              className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft card-hover cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'w-8 bg-mint' : 'bg-mint/30'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
