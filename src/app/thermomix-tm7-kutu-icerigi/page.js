import SiteHeader from '../components/SiteHeader';
import TM7BoxContentsSection from '../components/TM7BoxContentsSection';
import ConsultantSection from '../components/ConsultantSection';
import SiteFooter from '../components/SiteFooter';
import TM7BoxContentsDetailSection from '../components/TM7BoxContentsDetailSection';

export const metadata = {
  title: 'Thermomix TM7 Kutu İçeriği | Kutudan Neler Çıkıyor?',

  description:
    'Thermomix TM7 kutu içeriğini inceleyin. TM7 ile birlikte gelen karıştırma kabı, Varoma, spatula, pişirme sepeti ve diğer parçalar hakkında bilgi alın.',

  alternates: {
    canonical: '/thermomix-tm7-kutu-icerigi',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lezzetasistani.com/thermomix-tm7-kutu-icerigi',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Kutu İçeriği | Kutudan Neler Çıkıyor?',

    description:
      'Thermomix TM7 ile birlikte gelen karıştırma kabı, Varoma, spatula, pişirme sepeti ve diğer parçaları inceleyin.',

    images: [
      {
        url: 'https://lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM7 kutu içeriği ve parçaları',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Kutu İçeriği | Kutudan Neler Çıkıyor?',

    description:
      'Thermomix TM7 kutu içeriğini ve cihazla birlikte gelen temel parçaları detaylı inceleyin.',

    images: ['https://lezzetasistani.com/tm7-kampanya.jpg'],
  },
};

export default function ThermomixTM7BoxPage() {
  return (
    <>
      <SiteHeader />

      <main className="advisorPage">
  <TM7BoxContentsSection showDetailLink={false} />
  <TM7BoxContentsDetailSection />
</main>

      <ConsultantSection />
      <SiteFooter />
    </>
  );
}