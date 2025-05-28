"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function FeaturedArticles({ articles }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {articles.map((article, index) => (
        <motion.div 
          key={article.id}
          className="group"
          variants={itemVariants}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link href={`/artigos/${article.slug}`}>
            <div className="relative overflow-hidden rounded-xl h-64 mb-4">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className={cn(
                  "object-cover transition-transform duration-500",
                  hoveredIndex === index && "scale-105"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <Badge className="text-xs font-medium">{article.category}</Badge>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {format(new Date(article.date), 'dd MMM yyyy', { locale: ptBR })}
                </div>
              </div>
            </div>
          </Link>
          
          <p className="text-muted-foreground line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          
          <Link 
            href={`/artigos/${article.slug}`}
            className="inline-flex items-center text-primary font-medium text-sm group"
          >
            Ler mais 
            <ChevronRight className={cn(
              "h-4 w-4 ml-1 transition-transform",
              hoveredIndex === index && "transform translate-x-1"
            )} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}