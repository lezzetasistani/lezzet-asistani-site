import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://lezzetasistani.com'),

  title: {
    default: 'Thermomix TM7 Danışmanı | Lezzet Asistanı',
    template: '%s | Lezzet Asistanı',
  },

  description:
    'Thermomix TM7 özellikleri, güncel kampanyalar, Cookidoo, ücretsiz tanıtım ve satın alma süreci hakkında bilgi alın. Thermomix danışmanı Doğukan Yıldız ile iletişime geçin.',

  applicationName: 'Lezzet Asistanı',

  keywords: [
    'Thermomix TM7',
    'Thermomix TM7 fiyat',
    'Thermomix TM7 kampanya',
    'Thermomix danışmanı',
    'Thermomix Türkiye',
    'Thermomix İstanbul',
    'Thermomix demo',
    'Thermomix TM7 özellikleri',
    'Thermomix TM7 fonksiyonları',
    'Thermomix TM7 kutu içeriği',
    'Cookidoo',
    'Lezzet Asistanı',
  ],

  authors: [
    {
      name: 'Doğukan Yıldız',
      url: 'https://lezzetasistani.com',
    },
  ],

  creator: 'Doğukan Yıldız',
  publisher: 'Lezzet Asistanı',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://lezzetasistani.com',
    siteName: 'Lezzet Asistanı',

    title: 'Thermomix TM7 Danışmanı | Lezzet Asistanı',

    description:
      'Thermomix TM7 özellikleri, güncel kampanyalar, Cookidoo, ücretsiz tanıtım ve kişisel danışmanlık desteği.',

    images: [
  {
    url: 'https://lezzetasistani.com/tm7-kampanya.jpg',
    width: 1200,
    height: 630,
    alt: 'Lezzet Asistanı - Thermomix TM7 Danışmanlığı',
  },
],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Thermomix TM7 Danışmanı | Lezzet Asistanı',

    description:
      'Thermomix TM7 özellikleri, kampanyalar, Cookidoo ve kişisel danışmanlık desteği.',

    images: ['https://lezzetasistani.com/tm7-kampanya.jpg'],
  },

  category: 'food',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://lezzetasistani.com/#website',
  url: 'https://lezzetasistani.com',
  name: 'Lezzet Asistanı',
  description:
    'Thermomix TM7 özellikleri, güncel kampanyalar, Cookidoo ve bağımsız Thermomix danışmanlığı hakkında bilgi.',
  inLanguage: 'tr-TR',
  publisher: {
    '@id': 'https://lezzetasistani.com/#business',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://lezzetasistani.com/#dogukan-yildiz',
  name: 'Doğukan Yıldız',
  jobTitle: 'Thermomix Bağımsız Danışmanı',
  url: 'https://lezzetasistani.com',
  sameAs: [
    'https://instagram.com/lezzetasistani',
    'https://www.youtube.com/@LezzetAsistani',
    'https://www.tiktok.com/@thermo.lezzetasistani',
  ],
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://lezzetasistani.com/#business',
  name: 'Lezzet Asistanı',
  url: 'https://lezzetasistani.com',
  logo: 'https://lezzetasistani.com/logo.png',
  image: 'https://lezzetasistani.com/tm7-kampanya.jpg',
  telephone: '+905016923135',

  contactPoint: {
  '@type': 'ContactPoint',
  telephone: '+905016923135',
  contactType: 'customer support',
  areaServed: 'TR',
  availableLanguage: ['Turkish'],
},

  description:
    'Thermomix TM7 tanıtımı, kampanya bilgilendirmesi, satın alma süreci ve satış sonrası kullanım desteği sunan bağımsız danışmanlık platformu.',
  founder: {
    '@id': 'https://lezzetasistani.com/#dogukan-yildiz',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Türkiye',
  },
  sameAs: [
    'https://instagram.com/lezzetasistani',
    'https://www.youtube.com/@LezzetAsistani',
    'https://www.tiktok.com/@thermo.lezzetasistani',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(businessSchema),
  }}
/>

        {/* GOOGLE TAG MANAGER */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);

            })(window,document,'script','dataLayer','GTM-NH6GFHCT');
          `}
        </Script>


        {/* MEVCUT GOOGLE ADS ETİKETİN */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18368327858"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'AW-18368327858');
          `}
        </Script>


        {/* GOOGLE ADS DÖNÜŞÜM FONKSİYONU */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function (url) {

              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              window.gtag('event', 'conversion', {
                'send_to': 'AW-18368327858/Ux-cCMLZm9scELLh2bZE',
                'value': 1.0,
                'currency': 'TRY',
                'event_callback': callback
              });

              return false;
            };
          `}
        </Script>

      </head>

      <body>

        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NH6GFHCT"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>

        {children}

      </body>
    </html>
  );
}