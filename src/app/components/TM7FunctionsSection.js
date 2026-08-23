'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function TM7FunctionsSection({
  showDetailLink = true,
}) {
  const [selectedMode, setSelectedMode] = useState(null);
  const modalVideoRef = useRef(null);

  const modes = [
    {
      title: 'Karıştırma Modu',
      video: '/tm7-modes/karistirma-modu.mp4',
      description:
        'Çorba, sos, püre, smoothie ve benzeri karışımlarda homojen ve pürüzsüz sonuçlar elde etmenize yardımcı olur.',
      use: 'Çorbalar, soslar, püreler ve içecekler',
      type: 'Otomatik Mod'
    },
    {
      title: 'Buharda Pişirme Modu',
      video: '/tm7-modes/buharda-pisirme-modu.mp4',
      description:
        'Varoma ile sebze, balık, et ve farklı malzemeleri buhar kullanarak nazik ve kontrollü şekilde pişirmenizi sağlar.',
      use: 'Sebze, et, balık ve çok katlı öğünler',
      type: 'Varoma'
    },
    {
      title: 'Hamur Yoğurma Modu',
      video: '/tm7-modes/hamur-yogurma-modu.mp4',
      description:
        'Ekmek, pizza ve benzeri hamurların yoğurma işlemini otomatik olarak gerçekleştirerek hazırlık sürecini kolaylaştırır.',
      use: 'Ekmek, pizza ve hamur işleri',
      type: 'Otomatik Mod'
    },
    {
      title: 'Sabit Pişirme Modu',
      video: '/tm7-modes/sabit-pisirme-modu.mp4',
      description:
        'Karıştırma bıçağı dönmeden pişirme imkânı sağlayarak hassas malzemeleri geleneksel tencere kullanımına daha yakın şekilde hazırlamanıza olanak tanır.',
      use: 'Hassas malzemeler ve yoğun soslar',
      type: 'TM7 Özelliği'
    },
    {
      title: 'Esmerleştirme Modu',
      video: '/tm7-modes/esmerlestirme-modu.mp4',
      description:
        'Malzemelerde yoğun aroma ve daha belirgin kavrulmuş tatlar oluşturmak için yüksek sıcaklık kontrollü pişirmeden yararlanır.',
      use: 'Et, sebze ve aromatik malzemeler',
      type: 'Yüksek Isı'
    },
    {
      title: 'Pilav Pişirici Modu',
      video: '/tm7-modes/pilav-modu.mp4',
      description:
        'Pirinç ve çeşitli tahılların pişirilmesini daha kontrollü ve zahmetsiz hale getiren otomatik pişirme modudur.',
      use: 'Pirinç, bulgur ve çeşitli tahıllar',
      type: 'Otomatik Mod'
    },
    {
      title: 'Yumurta Haşlama Modu',
      video: '/tm7-modes/yumurta-haslama-modu.mp4',
      description:
        'Yumurtaları tercih ettiğiniz kıvama göre daha kontrollü ve tekrarlanabilir şekilde hazırlamanıza yardımcı olur.',
      use: 'Yumurta haşlama',
      type: 'Otomatik Mod'
    },
    {
      title: 'Koyulaştırma Modu',
      video: '/tm7-modes/koyulastirma-modu.mp4',
      description:
        'Sos, krema ve benzeri tariflerde kontrollü ısıtma ve karıştırma ile uygun kıvamın elde edilmesine yardımcı olur.',
      use: 'Soslar, kremalar ve tatlı dolguları',
      type: 'Otomatik Mod'
    },
    {
      title: 'Yavaş Pişirme Modu',
      video: '/tm7-modes/yavas-pisirme-modu.mp4',
      description:
        'Malzemeleri daha uzun sürede ve kontrollü sıcaklıkta pişirerek özellikle yoğun aromalı yemekler hazırlamanızı sağlar.',
      use: 'Et yemekleri, güveç ve uzun pişen tarifler',
      type: 'Uzun Pişirme'
    },
    {
      title: 'Vakumda Pişirme Modu',
      video: '/tm7-modes/vakumda-pisirme-modu.mp4',
      description:
        'Sous-vide tekniğine uygun şekilde kontrollü sıcaklıkta hassas pişirme yapmanıza yardımcı olur.',
      use: 'Et, balık ve hassas pişirme',
      type: 'Hassas Pişirme'
    },
    {
      title: 'Mayalama Modu',
      video: '/tm7-modes/thermomix-mayalama-modu.mp4',
      description:
        'Yoğurt ve fermente tarifler için kontrollü sıcaklık ortamı sağlayarak mayalama sürecini kolaylaştırır.',
      use: 'Yoğurt ve fermente tarifler',
      type: 'Uzun Süreli'
    },
    {
      title: 'Su Isıtıcısı Modu',
      video: '/tm7-modes/su-isitici-modu.mp4',
      description:
        'Suyu seçilen sıcaklığa kontrollü biçimde getirerek sıcak içecek ve farklı hazırlıklarda kullanım kolaylığı sağlar.',
      use: 'Su ve sıcak içecek hazırlıkları',
      type: 'Isıtma'
    },
    {
      title: 'Isıtma Modu',
      video: '/tm7-modes/isitma-modu.mp4',
      description:
        'Hazırlanmış yemekleri kontrollü şekilde yeniden ısıtmak için sıcaklık ve karıştırmayı otomatik olarak yönetir.',
      use: 'Hazır yemekleri yeniden ısıtma',
      type: 'Otomatik Mod'
    },
    {
      title: 'Turbo Modu',
      video: '/tm7-modes/turbo-modu.mp4',
      description:
        'Kısa ve güçlü darbeler kullanarak sert veya iri malzemelerin hızlı biçimde parçalanmasına yardımcı olur.',
      use: 'Sert malzemeleri hızlı parçalama',
      type: 'Yüksek Hız'
    },
    {
      title: 'Ön Temizleme Modu',
      video: '/tm7-modes/on-temizleme-modu.mp4',
      description:
        'Karıştırma kabındaki yemek kalıntılarının temizliğini kolaylaştırmak için otomatik bir ön temizleme döngüsü uygular.',
      use: 'Karıştırma kabı ön temizliği',
      type: 'Temizlik'
    },
    {
      title: 'Doğrama Ön Ayarları',
      video: '/tm7-modes/dograma-on-ayari.mp4',
      description:
        'Farklı malzemeleri pratik biçimde doğramak için süre ve hız ayarlarının daha kolay uygulanmasını sağlar.',
      use: 'Sebze, meyve, kuruyemiş ve çeşitli malzemeler',
      type: 'Hazırlık'
    },
    {
      title: 'Rendeleme Modu',
      video: '/tm7-modes/rendeleme.mp4',
      description:
        'Uyumlu kesme aksesuarıyla sebze ve benzeri malzemeleri düzenli şekilde rendelemek için kullanılır.',
      use: 'Sebze, peynir ve benzeri malzemeler',
      type: 'Aksesuar Gerekir'
    },
    {
      title: 'Dilimleme Modu',
      video: '/tm7-modes/dilimleme-modu.mp4',
      description:
        'Uyumlu kesme aksesuarıyla malzemelerin düzenli ve pratik biçimde dilimlenmesini sağlar.',
      use: 'Sebze ve meyveleri dilimleme',
      type: 'Aksesuar Gerekir'
    },
    {
      title: 'Spiralleştirme Modu',
      video: '/tm7-modes/spiral.mp4',
      description:
        'Uyumlu spiralleştirme aparatıyla sebzeleri spiral formda hazırlayarak farklı sunum ve tarif seçenekleri oluşturur.',
      use: 'Sebze spiralleri',
      type: 'Aksesuar Gerekir'
    },
    {
      title: 'Soyucu Modu',
      video: '/tm7-modes/soyma-modu.mp4',
      description:
        'Uyumlu soyucu aksesuarıyla patates ve benzeri malzemelerin soyulmasını daha pratik hale getirir.',
      use: 'Patates ve uygun sebzeleri soyma',
      type: 'Aksesuar Gerekir'
    },
    {
      title: 'Şeker Aşamaları',
      video: '/tm7-modes/seker-modu.mp4',
      description:
        'Rehberli Pişirme tariflerinde şekerin yüksek sıcaklıkta kontrollü olarak işlenmesine yönelik özel hazırlık aşamalarında kullanılır.',
      use: 'Karamel ve şeker bazlı tarifler',
      type: 'Rehberli Pişirme'
    }
  ];

  const stopPreview = (video) => {
    if (!video) return;

    video.pause();

    try {
      video.currentTime = 0.05;
    } catch {}
  };

  const playPreview = (video) => {
    if (!video) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const closeMode = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();

      try {
        modalVideoRef.current.currentTime = 0;
      } catch {}
    }

    setSelectedMode(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMode();
      }
    };

    if (selectedMode) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedMode]);

  return (
    <section className="tm7ModesSection">
      <div className="sectionIdentity">
  <span className="sectionIdentityEyebrow">THERMOMIX TM7</span>

  <h2>
    TM7 <strong>Fonksiyonları</strong>
  </h2>

  <p>
    Thermomix TM7'nin otomatik modlarını, pişirme özelliklerini
    ve hazırlık fonksiyonlarını yakından inceleyin.
  </p>
</div>
      <div className="tm7ModesHeader">
        <h2>
          Tek cihaz,
          <strong> onlarca farklı imkan.</strong>
        </h2>

        <p>
  Thermomix TM7’nin pişirme, hazırlık ve temizlik fonksiyonlarını keşfedin.
  Kartlardaki modları izleyebilir, detayları görmek için karta dokunabilirsiniz.
</p>
{showDetailLink && (
  <Link
    href="/thermomix-tm7-fonksiyonlari"
    className="seoDetailLink"
  >
    Tüm TM7 fonksiyonlarını detaylı inceleyin →
  </Link>
)}
      </div>

      <div className="tm7ModesGrid">
        {modes.map((mode, index) => (
          <article
            className="tm7ModeCard"
            key={mode.title}
            onClick={() => setSelectedMode(mode)}
          >
            <div
              className="tm7ModeMedia"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                playPreview(video);
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                stopPreview(video);
              }}
            >
              <video
                src={mode.video}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  try {
                    e.currentTarget.currentTime = 0.05;
                  } catch {}
                }}
              />

              <div className="tm7ModeMediaShade"></div>

              <span className="tm7ModeNumber">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="tm7ModeHoverText">
                ▶ Ön İzleme
              </span>
            </div>

            <div className="tm7ModeCardBody">
              <div>
                <small>{mode.type}</small>
                <h3>{mode.title}</h3>
              </div>

              <button
                type="button"
                aria-label={`${mode.title} detaylarını görüntüle`}
              >
                ↗
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedMode && (
        <div
          className="tm7ModeModalBackdrop"
          onClick={closeMode}
        >
          <div
            className="tm7ModeModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="tm7ModeModalClose"
              onClick={closeMode}
              aria-label="Pencereyi kapat"
            >
              ×
            </button>

            <div className="tm7ModeModalHeader">
              <span>{selectedMode.type}</span>

              <h2>{selectedMode.title}</h2>

              <p>{selectedMode.description}</p>
            </div>

            <div className="tm7ModeModalVideo">
              <video
                ref={modalVideoRef}
                src={selectedMode.video}
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="tm7ModeModalInfo">
              <div>
                <span>◎</span>

                <div>
                  <small>Ne için kullanılır?</small>
                  <strong>{selectedMode.use}</strong>
                </div>
              </div>

              <div>
                <span>✓</span>

                <div>
                  <small>Fonksiyon</small>
                  <strong>{selectedMode.type}</strong>
                </div>
              </div>
            </div>

            <div className="tm7ModeModalSource">
              Thermomix® TM7 fonksiyon tanıtımı
            </div>
          </div>
        </div>
      )}
    </section>
  );
}