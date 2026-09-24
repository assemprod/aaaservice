import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aaaservice.corparationsite.workers.dev'),
  title: 'AAA service — клининг и обслуживание недвижимости в Астане',
  description: 'Профессиональная уборка, инженерное сопровождение и комплексное обслуживание объектов. AAA service: работаем с 2007 года, более 100 специалистов.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="ru"><body>{children}</body></html>;
}
