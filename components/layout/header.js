"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Artigos', href: '/artigos' },
  { name: 'Categorias', href: '/categorias' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Ervas Medicinais</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href 
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Right-side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Search bar */}
        {isSearchOpen && (
          <div className="pt-4 animate-fade-down">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Pesquisar ervas, benefícios, receitas..."
                className="pl-10"
              />
            </div>
          </div>
        )}
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-down">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium px-3 py-2 rounded-md transition-colors",
                    pathname === item.href 
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}