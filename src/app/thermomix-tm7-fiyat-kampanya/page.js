import SiteHeader from '../components/SiteHeader';
import TM7CampaignSection from '../components/TM7CampaignSection';
import ConsultantSection from '../components/ConsultantSection';
import TM7CampaignDetailSection from '../components/TM7CampaignDetailSection';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Thermomix TM7 Fiyatı ve Eylül 2026 Kampanyaları',

  description:
    'Thermomix TM7 fiyatı 89.990₺. Eylül 2026 kampanyasında 5.000₺ Migros çeki, Thermomix Yemek Takımı avantajı, 3 aylık ücretsiz Cookidoo® üyeliği ve vade farksız 6 taksit seçeneklerini inceleyin.',

  alternates: {
    canonical: '/thermomix-tm7-fiyat-kampanya',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.lezzetasistani.com/thermomix-tm7-fiyat-kampanya',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Fiyatı ve Eylül 2026 Kampanyaları',

    description:
      'Thermomix TM7 fiyatı 89.990₺. Eylül 2026 kampanyasında 5.000₺ Migros çeki, Thermomix Yemek Takımı, 3 aylık ücretsiz Cookidoo® üyeliği ve vade farksız 6 taksit avantajlarını inceleyin.',

    images: [
      {
        url: 'https://www.lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM7 Eylül 2026 fiyat ve kampanyaları',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Fiyatı ve Eylül 2026 Kampanyaları',

    description:
      'Thermomix TM7 fiyatı 89.990₺. Eylül 2026 kampanyasında 5.000₺ Migros çeki, Thermomix Yemek Takımı, ücretsiz Cookidoo® üyeliği ve vade farksız 6 taksit avantajlarını inceleyin.',

    images: ['https://www.lezzetasistani.com/tm7-kampanya.jpg'],
  },
};

export default function ThermomixTM7FiyatKampanyaPage() {
  return (
    <>
      <SiteHeader />

      <main className="advisorPage">
        <TM7CampaignSection showDetailLink={false} />
        <TM7CampaignDetailSection />
      </main>

      <ConsultantSection />
      <SiteFooter />
    </>
  );
}