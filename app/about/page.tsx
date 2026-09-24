import type { Metadata } from 'next';
import Site from '@/components/site';

export const metadata: Metadata = {
  "title": "О компании — AAA service",
  "description": "Клининг, инженерные системы и комплексное обслуживание недвижимости. Опыт AAA service с 2007 года. Астана."
};

export default function Page() {
  return <Site page="about" locale="ru" />;
}
