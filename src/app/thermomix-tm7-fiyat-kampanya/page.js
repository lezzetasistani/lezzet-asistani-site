import SiteHeader from '../components/SiteHeader';
import TM7CampaignSection from '../components/TM7CampaignSection';
import ConsultantSection from '../components/ConsultantSection';
import TM7CampaignDetailSection from '../components/TM7CampaignDetailSection';
import SiteFooter from '../components/SiteFooter';

const campaignTitle =
  'Thermomix TM7 Fiyatı ve Kasım 2026 Fırsatı';

const campaignDescription =
  'TM7 89.990₺, vade farksız 9 taksit. 1–30 Kasım 2026: ek karıştırma kabı kupon koduyla 15.290₺ yerine 6.000₺. Ayrıca 3 aylık Cookidoo® üyeliği ücretsiz.';

export const metadata = {
  title: campaignTitle,

  description: campaignDescription,

  alternates: {
    canonical: '/thermomix-tm7-fiyat-kampanya',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.lezzetasistani.com/thermomix-tm7-fiyat-kampanya',
    siteName: 'Lezzet Asistanı',

    title: campaignTitle,

    description: campaignDescription,

    images: [
      {
        url: 'https://www.lezzetasistani.com/tm7-kampanya.jpg',
        alt: 'Thermomix TM7 Kasım 2026 kampanyası: 9 taksit ve ek karıştırma kabı kupon koduyla 6.000₺',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: campaignTitle,

    description: campaignDescription,

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