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
      question: 'O Bebê Feliz é seguro para recém-nascidos?',
      answer: 'Sim, o Bebê Feliz é totalmente seguro para recém-nascidos. Nossa fórmula é 100% natural, livre de açúcar, álcool e conservantes. É testado dermatologicamente e recomendado por pediatras. Pode ser usado desde os primeiros dias de vida.',
    },
    {
      question: 'Como devo administrar o produto ao meu bebê?',
      answer: 'O Bebê Feliz vem com um conta-gotas prático. Você pode adicionar as gotas diretamente na boca do bebê ou misturar na mamadeira/leite materno. A dosagem recomendada é de 5 gotas, 3 vezes ao dia, ou conforme orientação do seu pediatra.',
    },
    {
      question: 'Quanto tempo leva para fazer efeito?',
      answer: 'Muitos pais relatam alívio dos sintomas em apenas 15 minutos após a aplicação. No entanto, cada bebê é único e os resultados podem variar. O uso contínuo ajuda a prevenir novas crises de cólica.',
    },
    {
      question: 'Posso usar o Bebê Feliz junto com outros medicamentos?',
      answer: 'O Bebê Feliz é natural e geralmente não interfere com outros medicamentos. No entanto, sempre consulte o pediatra do seu bebê antes de combinar com outros tratamentos, especialmente se seu filho tiver condições de saúde específicas.',
    },
    {
      question: 'O produto tem contraindicações?',
      answer: 'O Bebê Feliz é formulado para ser extremamente seguro, sem contraindicações conhecidas. É livre de glúten, lactose e ingredientes de origem animal. Se notar qualquer reação incomum, suspenda o uso e consulte um médico.',
    },
    {
      question: 'Qual é a validade do produto?',
      answer: 'O Bebê Feliz tem validade de 2 anos a partir da data de fabricação. Após aberto, deve ser consumido em até 6 meses. Mantenha em local fresco e ao abrigo da luz solar direta.',
    },
    {
      question: 'Como é feito o envio e qual o prazo de entrega?',
      answer: 'Realizamos envios para todo o Brasil. O prazo de entrega varia de 5 a 15 dias úteis dependendo da sua região. Oferecemos frete grátis para compras acima de R$ 150. Todas as embalagens são discretas e seguras.',
    },
    {
      question: 'Qual é a política de devolução?',
      answer: 'Oferecemos garantia de satisfação de 30 dias. Se você não estiver completamente satisfeito com o produto, entre em contato conosco e devolveremos 100% do seu dinheiro, sem perguntas.',
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
              className={`bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'ring-2 ring-mint' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index ? 'bg-mint' : 'bg-mint/10'
                  }`}>
                    <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-mint-dark'
                    }`} />
                  </div>
                  <span className="font-display text-lg text-foreground group-hover:text-mint-dark transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
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
