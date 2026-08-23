import Link from 'next/link';

export default function TM7CampaignDetailSection() {
  const campaignItems = [
    {
      title: '10.000₺ Garanti Bonus',
      text:
        'Garanti BBVA Bonus kredi kartıyla 3 taksitli Thermomix TM7 alımında 10.000₺ Bonus kampanyasından yararlanabilirsiniz.',
    },
    {
      title: '+3 Yıl Ek Garanti Hediye',
      text:
        '31 Ağustos 2026 tarihine kadar yapılan Thermomix TM7 satın alımlarında 9.000₺ değerindeki +3 yıl ek garanti ücretsiz olarak sunulmaktadır.',
    },
    {
      title: 'Kobold VM7 Kampanya Avantajı',
      text:
        'Thermomix TM7 satın alımında Kobold VM7 Şarjlı El Süpürgesi kampanya kuponuyla 4.000₺ fiyat avantajıyla alınabilir.',
    },
    {
      title: 'Ödeme ve Taksit Seçenekleri',
      text:
        'Thermomix TM7’nin Ağustos 2026 satış fiyatı 89.990₺’dir. Kampanya döneminde vade farksız 6 taksit seçeneğinden yararlanılabilir.',
    },
    {
  title: '3 Aylık Cookidoo Üyeliği',
  text:
    'Thermomix TM7 satın alımında 3 aylık Cookidoo üyeliğinden ücretsiz olarak yararlanabilir, binlerce tarife ve Rehberli Pişirme özelliklerine erişebilirsiniz.',
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
        <span>AĞUSTOS 2026 KAMPANYA REHBERİ</span>

        <h2>
          Thermomix TM7 kampanyasında
          <strong> hangi avantajlar var?</strong>
        </h2>

        <p>
          Ağustos 2026 döneminde geçerli Thermomix TM7 fiyat,
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
            Kampanya avantajları 31 Ağustos 2026 tarihine kadar
            geçerlidir ve koşullar dönemsel olarak değişiklik gösterebilir.
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