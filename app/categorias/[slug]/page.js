import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getArticlesByCategory, getCategories } from '@/lib/articles';

// Map de categorias para títulos e descrições
const categoryMeta = {
  'guias': {
    title: 'Guias Completos de Ervas Medicinais',
    description: 'Guias detalhados sobre identificação, usos e preparação de ervas medicinais. Aprenda tudo sobre fitoterapia e medicina natural.',
    image: 'https://images.pexels.com/photos/6157228/pexels-photo-6157228.jpeg'
  },
  'saude-mental': {
    title: 'Ervas Medicinais para Saúde Mental',
    description: 'Descubra ervas medicinais que ajudam a aliviar ansiedade, estresse e melhoram o bem-estar mental. Alternativas naturais para a saúde emocional.',
    image: 'https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg'
  },
  'digestao': {
    title: 'Ervas Medicinais para Digestão',
    description: 'Conheça plantas que auxiliam na digestão e aliviam desconfortos estomacais e intestinais. Remédios naturais para o sistema digestivo.',
    image: 'https://images.pexels.com/photos/5945822/pexels-photo-5945822.jpeg'
  },
  'sono': {
    title: 'Ervas Medicinais para o Sono',
    description: 'Ervas com propriedades relaxantes que ajudam a melhorar a qualidade do sono e combater a insônia naturalmente.',
    image: 'https://images.pexels.com/photos/5472282/pexels-photo-5472282.jpeg'
  },
  'cultivo': {
    title: 'Cultivo de Ervas Medicinais',
    description: 'Aprenda como cultivar, colher e preservar ervas medicinais em casa. Guias práticos para seu jardim medicinal.',
    image: 'https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg'
  },
  'imunidade': {
    title: 'Ervas Medicinais para Imunidade',
    description: 'Plantas que fortalecem o sistema imunológico e aumentam a resistência do organismo contra doenças.',
    image: 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg'
  }
};

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const categories = getCategories();
  
  // Find the original category name by comparing slugs
  let categoryName = null;
  for (const category of categories) {
    if (category.toLowerCase().replace(/\s+/g, '-') === slug) {
      categoryName = category;
      break;
    }
  }
  
  if (!categoryName) {
    return {
      title: 'Categoria não encontrada',
    };
  }
  
  const meta = categoryMeta[slug] || {
    title: `Ervas Medicinais para ${categoryName}`,
    description: `Artigos sobre ervas medicinais relacionadas a ${categoryName.toLowerCase()}. Conheça os benefícios e usos destas plantas.`
  };
  
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function CategoryPage({ params }) {
  const slug = params.slug;
  const categories = getCategories();
  
  // Find the original category name by comparing slugs
  let categoryName = null;
  for (const category of categories) {
    if (category.toLowerCase().replace(/\s+/g, '-') === slug) {
      categoryName = category;
      break;
    }
  }
  
  if (!categoryName) {
    notFound();
  }
  
  const articles = getArticlesByCategory(categoryName);
  const meta = categoryMeta[slug] || {
    title: `Ervas Medicinais para ${categoryName}`,
    description: `Artigos sobre ervas medicinais relacionadas a ${categoryName.toLowerCase()}. Conheça os benefícios e usos destas plantas.`,
    image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg'
  };
  
  return (
    <>
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={meta.image}
            alt={categoryName}
            fill
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" size="sm" className="mb-8 bg-white/20 text-white border-white/30 hover:bg-white/30" asChild>
            <Link href="/categorias" className="flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Todas as categorias
            </Link>
          </Button>
          
          <div className="max-w-2xl">
            <Badge className="mb-4 text-sm">{categoryName}</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              {meta.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {meta.description}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">Nenhum artigo encontrado</h2>
              <p className="text-muted-foreground mb-6">
                Ainda não temos artigos nesta categoria, mas estamos trabalhando nisso!
              </p>
              <Button asChild>
                <Link href="/artigos">Ver todos os artigos</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          )}
        </div>
      </section>
    </>
  );
}