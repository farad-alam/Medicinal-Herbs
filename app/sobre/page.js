import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Sobre Nós | Ervas Medicinais',
  description: 'Conheça nossa missão de compartilhar conhecimento sobre ervas medicinais e promover saúde natural através de informações confiáveis.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Sobre Nós</h1>
            <p className="text-xl text-muted-foreground">
              Conheça nossa missão e equipe dedicada à divulgação do conhecimento sobre ervas medicinais.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg mb-4">
                Fundado em 2023, o Ervas Medicinais nasceu da paixão por plantas medicinais e do desejo de compartilhar conhecimento tradicional e científico sobre fitoterapia, com foco especial no rico patrimônio botânico brasileiro.
              </p>
              <p className="text-lg mb-4">
                Nossa missão é oferecer informações confiáveis, baseadas tanto na sabedoria tradicional quanto em pesquisas científicas atualizadas, permitindo que mais pessoas possam se beneficiar do poder curativo das plantas de forma segura e eficaz.
              </p>
              <p className="text-lg mb-6">
                Acreditamos que o conhecimento sobre ervas medicinais é um patrimônio cultural que deve ser preservado, valorizado e compartilhado, promovendo uma abordagem integrativa da saúde que respeita tanto a medicina convencional quanto as tradições naturais.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/artigos">
                    Explorar Artigos
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contato">
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5946663/pexels-photo-5946663.jpeg"
                alt="Ervas Medicinais"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossa Equipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-sm p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/5721917/pexels-photo-5721917.jpeg"
                  alt="Dra. Ana Silva"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dra. Ana Silva</h3>
              <p className="text-primary mb-3">Fitoterapeuta & Fundadora</p>
              <p className="text-muted-foreground mb-4">
                Especialista em fitoterapia com mais de 15 anos de experiência. Pesquisadora de plantas medicinais brasileiras e suas aplicações terapêuticas.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg"
                  alt="Dr. Carlos Mendes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dr. Carlos Mendes</h3>
              <p className="text-primary mb-3">Médico Integrativo</p>
              <p className="text-muted-foreground mb-4">
                Médico com formação em medicina integrativa. Estuda a integração entre tratamentos convencionais e o uso terapêutico de plantas medicinais.
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/7584688/pexels-photo-7584688.jpeg"
                  alt="Dra. Luísa Santos"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Dra. Luísa Santos</h3>
              <p className="text-primary mb-3">Botânica & Cultivadora</p>
              <p className="text-muted-foreground mb-4">
                Botânica especializada em plantas medicinais. Responsável pelo conteúdo sobre identificação, cultivo e preservação de espécies medicinais.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Nossos Valores</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 2.008 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conhecimento Integrado</h3>
                  <p className="text-muted-foreground">
                    Combinamos sabedoria tradicional com evidências científicas modernas, respeitando tanto a medicina convencional quanto as práticas naturais.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M7 11c.33 0 .65.14.88.38a.91.91 0 0 1 .26.9c-.196.064-.408.064-.604.064H3.6C3.4 13 3.2 13 3 12.9a.91.91 0 0 1 .25-.87c.23-.25.55-.39.88-.39h2.87Zm8.38.39c.23-.24.55-.38.88-.38h2.87c.33 0 .65.14.88.38.232.244.334.59.25.9-.2.063-.41.063-.606.063l-3.934.001c-.2 0-.4 0-.6-.1a.91.91 0 0 1 .25-.87ZM7 6.74c.33 0 .65.14.88.38a.91.91 0 0 1 .26.9c-.196.064-.408.064-.604.064H3.6C3.4 8.74 3.2 8.74 3 8.64a.91.91 0 0 1 .25-.87c.23-.25.55-.39.88-.39h2.87Zm8.38.39c.23-.24.55-.38.88-.38h2.87c.33 0 .65.14.88.38.232.244.334.59.25.9-.2.063-.41.063-.606.063l-3.934.001c-.2 0-.4 0-.6-.1a.91.91 0 0 1 .25-.87ZM7 15.26c.33 0 .65.14.88.38a.91.91 0 0 1 .26.9c-.196.064-.408.064-.604.064H3.6c-.2 0-.4 0-.6-.1a.91.91 0 0 1 .25-.87c.23-.25.55-.39.88-.39h2.87Zm8.38.39c.23-.24.55-.38.88-.38h2.87c.33 0 .65.14.88.38.232.244.334.59.25.9-.2.063-.41.063-.606.063l-3.934.001c-.2 0-.4 0-.6-.1a.91.91 0 0 1 .25-.87Z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acessibilidade</h3>
                  <p className="text-muted-foreground">
                    Acreditamos que o conhecimento sobre saúde natural deve ser acessível a todos, apresentado de forma clara e prática.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V6"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Promovemos o uso consciente e sustentável de plantas medicinais, respeitando a biodiversidade e incentivando práticas de cultivo responsável.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsabilidade</h3>
                  <p className="text-muted-foreground">
                    Comprometemo-nos com informações precisas e responsáveis, sempre enfatizando a importância da orientação profissional em questões de saúde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Junte-se à Nossa Comunidade</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Faça parte da nossa comunidade de entusiastas de ervas medicinais. Receba atualizações, dicas exclusivas e participe de discussões sobre saúde natural.
          </p>
          <Button size="lg" asChild>
            <Link href="/contato">
              Entre em Contato
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}