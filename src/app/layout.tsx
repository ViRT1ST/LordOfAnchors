import {
  Open_Sans,
  Lato,
  Roboto,
  Sofia_Sans,
  Rubik,
  Libre_Franklin,
  Inter,
  Noto_Sans_Display
} from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import './globals.css';

import ModalContaner from '@/components/[body-children]/modal-container';

export const metadata: Metadata = {
  title: 'Lord of the Links',
};

const open_sans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-open-sans',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-lato',
});

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-roboto',
});

const sofia_sans = Sofia_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400', '500'],
  display: 'swap',
  variable: '--font-sofia-sans',
});

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400', '500'],
  display: 'swap',
  variable: '--font-rubik',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300','400', '500'],
  display: 'swap',
  variable: '--font-librefranklin',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400', '500'],
  display: 'swap',
  variable: '--font-notosansdisplay',
});

const rootLayoutClasses = [
  open_sans.variable,
  lato.variable,
  roboto.variable,
  sofia_sans.variable,
  rubik.variable,
  GeistSans.variable, 
  GeistMono.variable,
  // 'overflow-y-scroll',
  'overflow-hidden',
  'antialiased',
  'bg-[#E4E4E4]',
  libreFranklin.variable,
  inter.variable,
  notoSansDisplay.variable
].join(' ');

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={rootLayoutClasses}>
        {children}
        <ModalContaner />
      </body>
    </html>
  );
}
