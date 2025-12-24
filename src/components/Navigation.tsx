import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center animate-glow">
              <Icon name="Radio" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-2xl gradient-text">POPFM</h1>
              <p className="text-xs text-muted-foreground">Биробиджан</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Главная', 'Прямой эфир', 'Расписание', 'О станции', 'Реклама', 'Контакты'].map((item, idx) => {
              const id = ['home', 'live', 'schedule', 'about', 'ads', 'contacts'][idx];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Button 
              onClick={() => scrollToSection('live')}
              className="hidden sm:flex gradient-bg hover:opacity-90 transition-opacity"
            >
              <Icon name="Play" size={16} className="mr-2" />
              Слушать
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-background/95 border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {['Главная', 'Прямой эфир', 'Расписание', 'О станции', 'Реклама', 'Контакты'].map((item, idx) => {
              const id = ['home', 'live', 'schedule', 'about', 'ads', 'contacts'][idx];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            
            <Button 
              onClick={() => scrollToSection('live')}
              className="w-full gradient-bg hover:opacity-90 transition-opacity"
            >
              <Icon name="Play" size={16} className="mr-2" />
              Слушать радио
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
