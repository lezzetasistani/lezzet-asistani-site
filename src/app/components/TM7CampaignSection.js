'use client';

import Link from 'next/link';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29';

export default function TM7CampaignSection({
  onContact,
  showDetailLink = true,
}) {
  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="tm7CampaignHero">
      <div className="tm7CampaignHeroText">
        <span className="tm7CampaignHeroBadge">
          🎁 Kasım 2026 Fırsatı
        </span>

        <h1>
          Thermomix TM7
          <strong> fiyat ve kampanyaları</strong>
        </h1>

        <p>
          En sevilen kampanya geri döndü! 1–30 Kasım tarihleri
          arasında Thermomix TM7 satın alımında ek karıştırma kabı
          avantajını ve vade farksız 9 taksit seçeneğini inceleyin.
        </p>

        <div className="tm7CampaignPriceBox">
          <span>Güncel TM7 fiyatı</span>
          <strong>89.990₺</strong>
          <small>Vade farksız 9 taksit seçeneği</small>
        </div>

        <div className="tm7CampaignHeroBenefits">
          <span>
            ✓ Thermomix® Karıştırma Kabı, kupon koduyla
            15.290₺ yerine 6.000₺
          </span>
          <span>✓ 3 aylık Cookidoo® üyeliği ücretsiz</span>
          <span>✓ Kampanya stoklarla sınırlı</span>
          <span>✓ Satın alım yalnızca resmî Vorwerk sitesi üzerinden</span>
          <span>✓ Satın alma öncesi ve sonrası danışman desteği</span>
        </div>

        <div className="tm7CampaignHeroActions">
          <button
            type="button"
            className="tm7CampaignPrimary"
            onClick={handleContact}
          >
            <img src="/whatsapp-icon.png" alt="" />
            WhatsApp’tan Bilgi Al
          </button>

          <button
            type="button"
            className="tm7CampaignSecondary"
            onClick={handleContact}
          >
            Kampanya Detaylarını Sor
          </button>
        </div>

        {showDetailLink && (
          <Link
            href="/thermomix-tm7-fiyat-kampanya"
            className="seoDetailLink"
          >
            Thermomix TM7 güncel kampanyalarını inceleyin →
          </Link>
        )}

        <small className="tm7CampaignDisclaimer">
          Kampanya 1–30 Kasım 2026 tarihleri arasında geçerlidir.
          Ek karıştırma kabı, TM7 fiyatına ek olarak kupon koduyla
          6.000₺ karşılığında alınabilir. Kampanya stoklarla sınırlıdır
          ve farklı kampanyalarla birleştirilemez. Kampanya koşulları
          ve kupon kodu detayları için iletişime geçebilirsiniz.
        </small>
      </div>

      <div className="tm7CampaignHeroVisual">
        <div className="tm7CampaignHeroLabel">
          🎁 En Sevilen Kampanya Geri Döndü!
        </div>

        <img
          src="/tm7-kampanya.jpg"
          alt="Thermomix TM7 Kasım 2026 kampanyası: vade farksız 9 taksit ve ek karıştırma kabı kupon koduyla 6.000₺"
        />
      </div>
    </section>
  );
}