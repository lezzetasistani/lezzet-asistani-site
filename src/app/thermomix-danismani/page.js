
import AboutUsSection from '../components/AboutUsSection';
import ConsultantSection from '../components/ConsultantSection';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';


export const metadata = {
  title: 'Thermomix Danışmanı | TM7 Satış ve Kullanım Desteği',

  description:
    'Thermomix TM7 hakkında ürün tanıtımı, güncel kampanyalar, satın alma süreci ve satış sonrası kullanım desteği alın. Thermomix danışmanınızla iletişime geçin.',

  alternates: {
    canonical: '/thermomix-danismani',
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lezzetasistani.com/thermomix-danismani',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix Danışmanı | TM7 Satış ve Kullanım Desteği',

    description:
      'Thermomix TM7 ürün tanıtımı, güncel kampanyalar, satın alma süreci ve satış sonrası kullanım desteği hakkında bilgi alın.',

    images: [
      {
        url: 'https://lezzetasistani.com/tm7-kampanya.jpg',
        width: 1200,
        height: 630,
        alt: 'Lezzet Asistanı Thermomix TM7 danışmanlığı',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix Danışmanı | TM7 Satış ve Kullanım Desteği',

    description:
      'Thermomix TM7 ürün tanıtımı, satın alma süreci ve satış sonrası kişisel danışmanlık desteği hakkında bilgi alın.',

    images: ['https://lezzetasistani.com/tm7-kampanya.jpg'],
  },
};


export default function ThermomixDanismaniPage() {
  return (
    <>
      <SiteHeader />

      <main className="advisorPage">
       <AboutUsSection headingLevel="h1" />
        <ConsultantSection />
      </main>

      <SiteFooter />
    </>
  );
}