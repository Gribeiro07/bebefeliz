import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: 'Meu bebê recém-nascido pode receber?',
      answer: 'Sim, a pressão é ajustada para ser segura desde o dia 1. Ao contrário de massagens vigorosas, o PRVT usa toques sutis (5g) que respeitam a fisiologia delicada do recém-nascido.',
    },
    {
      question: 'E se eu não tiver tempo?',
      answer: 'O protocolo leva menos de 7 minutos. Foi desenhado exatamente para mães exaustas que não podem ficar horas tentando ninar o bebê. É uma intervenção rápida e cirúrgica no sistema nervoso.',
    },
    {
      question: 'Funciona para refluxo?',
      answer: 'Sim. O protocolo ajuda a acalmar o sistema digestivo e o nervo vago (que controla a digestão), reduzindo episódios de desconforto e favorecendo o esvaziamento gástrico natural.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Você ainda tem{' '}
            <span className="text-mint-dark">alguma pergunta?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda por que o PRVT é diferente de tudo que você já viu.
          </p>
        </div>

        {/* FAQ List */}
        <div className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 ${openIndex === index ? 'ring-2 ring-mint' : ''
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-mint' : 'bg-mint/10'
                    }`}>
                    <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-mint-dark'
                      }`} />
                  </div>
                  <span className="font-display text-lg text-foreground group-hover:text-mint-dark transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco no WhatsApp
          </p>
          <a
            href="https://wa.me/5519910055032" // TODO: Add actual link if available or keep generic
            className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-white rounded-full font-medium hover:bg-mint-dark transition-colors btn-magnetic"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Suporte
          </a>
        </div>
      </div>
    </section>
  );
}
