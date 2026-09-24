import type { Metadata } from 'next';
import Site from '@/components/site';

export const metadata: Metadata = {
  "title": "Наши кейсы — AAA service",
  "description": "Клининг, инженерные системы и комплексное обслуживание недвижимости. Опыт AAA service с 2007 года. Астана."
};

export default function Page() {
  return <Site page="cases" locale="ru" />;
}
