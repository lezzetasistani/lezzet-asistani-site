'use client';

import Link from 'next/link';

const SITE = {
  brand: 'Lezzet Asistanı',
  phoneDisplay: '0501 692 31 35',
  instagram: 'https://instagram.com/lezzetasistani',
  youtube: 'https://www.youtube.com/@LezzetAsistani',
};

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function SiteFooter({ contact }) {
  const handleContact = () => {
    if (contact) {
      contact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="professionalFooter">
      <div className="footerMain">

        <div className="footerBrand">
          <div className="footerLogoCircle">
            <img src="/logo.png" alt="Lezzet Asistanı" />
          </div>
        </div>

        <div className="footerIntro">
          <h3>
            Lezzetli anlar,
            <strong> profesyonel destekle başlar.</strong>
            <span>♥</span>
          </h3>

          <p>
            Thermomix® marka adı ilgili sahibine aittir.
            <br />
            Bu site bağımsız danışman tanıtımı için hazırlanmıştır.
          </p>

          <div className="footerConsultantBadge">
            <span>✓</span>

            <div>
              <small>Thermomix Bağımsız Danışmanı</small>
              <strong>TM101637</strong>
            </div>
          </div>
        </div>

        <div className="footerContactList">

          <button
            type="button"
            onClick={handleContact}
          >
            <span className="footerContactIcon">
              <img src="/whatsapp-icon.png" alt="" />
            </span>

            <div>
              <small>WhatsApp</small>
              <strong>WhatsApp Destek Hattı</strong>
            </div>

            <b>›</b>
          </button>

          <a
            href={`tel:+90${SITE.phoneDisplay
              .replace(/\s/g, '')
              .replace(/^0/, '')}`}
          >
            <span className="footerContactIcon footerPhoneIcon">
              ☎
            </span>

            <div>
              <small>Telefon</small>
              <strong>{SITE.phoneDisplay}</strong>
            </div>

            <b>›</b>
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <span className="footerContactIcon">
              <img src="/instagram-icon.png" alt="" />
            </span>

            <div>
              <small>Instagram</small>
              <strong>@lezzetasistani</strong>
            </div>

            <b>›</b>
          </a>

          <a
            href={SITE.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <span className="footerContactIcon footerYoutubeIcon">
              ▶
            </span>

            <div>
              <small>YouTube</small>
              <strong>Lezzet Asistanı</strong>
            </div>

            <b>›</b>
          </a>

        </div>

      </div>

      <div className="footerTrustRow">

        <div>
          <span>🛡️</span>

          <div>
            <strong>Güvenilir İletişim</strong>
            <small>Kişisel bilgileriniz güvende.</small>
          </div>
        </div>

        <div>
          <span>◷</span>

          <div>
            <strong>Hızlı Destek</strong>
            <small>Mesajlarınıza en kısa sürede dönüş.</small>
          </div>
        </div>

        <div>
          <span>✓</span>

          <div>
            <strong>Bağımsız Danışman</strong>
            <small>Size özel bilgilendirme ve yönlendirme.</small>
          </div>
        </div>

      </div>

      <div className="footerSeoNav">
        <Link href="/thermomix-tm7">
          Thermomix TM7
        </Link>

        <Link href="/thermomix-tm7-fonksiyonlari">
          TM7 Fonksiyonları
        </Link>

        <Link href="/thermomix-tm7-kutu-icerigi">
          TM7 Kutu İçeriği
        </Link>

        <Link href="/cookidoo">
          Cookidoo
        </Link>

        <Link href="/thermomix-tm7-fiyat-kampanya">
          Fiyat ve Kampanyalar
        </Link>

        <Link href="/thermomix-danismani">
          Thermomix Danışmanı
        </Link>
      </div>

      <div className="footerCopyright">
        © 2026 {SITE.brand}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}