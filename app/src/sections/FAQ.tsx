import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
      question: 'O Método Shantala é seguro para recém-nascidos?',
      answer: 'Sim, totalmente seguro. A técnica é suave e respeita a fisiologia do bebê. Pode ser aplicada desde os primeiros dias de vida (após a queda do umbigo, conforme recomendação tradicional) e é amplamente recomendada por pediatras.',
    },
    {
      question: 'Como acesso o curso após a compra?',
      answer: 'O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login para nossa plataforma exclusiva, onde terá acesso a todas as vídeo-aulas e bônus.',
    },
    {
      question: 'Preciso de algum óleo especial?',
      answer: 'Recomendamos o uso de óleos vegetais naturais (como semente de uva, amêndoas doces ou coco), que são seguros para a pele do bebê. No curso, explicamos detalhadamente quais os melhores óleos para cada situação.',
    },
    {
      question: 'Serve para bebês de qual idade?',
      answer: 'O método é extremamente benéfico desde o primeiro mês até a fase pré-escolar. As técnicas ajudam nas cólicas do recém-nascido e, posteriormente, no relaxamento e desenvolvimento motor da criança maior.',
    },
    {
      question: 'Tenho alguma garantia?',
      answer: 'Sim! Confiamos tanto na eficácia do nosso método que oferecemos 7 dias de garantia incondicional. Se você não gostar do conteúdo por qualquer motivo, devolvemos 100% do seu investimento.',
    },
    {
      question: 'E se eu tiver dúvidas durante o curso?',
      answer: 'Você não estará sozinha! Oferecemos suporte dedicado via WhatsApp para tirar todas as suas dúvidas sobre a aplicação da técnica e garantir que você tenha a melhor experiência possível.',
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
            Dúvidas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Perguntas{' '}
            <span className="text-mint-dark">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Bebê Feliz
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
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a
            href="mailto:contato@bebefeliz.com.br"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-white rounded-full font-medium hover:bg-mint-dark transition-colors btn-magnetic"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
