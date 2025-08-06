import ServicePage from './ServicePage';

export async function generateStaticParams() {
  return [];
}

export default function Services() {
  return <ServicePage />;
}