import './globals.css';

export const metadata = {
  title: 'Lezzet Asistanı | Thermomix Danışmanlığı',
  description: 'Thermomix TM7 hakkında bilgi alın, kampanyaları inceleyin, ücretsiz demo talep edin ve Doğukan Yıldız’dan kişisel danışmanlık desteği alın.',
  keywords: ['Thermomix danışmanı', 'Thermomix TM7', 'Thermomix kampanya', 'Thermomix demo', 'Thermomix İstanbul', 'Lezzet Asistanı'],
  openGraph: {
    title: 'Lezzet Asistanı | Thermomix Danışmanlığı',
    description: 'Thermomix TM7 danışmanlığı, tarifler, kampanyalar ve mutfak ipuçları.',
    url: 'https://lezzetasistani.com',
    siteName: 'Lezzet Asistanı',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
