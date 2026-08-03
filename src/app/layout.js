import './globals.css';
import Script from "next/script";

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

      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18368327858"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18368327858');
          `}
        </Script>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}