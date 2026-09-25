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
          🔥 Eylül 2026 Fırsatı
        </span>

        <h1>
          Thermomix TM7
          <strong> fiyat ve kampanyaları</strong>
        </h1>

        <p>
          Thermomix TM7’nin güncel satış fiyatını, ödeme ve taksit
          seçeneklerini ve Eylül ayına özel kampanya avantajlarını
          inceleyin.
        </p>

        <div className="tm7CampaignPriceBox">
          <span>Güncel TM7 fiyatı</span>
          <strong>89.990₺</strong>
          <small>Vade farksız 6 taksit seçeneği</small>
        </div>

        <div className="tm7CampaignHeroBenefits">
          <span>✓ 5.000₺ değerinde Migros çeki hediye</span>
          <span>✓ Thermomix Yemek Takımı kupon koduyla 2.750₺</span>
          <span>✓ 3 aylık Cookidoo® üyeliği ücretsiz</span>
          <span>✓ Kampanya 2.000 adet stokla sınırlı</span>
          <span>✓ Satın alma öncesi birebir danışmanlık</span>
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
          Kampanya 16–30 Eylül 2026 tarihleri arasında geçerli olup
          2.000 adet stokla sınırlıdır. Diğer kampanyalarla
          birleştirilemez. Kampanya koşulları ve stok durumu değişiklik
          gösterebilir.
        </small>

      </div>

      <div className="tm7CampaignHeroVisual">

        <div className="tm7CampaignHeroLabel">
          🔥 Eylül Fırsatı
        </div>

        <img
          src="/tm7-kampanya.jpg"
          alt="Thermomix TM7 Eylül 2026 fiyat ve kampanya fırsatları"
        />

      </div>

    </section>
  );
}