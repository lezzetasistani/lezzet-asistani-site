import Link from 'next/link';

export default function TM7CampaignDetailSection() {
  const campaignItems = [
    {
      title: 'Kesme Aparatı+ ve 3 Yıl Ek Garanti Paketi',
      text:
        '1–31 Ekim 2026 tarihleri arasında Thermomix TM7 satın alımında Thermomix® Kesme Aparatı+ ve 3 Yıl Ek Garanti paketi, kupon koduyla 22.990₺ yerine 3.500₺ karşılığında alınabilir.',
    },
    {
      title: '3 Aylık Cookidoo® Üyeliği Ücretsiz',
      text:
        'İlk kez Cookidoo® aboneliği satın alanlara 3 aylık Cookidoo® üyeliği ücretsiz sunulur. Cookidoo ile tariflere ve Rehberli Pişirme özelliklerine erişebilirsiniz.',
    },
    {
      title: 'Tüm Kredi Kartlarına Vade Farksız 6 Taksit',
      text:
        'Thermomix TM7’nin Ekim 2026 satış fiyatı 89.990₺’dir. Tüm kredi kartlarına vade farksız 6 taksit seçeneğinden yararlanabilirsiniz.',
    },
    {
      title: '5.000 Adet Stokla Sınırlı',
      text:
        '1–31 Ekim 2026 tarihleri arasında geçerli Sonbahar Fırsatı kampanyası 5.000 adet stokla sınırlıdır ve başka kampanyalarla birleştirilemez.',
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
        <span>EKİM 2026 SONBAHAR FIRSATI</span>

        <h2>
          Thermomix TM7 kampanyasında
          <strong> hangi avantajlar var?</strong>
        </h2>

        <p>
          1–31 Ekim 2026 tarihleri arasında geçerli Thermomix TM7
          fiyat, ödeme ve kampanya avantajlarını tek tek inceleyin.
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
            Kesme Aparatı+ ve 3 Yıl Ek Garanti paketi, TM7 fiyatına
            ek olarak kupon koduyla 3.500₺ karşılığında alınabilir.
            Ücretsiz 3 aylık Cookidoo® üyeliği, ilk kez Cookidoo®
            aboneliği satın alanlar için geçerlidir.
          </p>

          <p>
            Kampanya 1–31 Ekim 2026 tarihleri arasında geçerli olup
            5.000 adet stokla sınırlıdır ve başka kampanyalarla
            birleştirilemez. Vorwerk Türkiye kampanyayı değiştirme
            hakkını saklı tutar.
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