import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          Oops! A página que você está procurando parece ter sido colhida antes do tempo ou plantada em outro lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              Voltar ao Início
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/artigos">
              Explorar Artigos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}