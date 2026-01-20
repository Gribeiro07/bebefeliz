import { useEffect, useRef, useState } from 'react';
import { Leaf, Shield, Clock, Award } from 'lucide-react';

export function About() {
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

  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Técnica totalmente manual, sem uso de remédios',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Método suave e seguro para bebês de todas as idades',
    },
    {
      icon: Clock,
      title: 'Alívio Rápido',
      description: 'Resultados visíveis em apenas 15 minutos',
    },
    {
      icon: Award,
      title: 'Recomendado',
      description: 'Validado por pediatras em todo o Brasil',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-mint/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-mint/20 rounded-3xl blob" />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mother-baby.jpg"
                  alt="Mãe e bebê feliz"
                  className="w-full aspect-[4/3] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-mint/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+10.000</p>
                    <p className="text-sm text-muted-foreground">Famílias Felizes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
              Sobre o Método
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Confiado por{' '}
              <span className="font-script text-peach-dark text-5xl lg:text-6xl">mães</span>
              {' '}e{' '}
              <span className="font-script text-mint-dark text-5xl lg:text-6xl">pediatras</span>
              {' '}em todo o Brasil
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Método Shantala Bebê Feliz foi desenvolvido com muito carinho pensando no bem-estar dos pequenos.
              Nossa técnica, amplamente estudada e testada, ajuda a aliviar a cólica de forma
              suave e eficaz, trazendo conforto para o bebê e tranquilidade para toda a família.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Cada movimento do método é resultado de anos de prática e validação, garantindo uma técnica
              segura, eficaz e livre de intervenções medicamentosas, promovendo apenas saúde e conexão.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-mint-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
