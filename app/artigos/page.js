import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Search } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { getArticles, getCategories } from '@/lib/articles';

export const metadata = {
  title: 'Artigos sobre Ervas Medicinais | Guias e Dicas',
  description: 'Explore nossos artigos sobre ervas medicinais, seus benefícios, usos terapêuticos e como cultivá-las. Conhecimento natural para sua saúde.',
  keywords: ['artigos ervas medicinais', 'guias plantas medicinais', 'blog ervas medicinais'],
};

export default function ArticlesPage() {
  const articles = getArticles();
  const categories = getCategories();
  
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Artigos sobre Ervas Medicinais</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubra o poder das ervas medicinais através de nossos artigos informativos e guias práticos.
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Pesquisar artigos..."
                className="pl-10 py-6 text-base"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Categorias</h2>
                
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start" asChild>
                    <Link href="/artigos">Todos os Artigos</Link>
                  </Button>
                  
                  {categories.map((category) => (
                    <Button 
                      key={category} 
                      variant="ghost" 
                      className="justify-start"
                      asChild
                    >
                      <Link href={`/categorias/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                        {category}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <article key={article.id} className="group">
                    <Link href={`/artigos/${article.slug}`}>
                      <div className="relative overflow-hidden rounded-xl h-56 mb-4">
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <Badge className="text-xs font-medium">{article.category}</Badge>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href={`/artigos/${article.slug}`} className="block group-hover:text-primary transition-colors">
                      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    </Link>
                    
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {format(new Date(article.date), 'dd MMM yyyy', { locale: ptBR })}
                      
                      <span className="mx-2">•</span>
                      
                      <div className="flex items-center">
                        <span className="mr-1">Por</span>
                        <span className="font-medium">{article.author.name}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <Button variant="outline" asChild>
                      <Link href={`/artigos/${article.slug}`}>
                        Ler artigo
                      </Link>
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}