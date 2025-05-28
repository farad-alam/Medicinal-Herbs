"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Utensils, 
  Moon, 
  Sprout,
  Shield,
  BookOpen,
  Heart,
  Leaf
} from 'lucide-react';

const categories = [
  {
    name: 'Guias',
    description: 'Guias completos sobre ervas medicinais',
    icon: BookOpen,
    slug: 'guias',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
  },
  {
    name: 'Saúde Mental',
    description: 'Ervas para ansiedade e estresse',
    icon: Brain,
    slug: 'saude-mental',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
  },
  {
    name: 'Digestão',
    description: 'Ervas para o sistema digestivo',
    icon: Utensils,
    slug: 'digestao',
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
  },
  {
    name: 'Sono',
    description: 'Ervas para melhorar o sono',
    icon: Moon,
    slug: 'sono',
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
  },
  {
    name: 'Cultivo',
    description: 'Como cultivar ervas em casa',
    icon: Sprout,
    slug: 'cultivo',
    color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
  },
  {
    name: 'Imunidade',
    description: 'Ervas para o sistema imunológico',
    icon: Shield,
    slug: 'imunidade',
    color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
  },
  {
    name: 'Circulação',
    description: 'Ervas para saúde cardiovascular',
    icon: Heart,
    slug: 'circulacao',
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
  },
  {
    name: 'Beleza Natural',
    description: 'Ervas para cuidados com a pele',
    icon: Leaf,
    slug: 'beleza-natural',
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
  }
];

export default function CategoryGrid() {
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
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {categories.map((category) => {
        const Icon = category.icon;
        
        return (
          <motion.div 
            key={category.slug}
            className="group"
            variants={itemVariants}
            whileHover="hover"
          >
            <Link href={`/categorias/${category.slug}`}>
              <div className="bg-card rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col items-center text-center">
                <div className={`p-3 rounded-full ${category.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="text-primary text-sm font-medium mt-auto">
                  Explorar categoria
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}