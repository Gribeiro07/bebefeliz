import { useState, useEffect } from 'react';
import { Menu, X, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Comprar', href: '#buy' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isScrolled
            ? 'w-auto px-2 py-2'
            : 'w-[90%] max-w-4xl px-6 py-3'
        }`}
      >
        <div
          className={`glass rounded-full shadow-soft flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'px-4 py-2' : 'px-6 py-3'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center transition-transform duration-300 group-hover:rotate-[5deg]">
              <Baby className="w-5 h-5 text-white" />
            </div>
            <span className={`font-display text-xl text-foreground transition-all duration-300 ${isScrolled ? 'hidden md:block' : ''}`}>
              Bebê Feliz
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 ${isScrolled ? 'gap-1' : 'gap-2'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 underline-animation"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`hidden md:block ${isScrolled ? 'hidden lg:block' : ''}`}>
            <Button
              onClick={() => scrollToSection('#buy')}
              className="bg-mint hover:bg-mint-dark text-white rounded-full px-6 btn-magnetic"
            >
              Comprar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-mint/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-3 text-lg font-medium text-foreground hover:text-mint transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#buy')}
              className="mt-4 bg-mint hover:bg-mint-dark text-white rounded-full w-full"
            >
              Comprar Agora
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
