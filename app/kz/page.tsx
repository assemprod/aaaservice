import type { Metadata } from 'next';
import Site from '@/components/site';

export const metadata: Metadata = {
  "title": "Клининг және жылжымайтын мүлікке қызмет көрсету — AAA service",
  "description": "2007 жылдан бері клининг, инженерлік жүйелер және нысандарға кешенді қызмет көрсету. Астана."
};

export default function Page() {
  return <Site page="home" locale="kz" />;
}
