import './globals.css';
import Script from "next/script";

export const metadata = {
  title: 'Lezzet Asistanı | Thermomix Danışmanlığı',
  description: 'Thermomix TM7 hakkında bilgi alın, kampanyaları inceleyin, ücretsiz demo talep edin ve Doğukan Yıldız’dan kişisel danışmanlık desteği alın.',
  keywords: [
    'Thermomix danışmanı',
    'Thermomix TM7',
    'Thermomix kampanya',
    'Thermomix demo',
    'Thermomix İstanbul',
    'Lezzet Asistanı'
  ],
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
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'AW-18368327858');
          `}
        </Script>

        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function (url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                'send_to': 'AW-18368327858/Ux-cCMLZm9scELLh2bZE',
                'value': 1.0,
                'currency': 'TRY',
                'event_callback': callback
              });

              return false;
            }
          `}
        </Script>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}