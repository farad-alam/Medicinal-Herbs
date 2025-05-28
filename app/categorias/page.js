import Link from 'next/link';
import { getCategories } from '@/lib/articles';
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
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Categorias de Ervas Medicinais | Navegue por Temas',
  description: 'Explore nossas categorias de ervas medicinais organizadas por temas. Encontre informações sobre ervas para ansiedade, digestão, sono, cultivo e mais.',
};

// Map de ícones para categorias
const categoryIcons = {
  'Guias': BookOpen,
  'Saúde Mental': Brain,
  'Digestão': Utensils,
  'Sono': Moon,
  'Cultivo': Sprout,
  'Imunidade': Shield,
  'Circulação': Heart,
  'Beleza Natural': Leaf
};

// Map de cores para categorias
const categoryColors = {
  'Guias': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  'Saúde Mental': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  'Digestão': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  'Sono': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
  'Cultivo': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  'Imunidade': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  'Circulação': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
  'Beleza Natural': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
};

// Map de descrições para categorias
const categoryDescriptions = {
  'Guias': 'Guias completos sobre identificação, usos e preparação de ervas medicinais',
  'Saúde Mental': 'Ervas que ajudam a aliviar sintomas de ansiedade, estresse e promovem bem-estar mental',
  'Digestão': 'Plantas que auxiliam na digestão, aliviam desconfortos estomacais e intestinais',
  'Sono': 'Ervas com propriedades relaxantes que ajudam a melhorar a qualidade do sono',
  'Cultivo': 'Como cultivar, colher e preservar ervas medicinais em casa',
  'Imunidade': 'Plantas que fortalecem o sistema imunológico e aumentam a resistência do organismo',
  'Circulação': 'Ervas que melhoram a circulação sanguínea e a saúde cardiovascular',
  'Beleza Natural': 'Plantas para cuidados com a pele e cabelos de forma natural'
};

export default function CategoriesPage() {
  const categories = getCategories();
  
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Categorias de Ervas Medicinais</h1>
            <p className="text-xl text-muted-foreground">
              Explore nossos artigos organizados por temas específicos para encontrar exatamente o que você procura.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || BookOpen;
              const color = categoryColors[category] || 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
              const description = categoryDescriptions[category] || 'Artigos sobre ervas medicinais relacionadas a esta categoria';
              const slug = category.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <div key={category} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-full ${color} mr-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-semibold mb-2">{category}</h2>
                        <p className="text-muted-foreground">{description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-muted-foreground">
                        <span className="mr-2">•</span>
                        Artigos específicos sobre o tema
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <span className="mr-2">•</span>
                        Guias práticos e informativos
                      </li>
                      <li className="flex items-center text-muted-foreground">
                        <span className="mr-2">•</span>
                        Dicas de uso e aplicação
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto p-6 pt-0">
                    <Button className="w-full" asChild>
                      <Link href={`/categorias/${slug}`}>
                        Explorar {category}
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}