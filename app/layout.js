import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Ervas Medicinais - Guia Completo de Benefícios e Usos',
    template: '%s | Ervas Medicinais'
  },
  description: 'Descubra os benefícios e usos das ervas medicinais. Guia completo sobre cultivo, preparação e aplicações terapêuticas das plantas medicinais.',
  keywords: ['ervas medicinais', 'plantas medicinais', 'fitoterapia', 'remédios naturais', 'saúde natural', 'ervas para ansiedade', 'ervas digestivas', 'ervas para dormir', 'cultivo de ervas'],
  authors: [{ name: 'Ervas Medicinais Brasil' }],
  creator: 'Ervas Medicinais Brasil',
  publisher: 'Ervas Medicinais Brasil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ervas-medicinais.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ervas Medicinais - Guia Completo de Benefícios e Usos',
    description: 'Descubra os benefícios e usos das ervas medicinais. Guia completo sobre cultivo, preparação e aplicações terapêuticas das plantas medicinais.',
    url: 'https://ervas-medicinais.com.br',
    siteName: 'Ervas Medicinais',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ervas Medicinais Brasil',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ervas Medicinais - Guia Completo de Benefícios e Usos',
    description: 'Descubra os benefícios e usos das ervas medicinais. Guia completo sobre cultivo, preparação e aplicações terapêuticas das plantas medicinais.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="ipo-t2tyN_EibG0hmzkGKKoSsYZlNNSVE6XliROXNKo"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}