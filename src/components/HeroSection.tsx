import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-on-scroll">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-scale-in">
            <span className="text-sm font-medium text-primary">🎵 В эфире круглосуточно</span>
          </div>
          
          <h2 className="font-heading font-bold text-6xl md:text-8xl mb-6 gradient-text animate-slide-up">
            POPFM
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Твоя любимая музыка в Биробиджане
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('live')}
              className="gradient-bg hover:opacity-90 transition-all text-lg px-8 py-6 hover:scale-105"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Включить радио
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 hover:scale-105 transition-all"
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: 'Music', label: 'Хиты дня', value: '24/7' },
              { icon: 'Users', label: 'Слушателей', value: '10K+' },
              { icon: 'Mic', label: 'Ведущих', value: '8' }
            ].map((stat, idx) => (
              <div key={stat.label} className="fade-on-scroll" style={{ animationDelay: `${0.6 + idx * 0.1}s` }}>
                <Icon name={stat.icon as any} className="text-primary mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
