import Link from 'next/link';

export default function TM7CampaignDetailSection() {
  const campaignItems = [
    {
      title: 'Ek Karıştırma Kabı Kupon Koduyla 6.000₺',
      text:
        '1–30 Kasım 2026 tarihleri arasında Thermomix TM7 satın alanlar, Thermomix® Karıştırma Kabını kupon koduyla 15.290₺ yerine 6.000₺ karşılığında alabilir.',
    },
    {
      title: '3 Aylık Cookidoo® Üyeliği Ücretsiz',
      text:
        'Thermomix TM7 satın alımında 3 aylık Cookidoo® üyeliği ücretsiz sunulur. Cookidoo ile tariflere ve Rehberli Pişirme özelliklerine erişebilirsiniz.',
    },
    {
      title: 'Vade Farksız 9 Taksit',
      text:
        'Thermomix TM7’nin Kasım 2026 satış fiyatı 89.990₺’dir. Vade farksız 9 taksit seçeneğiyle satın alabilirsiniz.',
    },
    {
      title: '1–30 Kasım Boyunca, Stoklarla Sınırlı',
      text:
        'Kampanya 1–30 Kasım 2026 tarihleri arasında geçerlidir. Stoklarla sınırlıdır ve farklı kampanyalarla birleştirilemez.',
    },
    {
      title: 'Resmî Vorwerk Sitesinden Satın Alım',
      text:
        'Thermomix TM7 satın alma işlemi yalnızca resmî Vorwerk sitesi üzerinden gerçekleştirilir. Satın alma süreci ve kampanya kupon kodunun kullanımı konusunda danışman desteği alabilirsiniz.',
    },
    {
      title: 'Satın Alma Öncesi ve Sonrası Danışmanlık',
      text:
        'Thermomix TM7 hakkında satın alma öncesinde merak ettiklerinizi sorabilir; satın alma sonrasında da cihaz kullanımı, tarifler ve aklınıza takılan konularda benimle iletişime geçebilirsiniz.',
    },
  ];

  return (
    <section className="tm7CampaignDetailSection">
      <div className="tm7CampaignDetailHeader">
        <span>KASIM 2026 KAMPANYA REHBERİ</span>

        <h2>
          Thermomix TM7 kampanyasında
          <strong> hangi avantajlar var?</strong>
        </h2>

        <p>
          En sevilen kampanya geri döndü! 1–30 Kasım 2026 tarihleri
          arasında geçerli Thermomix TM7 fiyat, ödeme ve kampanya
          avantajlarını tek tek inceleyin.
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
            Güncel kampanya koşulları, kupon kodu, ödeme seçenekleri
            ve stok durumu hakkında bilgi almak için benimle
            iletişime geçebilirsiniz. Satın alım yalnızca resmî
            Vorwerk sitesi üzerinden gerçekleştirilir.
          </p>

          <p>
            Ek karıştırma kabı, TM7 fiyatına ek olarak kupon koduyla
            15.290₺ yerine 6.000₺ karşılığında alınabilir.
            Ayrıca 3 aylık Cookidoo® üyeliği ücretsiz sunulur.
          </p>

          <p>
            Kampanya 1–30 Kasım 2026 tarihleri arasında geçerlidir.
            Stoklarla sınırlıdır ve farklı kampanyalarla
            birleştirilemez. Kampanya koşulları ve kupon kodu
            detayları için iletişime geçebilirsiniz.
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