import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  scrollToSection: (id: string) => void;
}

const ContentSections = ({ scrollToSection }: ContentSectionsProps) => {
  return (
    <>
      <section id="live" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 fade-on-scroll">
              <span className="gradient-text">Прямой эфир</span>
            </h3>
            
            <Card className="gradient-border p-8 md:p-12 backdrop-blur-xl bg-card/50 fade-on-scroll">
              <div className="flex flex-col items-center gap-8">
                <div 
                  className="w-full max-w-4xl mx-auto"
                  dangerouslySetInnerHTML={{
                    __html: `<link href="https://stream.popfm-bir.ru:1030/media/static/css/player/base.css" rel="stylesheet" type="text/css" />
<link href="https://stream.popfm-bir.ru:1030/media/static/css/player/style-10.css" rel="stylesheet" type="text/css" />
<link href="https://stream.popfm-bir.ru:1030/media/static/css/ui/jquery.ui.slider.css" rel="stylesheet" type="text/css" />
<script>
if (typeof jQuery == 'undefined') { 
  var i = "i";
  document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></scr' + i + 'pt>');
}
</script>
<script type="text/javascript" src="https://stream.popfm-bir.ru:1030/media/static/js/jplayer/jquery.jplayer.min.js"></script>
<script type="text/javascript" src="https://stream.popfm-bir.ru:1030/media/static/js/jplayer/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" src="https://stream.popfm-bir.ru:1030/media/static/js/jplayer/modernizr.js"></script>
<script type="text/javascript" src="https://stream.popfm-bir.ru:1030/media/static/js/jplayer/rt_pl.js"></script>
<div id="rtJpID-1"></div>
<div class="rtplwrapperForIe">
<div id="rtplayer-1" class="rtplmain_window gradient_style-10">
<a id="button_play_stop-1" class="rtplbutton_play_stop button_play_stop_style-10" href="#"></a>
<div id="current_time-1" class="rtplcurrent_time">00:00:00</div>
<a id="rtplmute-1" class="rtplmute button_mute_style-10" href="#"></a>
<div id="rtplvolume-1" class="rtplvolume"></div>
<a id="rtplmaxvol-1" class="rtplmaxvol button_max_vol_style-10" href="#"></a>
</div>
</div>
<script>$(document).ready( function(){ new RTPlayer( 1, 50, false, "https://stream.popfm-bir.ru:1030",  "mp3", {"mp3": "https://stream.popfm-bir.ru:1045/stream"}, "ru")  });</script>
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 fade-on-scroll">
            <span className="gradient-text">Расписание эфира</span>
          </h3>
          
          <div className="max-w-4xl mx-auto grid gap-4">
            {[
              { time: '06:00 - 09:00', title: 'Доброе утро!', host: 'Анна Смирнова', icon: 'Sunrise' },
              { time: '09:00 - 12:00', title: 'Позитивный день', host: 'Максим Орлов', icon: 'Coffee' },
              { time: '12:00 - 15:00', title: 'Обеденный хит', host: 'Ольга Петрова', icon: 'Music2' },
              { time: '15:00 - 18:00', title: 'После обеда', host: 'Дмитрий Волков', icon: 'Headphones' },
              { time: '18:00 - 21:00', title: 'Вечерний драйв', host: 'Елена Кузнецова', icon: 'Disc3' },
              { time: '21:00 - 00:00', title: 'Ночная волна', host: 'Андрей Соколов', icon: 'Moon' },
              { time: '00:00 - 06:00', title: 'Музыка без остановки', host: 'Автоплейлист', icon: 'Radio' }
            ].map((show, idx) => (
              <Card 
                key={show.time} 
                className="p-6 hover:scale-[1.02] transition-all cursor-pointer backdrop-blur-sm bg-card/80 fade-on-scroll group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={show.icon as any} className="text-white" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {show.time}
                      </span>
                      <Icon name="Clock" className="text-muted-foreground" size={16} />
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-1">{show.title}</h4>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Icon name="Mic" size={14} />
                      Ведущий: {show.host}
                    </p>
                  </div>

                  <Icon name="ChevronRight" className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-on-scroll">
            <p className="text-muted-foreground mb-4">
              Все программы по московскому времени (МСК+7)
            </p>
            <Button 
              onClick={() => scrollToSection('live')}
              className="gradient-bg hover:opacity-90 transition-all hover:scale-105"
            >
              <Icon name="Play" size={18} className="mr-2" />
              Слушать сейчас
            </Button>
          </div>
        </div>
      </section>

      <section id="popular" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 fade-on-scroll">
            <span className="gradient-text">Популярные программы</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                time: '07:00 - 10:00',
                title: 'Утренний драйв',
                host: 'Анна Светлова',
                description: 'Лучшее начало дня с бодрящей музыкой и позитивными новостями',
                icon: 'Sunrise'
              },
              {
                time: '14:00 - 17:00',
                title: 'Поп-хит парад',
                host: 'Дмитрий Волков',
                description: 'Топ-20 самых горячих треков недели и ваши голоса за любимые песни',
                icon: 'TrendingUp'
              },
              {
                time: '20:00 - 23:00',
                title: 'Вечерний чил',
                host: 'Елена Морозова',
                description: 'Расслабляющая атмосфера с мягкими хитами для вечернего отдыха',
                icon: 'Moon'
              }
            ].map((program, idx) => (
              <Card key={program.title} className="p-6 hover:scale-105 transition-all cursor-pointer backdrop-blur-sm bg-card/80 fade-on-scroll group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:animate-glow">
                  <Icon name={program.icon as any} className="text-white" size={28} />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {program.time}
                </div>
                <h4 className="font-heading font-bold text-xl mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="User" size={16} className="text-primary" />
                  <span className="font-medium">{program.host}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hosts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 fade-on-scroll">
            <span className="gradient-text">Наши ведущие</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Анна Светлова',
                role: 'Утренний ведущий',
                image: 'https://cdn.poehali.dev/projects/53d89b4f-421e-4f0f-aabe-d9a2d2e49535/files/ddfd61e2-4398-44c5-883a-7586a878c35a.jpg',
                description: 'Заряжает энергией каждое утро'
              },
              {
                name: 'Дмитрий Волков',
                role: 'Дневной эфир',
                image: 'https://cdn.poehali.dev/projects/53d89b4f-421e-4f0f-aabe-d9a2d2e49535/files/c71830a2-b910-4510-a570-4d4a651123ec.jpg',
                description: 'Знает все о современной музыке'
              },
              {
                name: 'Елена Морозова',
                role: 'Вечерний эфир',
                image: 'https://cdn.poehali.dev/projects/53d89b4f-421e-4f0f-aabe-d9a2d2e49535/files/29128d89-65b2-46a7-a860-bc1e63fa4ffb.jpg',
                description: 'Создает уютную атмосферу'
              }
            ].map((host, idx) => (
              <Card key={host.name} className="overflow-hidden hover:scale-105 transition-all cursor-pointer fade-on-scroll group" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={host.image} 
                    alt={host.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h4 className="font-heading font-bold text-xl mb-1">{host.name}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{host.role}</p>
                  <p className="text-muted-foreground text-sm">{host.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 fade-on-scroll">
            <span className="gradient-text">О станции</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Sparkles',
                title: 'Лучшая музыка',
                description: 'Самые свежие хиты и любимая классика в одном эфире. Только проверенные треки, которые поднимают настроение.'
              },
              {
                icon: 'Clock',
                title: '24/7 в эфире',
                description: 'Мы вещаем круглосуточно без перерывов. Включай POPFM в любое время дня и ночи.'
              },
              {
                icon: 'Heart',
                title: 'Для всей семьи',
                description: 'Музыка для разных поколений и вкусов. От современных треков до золотых хитов прошлых лет.'
              },
              {
                icon: 'Zap',
                title: 'Живое общение',
                description: 'Наши ведущие всегда на связи. Оставляй заявки, участвуй в конкурсах и выигрывай призы!'
              }
            ].map((feature, idx) => (
              <Card key={feature.title} className="p-8 hover:scale-105 transition-transform cursor-pointer backdrop-blur-sm bg-card/80 fade-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h4 className="font-heading font-bold text-2xl mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ads" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-8 fade-on-scroll">
              <span className="gradient-text">Реклама на POPFM</span>
            </h3>
            
            <p className="text-xl text-muted-foreground mb-12 fade-on-scroll">
              Размещайте рекламу на самой популярной радиостанции Биробиджана
            </p>

            <Card className="gradient-border p-8 md:p-12 backdrop-blur-sm bg-card/80 fade-on-scroll">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: 'Target', title: 'Целевая аудитория', value: '10 000+' },
                  { icon: 'TrendingUp', title: 'Охват города', value: '80%' },
                  { icon: 'Award', title: 'Лет в эфире', value: '15+' }
                ].map((stat) => (
                  <div key={stat.title} className="text-center">
                    <Icon name={stat.icon as any} className="text-primary mx-auto mb-4" size={40} />
                    <div className="text-3xl font-bold font-heading mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                className="gradient-bg hover:opacity-90 transition-all px-12 hover:scale-105"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать рекламу
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-8 fade-on-scroll">
              <span className="gradient-text">Контакты</span>
            </h3>
            
            <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 fade-on-scroll">
              <div className="space-y-6">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (42622) 2-XX-XX' },
                  { icon: 'Mail', label: 'Email', value: 'info@popfm-birobidzhan.ru' },
                  { icon: 'MapPin', label: 'Адрес', value: 'г. Биробиджан, ул. Ленина, 1' },
                  { icon: 'Clock', label: 'Работаем', value: '24/7 в эфире' }
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} className="text-white" size={20} />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center mt-8">
                {['Instagram', 'Facebook', 'Youtube'].map((social) => (
                  <Button
                    key={social}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-primary/30 hover:bg-primary/10 hover:scale-110 transition-all"
                  >
                    <Icon name={social as any} size={20} />
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;