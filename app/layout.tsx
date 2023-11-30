import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Layout } from './lib/definitions';

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
