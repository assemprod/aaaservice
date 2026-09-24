import type { Metadata } from 'next';
import Site from '@/components/site';

export const metadata: Metadata = {
  "title": "Клининг и обслуживание недвижимости — AAA service",
  "description": "Клининг, инженерные системы и комплексное обслуживание недвижимости. Опыт AAA service с 2007 года. Астана."
};

export default function Page() {
  return <Site page="home" locale="ru" />;
}
