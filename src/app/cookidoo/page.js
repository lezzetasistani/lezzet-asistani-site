import SiteHeader from '../components/SiteHeader';
import CookidooSection from '../components/CookidooSection';
import ConsultantSection from '../components/ConsultantSection';
import SiteFooter from '../components/SiteFooter';
import CookidooDetailSection from '../components/CookidooDetailSection';

export const metadata = {
  title: 'Cookidoo Nedir? Thermomix Tarif Platformu',

  description:
    'Cookidoo nedir, nasıl kullanılır ve Thermomix TM7 ile nasıl çalışır? Rehberli Pişirme, tarif arşivi, haftalık planlama ve alışveriş listesi özelliklerini inceleyin.',

  alternates: {
    canonical: '/cookidoo',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.lezzetasistani.com/cookidoo',
    siteName: 'Lezzet Asistanı',

    title: 'Cookidoo Nedir? Thermomix Tarif Platformu',

    description:
      'Cookidoo tarif platformunu, Rehberli Pişirme özelliğini, tarif arşivini, haftalık planlama ve alışveriş listesi özelliklerini keşfedin.',

    images: [
      {
        url: 'https://www.lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Cookidoo Thermomix tarif platformu ve Rehberli Pişirme',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Cookidoo Nedir? Thermomix Tarif Platformu',

    description:
      'Cookidoo tarif platformunu, Rehberli Pişirme özelliğini, tarif arşivini ve planlama özelliklerini keşfedin.',

    images: ['https://www.lezzetasistani.com/tm7-kampanya.jpg'],
  },
};

export default function CookidooPage() {
  return (
    <>
      <SiteHeader />

      <main className="advisorPage">
  <CookidooSection showDetailLink={false} />
  <CookidooDetailSection />
</main>

      <ConsultantSection />
      <SiteFooter />
    </>
  );
}