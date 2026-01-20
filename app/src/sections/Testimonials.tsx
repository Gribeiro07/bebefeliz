import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

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

  const testimonials = [
    {
      name: 'Mariana Silva',
      location: 'São Paulo, SP',
      avatar: '/avatar1.jpg',
      rating: 5,
      text: 'O Bebê Feliz foi um verdadeiro milagre para nós! Minha filha sofria muito com cólica desde os 15 dias de vida. Tentamos de tudo, mas só esse produto trouxe alívio real. Agora ela dorme tranquilamente e está sempre sorrindo!',
      babyName: 'Laura',
      babyAge: '3 meses',
    },
    {
      name: 'Carlos Oliveira',
      location: 'Rio de Janeiro, RJ',
      avatar: '/avatar2.jpg',
      rating: 5,
      text: 'Como pai de primeira viagem, ver meu filho sofrendo com cólica era desesperador. O pediatra recomendou o Bebê Feliz e em questão de minutos o alívio foi perceptível. Hoje não vivemos sem!',
      babyName: 'Pedro',
      babyAge: '2 meses',
    },
    {
      name: 'Juliana Santos',
      location: 'Belo Horizonte, MG',
      avatar: '/avatar3.jpg',
      rating: 5,
      text: 'Produto excelente! O que mais me impressionou foi a rapidez do efeito. Meu bebê parou de chorar em menos de 15 minutos após a aplicação. Recomendo para todas as mamães!',
      babyName: 'Helena',
      babyAge: '4 meses',
    },
    {
      name: 'Dona Rosa',
      location: 'Porto Alegre, RS',
      avatar: '/avatar4.jpg',
      rating: 5,
      text: 'Comprei para minha neta que chorava muito à noite. Minha filha estava exausta. Desde que começamos a usar o Bebê Feliz, a casa inteira dorme melhor! Produto abençoado.',
      babyName: 'Sophia',
      babyAge: '2 meses',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-cream/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 bg-mint/10 rounded-full text-sm font-medium text-mint-dark mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            O que dizem nossos{' '}
            <span className="text-mint-dark">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de famílias já experimentaram os benefícios do Bebê Feliz
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                  <div className={`max-w-3xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-soft transition-all duration-500 ${
                    index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                  }`}>
                    {/* Quote icon */}
                    <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center mb-6">
                      <Quote className="w-6 h-6 text-mint" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-peach fill-peach" />
                      ))}
                    </div>
                    
                    {/* Text */}
                    <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-mint/20"
                      />
                      <div>
                        <h4 className="font-display text-lg text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <p className="text-sm text-mint-dark font-medium">
                          Mãe de {testimonial.babyName} ({testimonial.babyAge})
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-mint/20 hover:border-mint hover:bg-mint/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-mint' : 'bg-mint/30'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-mint/20 hover:border-mint hover:bg-mint/5"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '10.000+', label: 'Bebês Aliviados' },
            { value: '500+', label: 'Pediatras Recomendam' },
            { value: '98%', label: 'Satisfação' },
            { value: '15min', label: 'Alívio Rápido' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-mint-dark mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
