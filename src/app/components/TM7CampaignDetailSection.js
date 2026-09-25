import Link from 'next/link';

export default function TM7CampaignDetailSection() {
  const campaignItems = [
    {
      title: '5.000₺ Migros Çeki Hediye',
      text:
        '16–30 Eylül 2026 tarihleri arasında Thermomix TM7 satın alanlara 5.000₺ değerinde Migros çeki hediye edilmektedir.',
    },
    {
      title: 'Thermomix Yemek Takımı 2.750₺',
      text:
        'Kampanya döneminde Thermomix Yemek Takımı, kampanya kupon koduyla 2.750₺ indirimli fiyatla alınabilir.',
    },
    {
      title: '3 Aylık Cookidoo® Üyeliği Ücretsiz',
      text:
        'Thermomix TM7 satın alımında 3 aylık Cookidoo® üyeliğinden ücretsiz olarak yararlanabilir, binlerce tarife ve Rehberli Pişirme özelliklerine erişebilirsiniz.',
    },
    {
      title: 'Ödeme ve Taksit Seçenekleri',
      text:
        'Thermomix TM7’nin Eylül 2026 satış fiyatı 89.990₺’dir. Kampanya döneminde vade farksız 6 taksit seçeneğinden yararlanılabilir.',
    },
    {
      title: '2.000 Adet Stokla Sınırlı',
      text:
        '16–30 Eylül 2026 tarihleri arasında geçerli kampanya 2.000 adet stokla sınırlıdır ve başka kampanyalarla birleştirilemez.',
    },
    {
      title: 'Satın Alma Öncesi ve Sonrası Danışmanlık',
      text:
        'Thermomix TM7 hakkında satın alma öncesinde merak ettiklerinizi sorabilir; satın alma sonrasında da cihaz kullanımı, tarifler ve aklınıza takılan konularda ihtiyaç duyduğunuzda benimle iletişime geçebilirsiniz.',
    },
  ];

  return (
    <section className="tm7CampaignDetailSection">

      <div className="tm7CampaignDetailHeader">
        <span>EYLÜL 2026 KAMPANYA REHBERİ</span>

        <h2>
          Thermomix TM7 kampanyasında
          <strong> hangi avantajlar var?</strong>
        </h2>

        <p>
          Eylül 2026 döneminde geçerli Thermomix TM7 fiyat,
          ödeme ve kampanya avantajlarını tek tek inceleyin.
        </p>
      </div>

      <div className="tm7CampaignDetailGrid">
        {campaignItems.map((item, index) => (
          <article
            className="tm7CampaignDetailCard"
            key={item.title}
          >
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="tm7CampaignProcessBlock">

        <div>
          <span>THERMOMIX TM7</span>

          <h2>
            Kampanyadan
            <strong> nasıl yararlanabilirsiniz?</strong>
          </h2>

          <p>
            Satın alma öncesinde güncel kampanya koşullarını,
            ödeme seçeneklerini ve stok durumunu kontrol ederek
            size uygun satın alma seçeneğini belirleyebilirsiniz.
          </p>

          <p>
            Kampanya 16–30 Eylül 2026 tarihleri arasında geçerli olup
            2.000 adet stokla sınırlıdır. Kampanya koşulları ve stok
            durumu dönem içerisinde değişiklik gösterebilir.
          </p>
        </div>

        <div className="tm7CampaignDetailLinks">
          <Link href="/thermomix-tm7">
            TM7 özellikleri →
          </Link>

          <Link href="/thermomix-tm7-fonksiyonlari">
            TM7 fonksiyonları →
          </Link>

          <Link href="/cookidoo">
            Cookidoo →
          </Link>
        </div>

      </div>

    </section>
  );
}