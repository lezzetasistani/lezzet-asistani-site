export default function TM7BoxContentsDetailSection() {
  const items = [
    {
      title: 'Thermomix TM7 Ana Ünite',
      text:
        'Motor, dokunmatik ekran ve cihazın ana kontrol sistemlerini barındıran temel ünitedir.',
    },
    {
      title: 'Karıştırma Kabı',
      text:
        'Yemeklerin hazırlanması ve pişirilmesi için kullanılan paslanmaz çelik karıştırma kabıdır.',
    },
    {
      title: 'Karıştırma Bıçağı',
      text:
        'Doğrama, karıştırma, parçalama ve öğütme gibi birçok hazırlık işleminde kullanılan çok amaçlı bıçaktır.',
    },
    {
      title: 'Karıştırma Kabı Kapağı',
      text:
        'Hazırlık ve pişirme sırasında karıştırma kabının güvenli biçimde kapatılmasını sağlar.',
    },
    {
      title: 'Varoma Seti',
      text:
        'Sebze, balık, et ve farklı yiyecekleri buharda pişirmek için kullanılan çok katlı pişirme sistemidir.',
    },
    {
      title: 'Süzgeç (Pişirme Sepeti)',
      text:
        'Pirinç, patates, yumurta ve benzeri malzemelerin karıştırma kabı içerisinde kontrollü şekilde pişirilmesine yardımcı olur.',
    },
    {
      title: 'Spatula',
      text:
        'Karıştırma kabındaki yiyeceklerin alınması ve hazırlık sırasında malzemelerin yönlendirilmesi için kullanılır.',
    },
  ];

  return (
    <section className="tm7BoxDetailSection">
      <div className="tm7BoxDetailHeader">
        <span>TM7 KUTU İÇERİĞİ REHBERİ</span>

        <h2>
          Thermomix TM7 kutusundan
          <strong> hangi parçalar çıkıyor?</strong>
        </h2>

        <p>
          TM7 ile birlikte gelen temel parçaları ve her bir parçanın
          günlük kullanımda ne işe yaradığını inceleyin.
        </p>
      </div>

      <div className="tm7BoxDetailGrid">
        {items.map((item, index) => (
          <article className="tm7BoxDetailCard" key={item.title}>
            <span>
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="tm7BoxDetailBottom">
        <div>
          <span>THERMOMIX TM7</span>

          <h3>
            Kutu içeriğini öğrendiniz,
            <strong> şimdi TM7’yi daha yakından keşfedin.</strong>
          </h3>
        </div>

        <div className="tm7BoxDetailLinks">
          <a href="/thermomix-tm7">
            TM7 özellikleri →
          </a>

          <a href="/thermomix-tm7-fonksiyonlari">
            TM7 fonksiyonları →
          </a>

          <a href="/cookidoo">
            Cookidoo →
          </a>
        </div>
      </div>
    </section>
  );
}