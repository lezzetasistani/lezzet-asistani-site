import SiteHeader from '../components/SiteHeader';
import TM7FunctionsSection from '../components/TM7FunctionsSection';
import ConsultantSection from '../components/ConsultantSection';
import SiteFooter from '../components/SiteFooter';
import TM7FunctionsDetailSection from '../components/TM7FunctionsDetailSection';

export const metadata = {
  title: 'Thermomix TM7 Fonksiyonları ve Modları',

  description:
    'Thermomix TM7 fonksiyonlarını ve otomatik modlarını inceleyin. Karıştırma, buharda pişirme, yoğurma, yavaş pişirme, vakumda pişirme, turbo ve daha fazlasını keşfedin.',

  alternates: {
    canonical: '/thermomix-tm7-fonksiyonlari',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.lezzetasistani.com/thermomix-tm7-fonksiyonlari',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Fonksiyonları ve Modları',

    description:
      'Thermomix TM7 fonksiyonlarını ve otomatik modlarını keşfedin. Pişirme, hazırlık ve temizlik özelliklerini detaylı inceleyin.',

    images: [
      {
        url: 'https://www.lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM7 fonksiyonları ve otomatik modları',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Fonksiyonları ve Modları',

    description:
      'Thermomix TM7 fonksiyonlarını, otomatik modlarını ve kullanım özelliklerini detaylı inceleyin.',

    images: ['https://www.lezzetasistani.com/tm7-kampanya.jpg'],
  },
};

export default function ThermomixTM7FunctionsPage() {
  return (
    <>
      <SiteHeader />

     <main className="advisorPage">
  <TM7FunctionsSection showDetailLink={false} />
  <TM7FunctionsDetailSection />
</main>

      <ConsultantSection />
      <SiteFooter />
    </>
  );
}