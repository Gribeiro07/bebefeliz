import { useEffect, useRef, useState } from 'react';
import { Activity, Zap, Moon, Fingerprint, Heart, Brain, ChevronRight } from 'lucide-react';

export function MethodFeatures() {
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

  const features = [
    {
      icon: Fingerprint,
      name: 'Toque de Pressão Precisa',
      description: 'Estimulação de pontos-chave (5g) que enviam sinal direto ao Sistema Parassimpático.',
      benefit: 'Biohack Natural',
    },
    {
      icon: Activity,
      name: 'Desacelera o Coração',
      description: 'O ritmo cardíaco diminui fisiologicamente, tirando o bebê do estado de alerta.',
      benefit: 'Efeito Imediato',
    },
    {
      icon: Zap,
      name: 'Intestino Relaxa',
      description: 'Ao desligar o modo "luta ou fuga", a tensão abdominal se desfaz. Adeus, cólica.',
      benefit: 'Alívio Real',
    },
    {
      icon: Moon,
      name: 'Sono Automático',
      description: 'As pálpebras pesam como resposta biológica ao relaxamento do Nervo Vago.',
      benefit: 'Sono Profundo',
    },
    {
      icon: Brain,
      name: 'Sem Luta ou Fuga',
      description: 'Atua na causa raiz: o excesso de Cortisol, não apenas nos gases.',
      benefit: 'Neurociência',
    },
    {
      icon: Heart,
      name: 'Conexão Única',
      description: 'Você se torna a fonte de cura e segurança do seu filho.',
      benefit: 'Vínculo Mãe-Bebê',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-mint/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-peach/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            A Solução Definitiva
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Apresentando o <span className="text-mint-dark">Protocolo de Ressonância Vagal (PRVT)</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-left mx-auto max-w-3xl">
            A maioria das soluções foca no intestino (gases). O <strong>PRVT</strong> foca no <strong>Sistema Nervoso Autônomo</strong>.
            O problema não é apenas a cólica, é a incapacidade do bebê de "desligar" o alerta de luta ou fuga (cortisol alto).
            O toque específico estimula o nervo vago, forçando biologicamente o relaxamento.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-mint/20 inline-block text-left">
            <h4 className="font-bold text-mint-dark mb-2 flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              Diferente da Shantala (que apenas relaxa músculos)
            </h4>
            <p className="text-muted-foreground text-sm">
              O PRVT é um <strong>'biohack' natural</strong>. Utilizando toques de pressão precisa, enviamos um sinal direto ao cérebro para iniciar o sono.
            </p>
          </div>
        </div>

        {/* Features Grid - Molecular Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveNode(index)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={`relative bg-white rounded-2xl p-6 shadow-soft transition-all duration-300 ${activeNode === index ? 'shadow-glow scale-[1.02]' : ''
                }`}>
                {/* Connection lines (visual decoration) */}
                {activeNode === index && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute top-1/2 right-0 w-8 h-px bg-gradient-to-r from-mint/50 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-b from-mint/50 to-transparent" />
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${activeNode === index ? 'bg-mint scale-110' : 'bg-mint/10'
                  }`}>
                  <feature.icon className={`w-7 h-7 transition-colors duration-300 ${activeNode === index ? 'text-white' : 'text-mint-dark'
                    }`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-foreground mb-1">{feature.name}</h3>
                <p className="text-sm text-mint-dark font-medium mb-2">{feature.benefit}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-mint/5 transition-opacity duration-300 -z-10 ${activeNode === index ? 'opacity-100' : 'opacity-0'
                  }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
