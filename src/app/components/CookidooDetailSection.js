import Link from 'next/link';

export default function CookidooDetailSection() {
  const details = [
    {
      title: 'Tarif keşfetme',
      text:
        'Cookidoo üzerinden farklı mutfaklara, öğünlere ve tarif kategorilerine göz atabilir; hazırlamak istediğiniz tarifleri hesabınıza kaydedebilirsiniz.',
    },
    {
      title: 'Rehberli Pişirme',
      text:
        'Uyumlu Cookidoo tarifleri Thermomix TM7 ekranında adım adım ilerler. Malzeme ekleme, süre, sıcaklık ve diğer hazırlık aşamalarında tarif sizi yönlendirir.',
    },
    {
      title: 'Haftalık yemek planı',
      text:
        'Seçtiğiniz tarifleri belirli günlere ekleyerek önceden bir yemek planı oluşturabilir ve hafta boyunca ne hazırlayacağınızı daha kolay organize edebilirsiniz.',
    },
    {
      title: 'Alışveriş listesi',
      text:
        'Hazırlamayı planladığınız tariflerdeki malzemeleri alışveriş listenize ekleyerek ihtiyaçlarınızı tek yerde düzenleyebilirsiniz.',
    },
    {
      title: 'Favoriler ve koleksiyonlar',
      text:
        'Beğendiğiniz tarifleri favorilerinize ekleyebilir ve sık kullandığınız veya daha sonra denemek istediğiniz tarifleri koleksiyonlar halinde düzenleyebilirsiniz.',
    },
    {
      title: 'Farklı cihazlardan erişim',
      text:
        'Cookidoo hesabınızı telefon, tablet veya bilgisayar üzerinden kullanabilir; oluşturduğunuz planlara ve kayıtlı tariflerinize farklı cihazlardan erişebilirsiniz.',
    },
  ];

  return (
    <section className="cookidooDetailSection">

      <div className="cookidooDetailHeader">
        <span>COOKIDOO REHBERİ</span>

        <h2>
          Cookidoo nedir ve
          <strong> ne işe yarar?</strong>
        </h2>

        <p>
          Cookidoo, Thermomix kullanıcılarının tarif keşfetme,
          planlama ve Rehberli Pişirme süreçlerini aynı dijital
          platform üzerinden yönetmesini sağlar.
        </p>
      </div>


      <div className="cookidooDetailGrid">
        {details.map((item, index) => (
          <article
            className="cookidooDetailCard"
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


      <div className="cookidooTm7Block">
        <div className="cookidooTm7Text">
          <span>COOKIDOO + THERMOMIX TM7</span>

          <h2>
            Cookidoo, TM7 ile
            <strong> nasıl kullanılır?</strong>
          </h2>

          <p>
            Cookidoo hesabınızla Thermomix TM7 üzerinden tariflerinize
            erişebilir ve Rehberli Pişirme özelliğini kullanarak tarif
            adımlarını doğrudan cihaz ekranından takip edebilirsiniz.
          </p>

          <p>
            Böylece tarif seçme aşamasından hazırlık ve pişirme
            adımlarına kadar süreç aynı ekosistem içerisinde devam eder.
          </p>
        </div>

        <div className="cookidooDetailLinks">
          <Link href="/thermomix-tm7">
            TM7 özellikleri →
          </Link>

          <Link href="/thermomix-tm7-fonksiyonlari">
            TM7 fonksiyonları →
          </Link>

          <Link href="/thermomix-tm7-kutu-icerigi">
            TM7 kutu içeriği →
          </Link>
        </div>
      </div>

    </section>
  );
}