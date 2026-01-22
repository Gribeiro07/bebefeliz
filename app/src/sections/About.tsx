import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Brain, Ban, Flame } from 'lucide-react';

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

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: The Problem/Diagnosis */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-peach/10 rounded-full mb-6">
              <AlertCircle className="w-4 h-4 text-peach-dark" />
              <span className="text-sm font-medium text-peach-dark">Diagnóstico Cirúrgico</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
              O Ciclo da Exaustão:<br />
              <span className="text-peach-dark">Eu sei onde você está agora.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Você ama seu filho, mas, secretamente, <strong>teme o pôr do sol</strong>. Quando a noite chega, o choro começa.
              </p>
              <p>
                Você checa a fralda, a temperatura, a fome. Tudo está 'certo', mas ele grita como se sentisse dor.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-peach/10 italic">
                <p>
                  "Você sente o peito apertar de culpa. A exaustão te faz pensar: 'Eu só queria que ele parasse, nem que fosse por 5 minutos'. E a pior dúvida surge: <span className="text-peach-dark font-medium">'Será que eu não levo jeito para isso? Por que o bebê da vizinha dorme e o meu não?'"</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Remedies Fail */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-mint/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-3xl -mr-10 -mt-10" />

              <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-6 flex items-center gap-3">
                <Ban className="w-8 h-8 text-peach-dark" />
                Por que os remédios falharam?
                <span className="text-sm font-sans font-normal text-muted-foreground block mt-1">(A Culpa não é sua)</span>
              </h3>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Você foi ensinada a tratar o sintoma: a barriga dura, os gases. Mas a <strong>neurociência pediátrica</strong> revela que o intestino contrai porque o cérebro está em pânico.
                </p>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center shrink-0 mt-1">
                    <Flame className="w-5 h-5 text-peach-dark" />
                  </div>
                  <p className="text-foreground font-medium">
                    Tentar acalmar um bebê estressado tratando apenas a barriga é como tentar apagar um incêndio na casa pintando a parede.
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-mint/10 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-mint-dark" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Enquanto o <strong>Nível de Cortisol</strong> do seu bebê estiver alto, nenhum remédio fará ele dormir profundamente. Ele está em modo de sobrevivência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
