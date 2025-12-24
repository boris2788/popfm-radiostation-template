import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <Icon name="Radio" className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl gradient-text">POPFM</h2>
                  <p className="text-xs text-muted-foreground">Биробиджан</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Лучшая поп-музыка 24/7. Мы создаем атмосферу, которая поднимает настроение и дарит позитив каждый день.
              </p>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', link: '#' },
                  { name: 'Facebook', link: '#' },
                  { name: 'Youtube', link: '#' },
                  { name: 'Music', link: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-10 h-10 rounded-full border border-primary/30 hover:bg-primary/10 flex items-center justify-center hover:scale-110 transition-all"
                  >
                    <Icon name={social.name as any} size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                {['Главная', 'Прямой эфир', 'Расписание', 'О станции'].map((item, idx) => {
                  const id = ['home', 'live', 'schedule', 'about'][idx];
                  return (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="text-primary mt-0.5" />
                  <span>+7 (42622) 2-XX-XX</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="text-primary mt-0.5" />
                  <span>info@popfm-birobidzhan.ru</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                  <span>г. Биробиджан, ул. Ленина, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 POPFM Биробиджан. Все права защищены. Создано с ❤️ для любителей отличной музыки.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
