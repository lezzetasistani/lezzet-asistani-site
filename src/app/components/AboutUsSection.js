'use client';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function AboutUsSection({
  onContact,
  headingLevel = 'h2',
}) {
  const HeadingTag = headingLevel;

  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="aboutUsPremium">
      <div className="aboutUsIntro">
        <span className="aboutUsEyebrow">LEZZET ASİSTANI</span>

        <HeadingTag>
  Thermomix yolculuğunuzda
  <strong> yalnız değilsiniz.</strong>
</HeadingTag>

        <p>
          Ürün tanıtımından satın alma sürecine, Cookidoo kullanımından
          satış sonrası desteğe kadar Thermomix deneyiminizin her aşamasında
          doğru bilgi ve kişisel danışmanlık sunuyoruz.
        </p>

        <p>
          Bireysel danışmanlık hizmetimizi, deneyimli danışman ekibimizin
          bilgi birikimi ve tecrübesiyle destekliyoruz.
        </p>

        <button onClick={handleContact}>
          Benimle İletişime Geç
          <b>→</b>
        </button>
      </div>

      <div className="aboutUsStats">
        <div className="aboutStatCard">
          <span>3+</span>
          <strong>Yıllık Ekip Tecrübesi</strong>
          <small>
            Thermomix satış ve danışmanlık süreçlerinde deneyim
          </small>
        </div>

        <div className="aboutStatCard">
          <span>700+</span>
          <strong>Ekip Satış Deneyimi</strong>
          <small>
            Ekibimizin toplam satış ve müşteri deneyimi
          </small>
        </div>

        <div className="aboutStatCard">
          <span>50+</span>
          <strong>Danışman Ağı</strong>
          <small>
            Bilgi ve deneyim paylaşımı yapılan danışman ağı
          </small>
        </div>

        <div className="aboutStatCard">
          <span>3400+</span>
          <strong>Topluluk Üyesi</strong>
          <small>
            Tarif ve kullanım desteği verilen WhatsApp topluluğu
          </small>
        </div>
      </div>

      <div className="aboutUsValues">
        <div>
          <span>✓</span>
          <strong>Doğru Bilgilendirme</strong>
          <p>
            Ürün, kampanya ve satın alma sürecini açık ve anlaşılır şekilde
            aktarıyoruz.
          </p>
        </div>

        <div>
          <span>◎</span>
          <strong>Kişisel Danışmanlık</strong>
          <p>
            İhtiyacınıza uygun şekilde birebir yönlendirme sağlıyoruz.
          </p>
        </div>

        <div>
          <span>♥</span>
          <strong>Satış Sonrası Destek</strong>
          <p>
            Thermomix'i aldıktan sonra da kullanım ve tarif süreçlerinde
            yanınızdayız.
          </p>
        </div>
      </div>
    </section>
  );
}