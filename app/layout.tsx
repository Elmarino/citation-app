import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/src/components/header';
import localFont from 'next/font/local';
import { Footer } from '@/src/components/footer';

const hedvig = localFont({
  src: '../public/fonts/HedvigLettersSerif-Regular.otf',
  variable: '--font-hedvig',
  display: 'swap'
});

const uncut = localFont({
  src: '../public/fonts/UncutSans-Variable.ttf',
  variable: '--font-uncut',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-black ${hedvig.variable} ${uncut.variable} antialiased`}
    >
      <body
        className={`bg-black ${hedvig.variable} ${uncut.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
