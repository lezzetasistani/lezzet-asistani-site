'use client';

import Link from 'next/link';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29';

export default function CookidooSection({
  onContact,
  showDetailLink = true,
}) {
  const features = [
    {
      number: '01',
      icon: '📖',
      title: 'Rehberli Pişirme',
      description:
        'Tarif boyunca hangi malzemeyi ne zaman eklemeniz gerektiğini adım adım takip edin.'
    },
    {
      number: '02',
      icon: '🌍',
      title: '100.000+ Tarif',
      description:
        '20 dilde sunulan geniş tarif arşivinden yeni lezzetler keşfedin.'
    },
    {
      number: '03',
      icon: '📅',
      title: 'Haftalık Planlama',
      description:
        'Beğendiğiniz tarifleri günlere ekleyerek haftalık yemek planınızı oluşturun.'
    },
    {
      number: '04',
      icon: '🛒',
      title: 'Alışveriş Listesi',
      description:
        'Seçtiğiniz tariflerin malzemelerini kolayca alışveriş listenize aktarın.'
    },
    {
      number: '05',
      icon: '❤️',
      title: 'Favoriler ve Koleksiyonlar',
      description:
        'Sevdiğiniz tarifleri kaydedin ve kendinize özel tarif koleksiyonları oluşturun.'
    },
    {
      number: '06',
      icon: '📱',
      title: 'Her Yerden Erişim',
      description:
        'Cookidoo hesabınıza telefon, tablet veya bilgisayar üzerinden erişin.'
    }
  ];

  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="cookidooPremium">
      <div className="cookidooHero cookidooHeroV2">

        <div className="cookidooHeroText cookidooHeroLeft">
          <span className="cookidooTopMiniBadge">
            ✓ Rehberli Pişirme
          </span>

          <h2>
            Bugün ne pişireceğinizi
            <strong> düşünmek zorunda değilsiniz.</strong>
          </h2>

          <p>
            Cookidoo®, Thermomix'in resmi dijital tarif platformudur.
            Tarif keşfetmekten haftalık planlamaya kadar mutfak rutininizi
            tek bir ekosistem içerisinde yönetmenize yardımcı olur.
          </p>

          {showDetailLink && (
            <Link href="/cookidoo" className="seoDetailLink">
              Cookidoo hakkında detaylı bilgi →
            </Link>
          )}

          <div className="cookidooHeroActions">
            <a
              href="https://cookidoo.thermomix.com"
              target="_blank"
              rel="noreferrer"
            >
              Cookidoo'yu Keşfet
              <b>↗</b>
            </a>

            <button onClick={handleContact}>
              Cookidoo Hakkında Bilgi Al
            </button>
          </div>

          <div className="cookidooQuickStats">
            <div>
              <strong>100.000+</strong>
              <span>Dünya genelinde tarif</span>
            </div>

            <div>
              <strong>1.500+</strong>
              <span>Türkçe tarif</span>
            </div>

            <div>
              <strong>20</strong>
              <span>Dil desteği</span>
            </div>

            <div>
              <strong>7/24</strong>
              <span>Dijital erişim</span>
            </div>
          </div>
        </div>

        <div className="cookidooExperienceImage">
          <img
            src="/cookidoo-hero-final.png"
            alt="Cookidoo ve Thermomix TM7 tarif deneyimi"
          />
        </div>
      </div>

      <div className="cookidooFeatureGrid">
        {features.map((feature) => (
          <article className="cookidooFeatureCard" key={feature.number}>
            <div className="cookidooFeatureTop">
              <span className="cookidooFeatureIcon">{feature.icon}</span>
              <small>{feature.number}</small>
            </div>

            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="cookidooHow">
        <div className="cookidooHowHeader">
          <span>NASIL ÇALIŞIR?</span>
          <h3>Planlamadan sofraya kadar üç adım.</h3>
        </div>

        <div className="cookidooHowSteps">
          <div>
            <span>1</span>
            <strong>Tarifinizi seçin</strong>
            <p>
              Cookidoo'da binlerce tarif arasından istediğiniz tarifi bulun.
            </p>
          </div>

          <div>
            <span>2</span>
            <strong>TM7'nizde açın</strong>
            <p>
              Cookidoo hesabınızla Thermomix TM7 üzerinden tarifinize erişin.
            </p>
          </div>

          <div>
            <span>3</span>
            <strong>Adımları takip edin</strong>
            <p>
              Rehberli Pişirme ile tarifin yönlendirmelerini adım adım uygulayın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}