import { Baby, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-dark text-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center">
                <Baby className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl">Bebê Feliz</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Alívio natural para a cólica do seu bebê. Mais de 10.000 famílias já experimentaram os benefícios do nosso produto 100% natural.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mint hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#hero' },
                { name: 'Sobre', href: '#about' },
                { name: 'Benefícios', href: '#benefits' },
                { name: 'Depoimentos', href: '#testimonials' },
                { name: 'Comprar', href: '#buy' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-muted-foreground hover:text-mint-dark transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display text-lg mb-4">Suporte</h3>
            <ul className="space-y-3">
              {[
                { name: 'Perguntas Frequentes', href: '#faq' },
                { name: 'Política de Privacidade', href: '#' },
                { name: 'Termos de Uso', href: '#' },
                { name: 'Trocas e Devoluções', href: '#' },
                { name: 'Rastrear Pedido', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-muted-foreground hover:text-mint-dark transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a href="mailto:produtosdigitaislrv@gmail.com" className="hover:text-mint-dark transition-colors">
                    contato@bebefeliz.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/5519910055032" className="hover:text-mint-dark transition-colors">
                    (19) 99100-55032
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p>Belo horizonte, MG - Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bebê Feliz. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>CNPJ: 12.345.678/0001-90</span>
              <span>•</span>
              <span>Registro ANVISA: 12345678910</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-muted-foreground/60 text-center leading-relaxed">
            IMPORTANTE: Este produto não substitui o aconselhamento médico. Sempre consulte o pediatra do seu bebê antes de iniciar qualquer tratamento.
            Os resultados podem variar de pessoa a pessoa. As informações contidas neste site são de caráter informativo e não devem ser consideradas como aconselhamento médico.
          </p>
        </div>
      </div>
    </footer>
  );
}
