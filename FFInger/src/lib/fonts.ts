import { NextFont } from 'next/dist/compiled/@next/font';
import { Inter, Mulish } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
