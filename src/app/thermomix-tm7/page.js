import SiteHeader from '../components/SiteHeader';
import TM7AboutSection from '../components/TM7AboutSection';
import ConsultantSection from '../components/ConsultantSection';
import SiteFooter from '../components/SiteFooter';
import TM7DetailSection from '../components/TM7DetailSection';

export const metadata = {
  title: 'Thermomix TM7 Nedir? Özellikleri ve Fonksiyonları',

  description:
    'Thermomix TM7 nedir, hangi özelliklere sahiptir ve neler yapabilir? TM7 fonksiyonları, Cookidoo, kullanım özellikleri ve danışmanlık desteğini inceleyin.',

  alternates: {
    canonical: '/thermomix-tm7',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lezzetasistani.com/thermomix-tm7',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Nedir? Özellikleri ve Fonksiyonları',

    description:
      'Thermomix TM7 özelliklerini, fonksiyonlarını, Cookidoo entegrasyonunu ve kullanım avantajlarını keşfedin.',

    images: [
      {
        url: 'https://lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM7 özellikleri ve fonksiyonları',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Nedir? Özellikleri ve Fonksiyonları',

    description:
      'Thermomix TM7 özelliklerini, fonksiyonlarını, Cookidoo entegrasyonunu ve kullanım avantajlarını keşfedin.',

    images: ['https://lezzetasistani.com/tm7-kampanya.jpg'],
  },
};

export default function ThermomixTM7Page() {
  return (
    <>
      <SiteHeader />

      <main>
  <TM7AboutSection showDetailLink={false} />
  <TM7DetailSection />
  <ConsultantSection />
</main>

      <SiteFooter />
    </>
  );
}
