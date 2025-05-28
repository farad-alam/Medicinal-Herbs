import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary">
              Ervas Medicinais
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Compartilhando conhecimento sobre o poder curativo das plantas e promovendo a saúde natural através das ervas medicinais.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/artigos" className="text-muted-foreground hover:text-primary transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="text-muted-foreground hover:text-primary transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Receba novidades sobre ervas medicinais e dicas de saúde natural.
            </p>
            <div className="space-y-3">
              <Input placeholder="Seu email" />
              <Button className="w-full">Inscrever-se</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ervas Medicinais. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}