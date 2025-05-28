import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Markdown from 'markdown-to-jsx';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import ArticleShareButtons from '@/components/articles/article-share-buttons';
import RelatedArticles from '@/components/articles/related-articles';

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Artigo não encontrado',
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  const relatedArticles = getRelatedArticles(params.slug);
  const readingTime = Math.ceil(article.content.split(' ').length / 225); // Rough estimate of reading time
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link
              href="/artigos"
              className="flex items-center text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Voltar para artigos
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <Link
              href={`/categorias/${article.category
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <Button variant="outline" size="sm" className="gap-1.5">
                <Tag className="h-3.5 w-3.5" />
                {article.category}
              </Button>
            </Link>
          </div>
          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={article.author.avatar}
                  alt={article.author.name}
                />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{article.author.name}</span>
            </div>

            <Separator orientation="vertical" className="h-4" />

            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(article.date), "dd MMM yyyy", {
                  locale: ptBR,
                })}
              </span>
            </div>

            <Separator orientation="vertical" className="h-4" />

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min de leitura</span>
            </div>
          </div>
        </div>

        
        {/* Article Thumbnail */}
        <div className="relative aspect-[16/9] mb-10 rounded-xl overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="article-content prose-lg max-w-none mb-12">
          <Markdown>{article.content}</Markdown>
        </article>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
              />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Escrito por</p>
              <p className="font-medium">{article.author.name}</p>
            </div>
          </div>

          <ArticleShareButtons
            title={article.title}
            url={`https://ervas-medicinais.com.br/artigos/${article.slug}`}
          />
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
            <RelatedArticles articles={relatedArticles} />
          </div>
        )}
      </div>
    </div>
  );
}