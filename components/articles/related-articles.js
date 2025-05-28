import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';

export default function RelatedArticles({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article key={article.id} className="group">
          <Link href={`/artigos/${article.slug}`}>
            <div className="relative overflow-hidden rounded-xl h-48 mb-4">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <Badge className="text-xs font-medium">{article.category}</Badge>
              </div>
            </div>
          </Link>
          
          <Link href={`/artigos/${article.slug}`} className="block group-hover:text-primary transition-colors">
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
          </Link>
          
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            {format(new Date(article.date), 'dd MMM yyyy', { locale: ptBR })}
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {article.excerpt}
          </p>
        </article>
      ))}
    </div>
  );
}