import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from '@/lib/providers';
import Head from 'next/head';

// const yekan = localFont({
//   src: './fonts/BYekan+.ttf',
//   variable: '--font-yekan',
//   weight: '400',
// });
// const yekanBold = localFont({
//   src: './fonts/BYekan+ Bold.ttf',
//   variable: '--font-yekan-bold',
//   weight: '700',
// });

const yekanBakh = localFont({
  src: [
    {
      path: '/fonts/YekanBakh-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Fat.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Hairline.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/YekanBakh-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'به‌نوبه',
  description: 'سامانه جامع خدمات آنلاین پزشکی و درمانی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`antialiased ${yekanBakh.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
