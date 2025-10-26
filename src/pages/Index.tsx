import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Современный интернет-магазин с интеграцией платежей и управлением товарами',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: 'https://github.com/dom2411edinstvo',
      image: 'https://cdn.poehali.dev/projects/b2e47576-1064-442a-9602-8386b823d5d7/files/ce6cfa8e-0bbb-4175-8eea-2a46c747e274.jpg'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Мобильное приложение для управления финансами с биометрической аутентификацией',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      link: 'https://github.com/dom2411edinstvo',
      image: 'https://cdn.poehali.dev/projects/b2e47576-1064-442a-9602-8386b823d5d7/files/49856e72-f32a-4355-b55d-25b5a8f08ec6.jpg'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Дашборд для визуализации данных с использованием машинного обучения',
      tags: ['Python', 'TensorFlow', 'D3.js'],
      link: 'https://github.com/dom2411edinstvo',
      image: 'https://cdn.poehali.dev/projects/b2e47576-1064-442a-9602-8386b823d5d7/files/d7f466c0-873a-4e28-8c3f-30ad5736777b.jpg'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Социальная сеть с real-time чатом и рекомендательной системой',
      tags: ['Vue.js', 'WebSocket', 'MongoDB'],
      link: 'https://github.com/dom2411edinstvo',
      image: ''
    }
  ];

  const skills = [
    { name: 'React', icon: 'Code2', level: 95 },
    { name: 'TypeScript', icon: 'FileCode', level: 90 },
    { name: 'Node.js', icon: 'Server', level: 85 },
    { name: 'Python', icon: 'Terminal', level: 88 },
    { name: 'PostgreSQL', icon: 'Database', level: 82 },
    { name: 'Docker', icon: 'Box', level: 80 },
    { name: 'AWS', icon: 'Cloud', level: 75 },
    { name: 'UI/UX Design', icon: 'Palette', level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30">
      <div
        id="hero"
        data-animate
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible['hero'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 animate-scale-in">
            <Badge className="px-6 py-2 text-sm bg-gradient-to-r from-primary via-secondary to-accent text-white border-0">
              Доступен для новых проектов
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up bg-[length:200%_auto] animate-gradient-shift">
            Создаю цифровые продукты будущего
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Full-stack разработчик с 5+ годами опыта в создании современных веб-приложений и мобильных решений
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться со мной
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать резюме
            </Button>
          </div>
        </div>
      </div>

      <section
        id="about"
        data-animate
        className={`py-24 px-4 transition-all duration-1000 delay-200 ${
          isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О моём бэкграунде
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Путь от junior разработчика до tech lead
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                  <Icon name="Briefcase" className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Опыт работы</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Tech Lead в InnovateTech</p>
                      <p className="text-sm">2022 - Настоящее время</p>
                      <p className="mt-1">Руководство командой из 8 разработчиков, архитектура микросервисов</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Senior Developer в StartupHub</p>
                      <p className="text-sm">2020 - 2022</p>
                      <p className="mt-1">Разработка SaaS платформы с нуля, 100k+ активных пользователей</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl">
                  <Icon name="GraduationCap" className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Образование</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Магистр Computer Science</p>
                      <p className="text-sm">МФТИ, 2018-2020</p>
                      <p className="mt-1">Специализация: Машинное обучение и распределённые системы</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Сертификации</p>
                      <p className="mt-1">AWS Solutions Architect, Google Cloud Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        data-animate
        className={`py-24 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 transition-all duration-1000 delay-300 ${
          isVisible['portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Портфолио работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Избранные проекты за последние годы
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      <Icon name="ExternalLink" className="mr-2" size={20} />
                      Посмотреть проект
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        data-animate
        className={`py-24 px-4 transition-all duration-1000 delay-400 ${
          isVisible['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Технологии и компетенции
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мой технологический стек
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Icon name={skill.icon as any} className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 rounded-full"
                        style={{ width: isVisible['skills'] ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-animate
        className={`py-24 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 transition-all duration-1000 delay-500 ${
          isVisible['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Готов обсудить ваш проект и воплотить идеи в реальность
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 hover:border-primary">
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">hello@example.com</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 hover:border-secondary">
              <Icon name="Github" className="mx-auto mb-3 text-secondary" size={32} />
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-muted-foreground">@yourprofile</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 hover:border-accent">
              <Icon name="Linkedin" className="mx-auto mb-3 text-accent" size={32} />
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-muted-foreground">/in/yourprofile</p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 hover:border-primary">
              <Icon name="MessageCircle" className="mx-auto mb-3 text-primary" size={32} />
              <p className="font-semibold">Telegram</p>
              <p className="text-sm text-muted-foreground">@yourtelegram</p>
            </Card>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:scale-110 transition-transform text-lg px-8 py-6">
            <Icon name="Send" className="mr-2" size={24} />
            Написать сообщение
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Portfolio. Создано с 💜 на React + TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;