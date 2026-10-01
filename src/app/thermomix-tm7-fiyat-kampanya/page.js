import SiteHeader from '../components/SiteHeader';
import TM7CampaignSection from '../components/TM7CampaignSection';
import ConsultantSection from '../components/ConsultantSection';
import TM7CampaignDetailSection from '../components/TM7CampaignDetailSection';
import SiteFooter from '../components/SiteFooter';

const campaignTitle =
  'Thermomix TM7 Fiyatı ve Ekim 2026 Sonbahar Fırsatı';

const campaignDescription =
  'TM7 89.990₺, tüm kredi kartlarına vade farksız 6 taksit. 1–31 Ekim: Kesme Aparatı+ ve 3 Yıl Ek Garanti paketi kupon koduyla 22.990₺ yerine 3.500₺.';

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
        alt: 'Thermomix TM7 Ekim 2026 Sonbahar Fırsatı, fiyat ve kampanya avantajları',
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