import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Good News Collective - Positive News That Matters',
  description: 'Discover inspiring, verified positive news stories from around the world. The Good News Collective curates uplifting stories that remind us of our shared humanity.',
  openGraph: {},
  keywords: ['positive news', 'good news', 'inspiring stories', 'uplifting news', 'community stories'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}