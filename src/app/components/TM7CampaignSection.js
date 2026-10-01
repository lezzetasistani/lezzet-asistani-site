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
          🍂 Ekim 2026 Sonbahar Fırsatı
        </span>

        <h1>
          Thermomix TM7
          <strong> fiyat ve kampanyaları</strong>
        </h1>

        <p>
          Thermomix TM7’nin güncel satış fiyatını, ödeme ve taksit
          seçeneklerini ve 1–31 Ekim tarihleri arasında geçerli
          Sonbahar Fırsatı avantajlarını inceleyin.
        </p>

        <div className="tm7CampaignPriceBox">
          <span>Güncel TM7 fiyatı</span>
          <strong>89.990₺</strong>
          <small>Tüm kredi kartlarına vade farksız 6 taksit</small>
        </div>

        <div className="tm7CampaignHeroBenefits">
          <span>
            ✓ Thermomix® Kesme Aparatı+ ve 3 Yıl Ek Garanti paketi,
            kupon koduyla 22.990₺ yerine 3.500₺
          </span>
          <span>
            ✓ İlk kez Cookidoo® aboneliği satın alanlara
            3 aylık Cookidoo® üyeliği ücretsiz
          </span>
          <span>✓ Kampanya 5.000 adet stokla sınırlı</span>
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
          Kampanya 1–31 Ekim 2026 tarihleri arasında geçerli olup
          5.000 adet stokla sınırlıdır ve başka kampanyalarla
          birleştirilemez. Vorwerk Türkiye kampanyayı değiştirme
          hakkını saklı tutar. Ücretsiz 3 aylık Cookidoo® üyeliği,
          ilk kez Cookidoo® aboneliği satın alanlar için geçerlidir.
          Kampanyadan yararlanma koşulları ve kupon kodu detayları
          için iletişime geçebilirsiniz.
        </small>
      </div>

      <div className="tm7CampaignHeroVisual">
        <div className="tm7CampaignHeroLabel">
          🍂 Sonbahar Fırsatı
        </div>

        <img
          src="/tm7-kampanya.jpg"
          alt="Thermomix TM7 Ekim 2026 Sonbahar Fırsatı, fiyat ve kampanya avantajları"
        />
      </div>
    </section>
  );
}