import SEO from '@/components/SEO';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import '../globals.css';
import { AOSInit } from './aos';

const DMSans = localFont({
  src: '../fonts/DMSans-VariableFont.ttf',
  variable: '--font-dm-sans',
  weight: '400 500 600 700',
});

export const metadata: Metadata = {
  title: 'Lucas Alvarenga | Android Engineer',
  description: 'Sou um desenvolvedor Android autodidata, com 5 anos de experiência criando aplicativos de alta qualidade. Tenho uma forte habilidade em projetar, desenvolver e testar apps Android, além de um conhecimento sólido em linguagens de programação, bibliotecas e frameworks essenciais para o ecossistema.',
  keywords: 'android-developer, android-engineer, kotlin'
};

type Languages = 'en' | 'pt';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <SEO
          title="Lucas Alvarenga | Android Engineer"
          description="Sou um desenvolvedor Android autodidata, com 5 anos de experiência criando aplicativos de alta qualidade. Tenho uma forte habilidade em projetar, desenvolver e testar apps Android, além de um conhecimento sólido em linguagens de programação, bibliotecas e frameworks essenciais para o ecossistema."
          url="https://www.alvarenga.dev/"
          image="/images/aboutMe.png"
          keywords="android-developer, android-engineer, kotlin"
          author="Mavue Dev e Tg Dev"
        />

        <AOSInit />
        <body className={`${DMSans.variable} antialiased`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
