'use client';

export default function TM7DetailSection() {
  const details = [
    {
      title: 'Thermomix TM7 nedir?',
      text:
        'Thermomix TM7; doğrama, karıştırma, yoğurma, buharda pişirme, yavaş pişirme, tartma ve rehberli tarif hazırlama gibi birçok mutfak işlemini tek cihazda bir araya getiren çok fonksiyonlu bir mutfak cihazıdır.',
    },
    {
      title: '20’den fazla fonksiyon ve pişirme modu',
      text:
        'TM7; günlük hazırlıktan farklı pişirme tekniklerine kadar birçok işlemi tek cihaz üzerinden yönetmenizi sağlar. Doğrama, karıştırma, yoğurma, buharda pişirme, yavaş pişirme, ısıtma ve farklı otomatik modlar bunlardan bazılarıdır.',
    },
    {
      title: 'Cookidoo ve Rehberli Pişirme',
      text:
        'Cookidoo, Thermomix’in resmi dijital tarif platformudur. Tarifleri TM7 ekranından adım adım takip edebilir, hangi malzemenin ne zaman ekleneceğini ve hangi işlemin uygulanacağını görebilirsiniz.',
    },
    {
      title: 'Entegre tartı',
      text:
        'TM7’nin entegre tartısı sayesinde malzemeleri doğrudan karıştırma haznesine eklerken ölçebilirsiniz. Böylece ayrı bir mutfak tartısı kullanma ihtiyacı azalır.',
    },
    {
      title: 'Varoma ile buharda pişirme',
      text:
        'Varoma sistemi sayesinde sebze, balık, et ve farklı malzemeleri buharla pişirebilirsiniz. Bazı tariflerde farklı seviyeleri aynı anda kullanarak birden fazla bileşeni birlikte hazırlamak mümkündür.',
    },
    {
      title: 'Kimler için uygun?',
      text:
        'Thermomix TM7; mutfakta zaman kazanmak isteyenler, yemek yapmayı kolaylaştırmak isteyenler, tarifleri adım adım takip etmeyi tercih edenler ve çok sayıda mutfak cihazını tek cihazda toplamak isteyenler için değerlendirilebilir.',
    },
  ];

  return (
    <section className="tm7DetailSection">
      <div className="tm7DetailHeader">
        <span>THERMOMIX TM7 REHBERİ</span>

        <h2>
          Thermomix TM7 hakkında
          <strong> bilmeniz gerekenler</strong>
        </h2>

        <p>
          TM7’nin temel çalışma mantığını, öne çıkan özelliklerini ve günlük
          mutfakta nasıl kullanılabildiğini daha yakından inceleyin.
        </p>
      </div>

      <div className="tm7DetailGrid">
        {details.map((item, index) => (
          <article className="tm7DetailCard" key={item.title}>
            <span className="tm7DetailNumber">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="tm7DetailBottom">
        <div>
          <span>THERMOMIX TM7</span>

          <h3>
            Daha fazla detay için
            <strong> ilgili rehberleri inceleyin.</strong>
          </h3>
        </div>

        <div className="tm7DetailLinks">
          <a href="/thermomix-tm7-fonksiyonlari">
            TM7 Fonksiyonları →
          </a>

          <a href="/thermomix-tm7-kutu-icerigi">
            TM7 Kutu İçeriği →
          </a>

          <a href="/cookidoo">
            Cookidoo →
          </a>
        </div>
      </div>
    </section>
  );
}