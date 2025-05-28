import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FeaturedArticles from '@/components/home/featured-articles';
import CategoryGrid from '@/components/home/category-grid';
import { getArticles } from '@/lib/articles';
import Footer  from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function Home() {
  const articles = getArticles();
  const featuredArticles = articles.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg"
            alt="Ervas Medicinais"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ervas Medicinais: <br />
              <span className="text-secondary">
                Sabedoria Natural para Saúde e Bem-estar
              </span>
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Descubra os segredos e benefícios das plantas medicinais. Guias
              completos, dicas de cultivo e usos terapêuticos.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="text-base">
                <Link href="/artigos">
                  Explorar Artigos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 text-base"
              >
                <Link href="/categorias">Ver Categorias</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-4 -mt-8 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-card rounded-xl p-4 shadow-lg max-w-3xl mx-auto animate-fade-down">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Pesquisar ervas, benefícios, receitas..."
              className="pl-10 py-6 text-base"
            />
            <Button className="absolute right-1 top-1/2 -translate-y-1/2">
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Artigos em Destaque
          </h2>
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/artigos">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <FeaturedArticles articles={featuredArticles} />
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
            Explore por Categorias
          </h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Cultive Seu Próprio Jardim Medicinal
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Aprenda a cultivar, colher e preparar suas próprias ervas medicinais
            em casa. Descubra como criar um jardim terapêutico que beneficia sua
            saúde e bem-estar.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/artigos/cultivo-de-ervas-em-casa">
              Guia de Cultivo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}