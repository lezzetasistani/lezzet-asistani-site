import SiteHeader from '../components/SiteHeader';
import TM7CampaignSection from '../components/TM7CampaignSection';
import ConsultantSection from '../components/ConsultantSection';
import TM7CampaignDetailSection from '../components/TM7CampaignDetailSection';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Thermomix TM7 Fiyatı ve Ağustos 2026 Kampanyaları',

  description:
    'Thermomix TM7 fiyatı 89.990₺. Ağustos 2026 kampanyalarını, 10.000₺ Bonus, 9.000₺ değerinde +3 yıl ek garanti ve taksit seçeneklerini inceleyin.',

  alternates: {
    canonical: '/thermomix-tm7-fiyat-kampanya',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lezzetasistani.com/thermomix-tm7-fiyat-kampanya',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Fiyatı ve Ağustos 2026 Kampanyaları',

    description:
      'Thermomix TM7 fiyatı 89.990₺. Ağustos 2026 kampanyalarını, 10.000₺ Bonus, +3 yıl ek garanti ve taksit seçeneklerini inceleyin.',

    images: [
      {
        url: 'https://lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Thermomix TM7 Ağustos 2026 fiyat ve kampanyaları',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Fiyatı ve Ağustos 2026 Kampanyaları',

    description:
      'Thermomix TM7 fiyatı 89.990₺. Ağustos 2026 kampanyalarını, Bonus, ek garanti ve taksit seçeneklerini inceleyin.',

    images: ['https://lezzetasistani.com/tm7-kampanya.jpg'],
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