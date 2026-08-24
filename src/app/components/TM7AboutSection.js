'use client';

import Link from 'next/link';
import { useState } from 'react';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29';

export default function TM7AboutSection({
  onContact,
  showDetailLink = true,
}) {
  const [showFunctions, setShowFunctions] = useState(false);

  const functions = [
    ['🔪', 'Doğrama', 'Sebze, meyve ve malzemeleri hızlıca doğrar.'],
    ['🥣', 'Karıştırma', 'Sos, çorba ve karışımları homojen hale getirir.'],
    ['🍞', 'Yoğurma', 'Ekmek, pizza ve hamur işlerini kolaylaştırır.'],
    ['♨️', 'Buharda Pişirme', 'Varoma ile sağlıklı ve dengeli pişirme sunar.'],
    ['⚖️', 'Hassas Tartı', 'Malzemeleri doğrudan haznede ölçmenizi sağlar.'],
    ['📖', 'Rehberli Tarifler', 'Cookidoo ile adım adım tarif yönlendirmesi sunar.'],
  ];

  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="aboutPremium">
      <div className="aboutPremiumHeader">
        <span>Thermomix TM7</span>

        <h2>
          Tek cihazda
          <strong> mutfağınızın tüm ihtiyaçları</strong>
        </h2>

        <p>
          Thermomix TM7; hazırlıktan pişirmeye kadar birçok işlemi tek cihazda
          birleştirerek mutfakta zamandan ve alandan tasarruf sağlar.
        </p>

        {showDetailLink && (
          <Link href="/thermomix-tm7" className="seoDetailLink">
            Thermomix TM7 hakkında detaylı bilgi →
          </Link>
        )}
      </div>

      <div className="aboutPremiumContent">
        <div className="aboutFunctionGrid">
          {functions.map(([icon, title, description]) => (
            <div className="aboutFunctionCard" key={title}>
              <span>{icon}</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="aboutDevice">
          <div className="aboutDeviceGlow"></div>

          <img
            src="/tm7-about.png"
            alt="Thermomix TM7"
          />

          <div
            className="aboutDeviceBadge"
            onClick={() => setShowFunctions(true)}
            role="button"
            tabIndex={0}
            aria-label="Thermomix TM7 fonksiyon detaylarını göster"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowFunctions(true);
              }
            }}
          >
            <div className="badgeHint">
              <span>Detayları Gör</span>
              <b>↗</b>
            </div>

            <strong>20+</strong>
            <span>Fonksiyon</span>

            <small className="badgeClickText">
              Tıklayın
            </small>
          </div>
        </div>
      </div>

      <div className="aboutPremiumFooter">
        <div>
          <strong>Cookidoo ile rehberli tarif deneyimi</strong>
          <span>Adım adım tarifler, planlama ve alışveriş listeleri</span>
        </div>

        <div>
          <strong>Satış öncesi ve sonrası destek</strong>
          <span>Demo, kullanım ve tarif konusunda danışman desteği</span>
        </div>

        <button onClick={handleContact}>
          Thermomix TM7 Hakkında Bilgi Al
        </button>
      </div>

      {showFunctions && (
        <div
          className="functionsModalBackdrop"
          onClick={() => setShowFunctions(false)}
        >
          <div
            className="functionsModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="functionsModalClose"
              onClick={() => setShowFunctions(false)}
            >
              ×
            </button>

            <h2>Thermomix TM7 Fonksiyonları</h2>

            <img
              src="/tm7-fonksiyonlar.png"
              alt="Thermomix TM7 fonksiyonları"
            />
          </div>
        </div>
      )}
    </section>
  );
}