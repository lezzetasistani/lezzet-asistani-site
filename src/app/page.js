'use client';

import { useEffect, useState, useRef } from 'react';

const SITE = {
  brand: 'Lezzet Asistanı',
  subtitle: 'Thermomix Danışmanlığı • Tarifler • Mutfak İpuçları',
  consultant: 'Doğukan Yıldız',
  city: 'İstanbul',
  phoneDisplay: '0501 692 31 35',
  whatsapp: '905016923135',
  instagram: 'https://instagram.com/lezzetasistani',
  tiktok: 'https://www.tiktok.com/@thermo.lezzetasistani',
  youtube: 'https://www.youtube.com/@LezzetAsistani',
  domain: 'lezzetasistani.com',
};

function reportWhatsAppConversion() {
  if (
    typeof window !== 'undefined' &&
    typeof window.gtag_report_conversion === 'function'
  ) {
    window.gtag_report_conversion();
  }
}

const pages = [
  ['home-nav', 'Anasayfa', 'home'],
  ['about-nav', 'Thermomix Nedir?', 'about'],
  ['campaign-nav', 'Kampanyalar', 'home'],
  ['community-nav', 'Tarifler / WhatsApp Grubu', 'community'],
['consultant-nav', 'Danışmanınız / İletişim', 'consultant'],
];

const campaigns = [
  ['Ayın Thermomix Fırsatı', 'Güncel kampanya, ödeme ve teslimat detayları için hızlıca bilgi alın.', 'Ayın Fırsatı'],
  ['Ücretsiz Tanıtım Görüşmesi', 'Thermomix TM7 hakkında merak ettiklerinizi birebir görüşmede öğrenin.', 'Demo'],
  ['Satış Sonrası Rehberlik', 'İlk kullanım, tarif planlama, Cookidoo ve bakım konularında destek alın.', 'Destek'],
];

const blog = [
  ['Thermomix TM7 Nedir?', 'Thermomix TM7’nin günlük mutfakta sunduğu pratiklikleri öğrenin.'],
  ['Cookidoo ile Tarif Planlama', 'Haftalık menü ve alışveriş planını daha düzenli hale getirin.'],
  ['Pratik Mutfak İpuçları', 'Zaman kazandıran tarif, hazırlık ve temizlik önerileri.'],
  ['Demo Öncesi Bilmeniz Gerekenler', 'Thermomix’i satın almadan önce sorulması gereken temel sorular.'],
];

function Logo() {
  return (
    <div className="logoWrap">
      <img
        src="/logo.png"
        alt="Lezzet Asistanı"
        className="brandLogo"
      />
    </div>
  );
}

function ContactModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modalBackdrop contactModalBackdrop" onClick={onClose}>
      <div
        className="modal professionalContactModal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close professionalContactClose"
          onClick={onClose}
          aria-label="İletişim penceresini kapat"
        >
          ×
        </button>

        <div className="contactModalTop">
          <div className="contactModalIntro">
            <span className="contactModalMessageIcon">•••</span>

            <h2>Bizimle İletişime Geçin</h2>

            <div className="contactModalTitleLine"></div>

            <p>
              Thermomix TM7, kampanyalar ve satın alım süreci için bize
              <strong> aşağıdaki kanallardan </strong>
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="contactModalDevice">
            <div className="contactModalDeviceGlow"></div>
            <img src="/tm7-about.png" alt="Thermomix TM7" />
          </div>
        </div>

        <div className="professionalContactGrid">
          <a
            className="professionalContactCard professionalWhatsappCard"
            href={`https://wa.me/${SITE.whatsapp}?text=Merhaba%20Doğukan%20Bey,%20Thermomix%20TM7%20hakkında%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noreferrer"
            onClick={reportWhatsAppConversion}
          >
            <span className="contactCardBadge whatsappBadge">Hızlı Yanıt</span>

            <div className="contactCardMain">
              <span className="contactPlatformIcon whatsappPlatformIcon">
                <img src="/whatsapp-icon.png" alt="WhatsApp" />
              </span>

              <div className="contactCardContent">
                <h3>WhatsApp</h3>
                <p>
                  Hızlı destek ve bilgi almak için WhatsApp’tan
                  yazabilirsiniz.
                </p>
              </div>
            </div>

            <div className="contactCardBottom">
              <strong>{SITE.phoneDisplay}</strong>

              <span className="contactClickArea">
                <small>Tıklayın</small>
                <b>›</b>
              </span>
            </div>
          </a>

          <a
            className="professionalContactCard professionalInstagramCard"
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contactCardBadge instagramBadge">Takip Edin</span>

            <div className="contactCardMain">
              <span className="contactPlatformIcon instagramPlatformIcon">
                <img src="/instagram-icon.png" alt="Instagram" />
              </span>

              <div className="contactCardContent">
                <h3>Instagram</h3>
                <p>
                  Güncel kampanyalar ve tarifler için Instagram hesabımızı
                  ziyaret edin.
                </p>
              </div>
            </div>

            <div className="contactCardBottom">
              <strong>@lezzetasistani</strong>

              <span className="contactClickArea">
                <small>Tıklayın</small>
                <b>›</b>
              </span>
            </div>
          </a>
        </div>

        <div className="contactModalBenefits">
          <div>
            <span>🛡️</span>
            <div>
              <strong>Güvenilir Destek</strong>
              <small>Size özel ve güvenilir danışmanlık</small>
            </div>
          </div>

          <div>
            <span>◷</span>
            <div>
              <strong>Hızlı Yanıt</strong>
              <small>Mesajlarınıza en kısa sürede dönüş</small>
            </div>
          </div>

          <div>
            <span>👥</span>
            <div>
              <strong>Kişiye Özel Danışmanlık</strong>
              <small>İhtiyaçlarınıza uygun çözümler</small>
            </div>
          </div>
        </div>

        <div className="contactModalFooterText">
          <span>♥</span>
          Lezzetli anlar, profesyonel destekle başlar.
        </div>
      </div>
    </div>
  );
}
function WhatsAppWidget({ contact, contactModalOpen }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (typeof window === 'undefined') return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  // Mobilde chatbox otomatik açılmasın
  if (isMobile) {
    setOpen(false);
    return;
  }

  const timer = setTimeout(() => {
    setOpen(true);
  }, 4000);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
  if (typeof window === 'undefined') return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  if (isMobile && contactModalOpen) {
    setOpen(false);
  }
}, [contactModalOpen]);

  const handleContactClick = () => {
  setOpen(false);
  contact();
};

  return (
    <div className="waWidget">
      {open ? (
        <div className="waChatBox">
          <div className="waChatHeader">
            <button className="waChatClose" onClick={() => setOpen(false)}>×</button>
            <div className="waAgent">
              <div className="waAvatar">
                <img src="/logo.png" alt="Lezzet Asistanı" />
                <span></span>
              </div>
              <div>
                <strong>Lezzet Asistanı</strong>
                <small>Thermomix Danışmanı</small>
              </div>
            </div>
          </div>

          <div className="waChatBody">
            <div className="waMessage">
              👋 Merhaba!<br />
              Ben Thermomix Danışmanınız Doğukan Yıldız.<br />
              Thermomix hakkında merak ettiklerinizi sorabilirsiniz.
              <small>Şimdi</small>
            </div>

            <div className="waQuickReplies">
              <button onClick={handleContactClick}>
  Bilgi almak istiyorum.
</button>

<button onClick={handleContactClick}>
  Demo talep etmek istiyorum.
</button>

<button onClick={handleContactClick}>
  Kampanyaları öğrenmek istiyorum.
</button>
            </div>
          </div>

          <button
  className="waChatInput"
  onClick={handleContactClick}
>
            <span>Mesaj yaz...</span>
            <b>➤</b>
          </button>
        </div>
      ) : (
        <button
  className="waMiniButton"
  onClick={() => setOpen(true)}
  aria-label="WhatsApp Destek Hattı"
>
  <img src="/whatsapp-icon.png" alt="" />
  <span className="waMiniText">WhatsApp Destek Hattı</span>
</button>
      )}
    </div>
  );
}
function CampaignPopup({ contact }) {
  const [open, setOpen] = useState(false);

  const campaignModalRef = useRef(null);

useEffect(() => {
  if (!open) return;

  const timer = requestAnimationFrame(() => {
    if (campaignModalRef.current) {
      campaignModalRef.current.scrollTop = 0;
    }
  });

  return () => cancelAnimationFrame(timer);
}, [open]);

useEffect(() => {
  if (typeof window === 'undefined') return;

  const alreadyShown = sessionStorage.getItem('campaignPopupShown');

  if (alreadyShown) return;

  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  const delay = isMobile ? 7000 : 4500;

  const timer = setTimeout(() => {
    setOpen(true);
    sessionStorage.setItem('campaignPopupShown', 'true');
  }, delay);

  return () => clearTimeout(timer);
}, []);

  if (!open) return null;

  return (
    <div className="campaignModalBackdrop">
      <div
  className="campaignModal"
  ref={campaignModalRef}
>
        <button className="campaignClose" onClick={() => setOpen(false)}>×</button>

        <div className="campaignModalText">
          <div className="campaignPriceBadge">
            <span>Vade Farksız</span>
            <strong>6 Taksitle</strong>
            <b>TM7 89.990₺</b>
          </div>

          <small className="campaignDate">1 - 31 Ağustos</small>

          <h2>
            Çekici
            <br />
            Fırsat!
          </h2>

{/* MOBİLDE GÖRÜNECEK */}
          <div className="campaignModalVisual campaignModalVisualMobile">
  <img
    src="/tm7-kampanya.jpg"
    alt="Thermomix TM7 Kampanya"
  />
</div>

         <p>
  Ağustos ayına özel Thermomix TM7 kampanyasında,
  normal satış fiyatı <strong>6.990₺</strong> olan
  <strong> Kobold VM7 Şarjlı El Süpürgesi</strong>,
  kampanya kuponuyla
  <strong> 4.000₺</strong> oluyor.
  Kampanya detaylarını öğrenmek ve kupon avantajından
  nasıl yararlanabileceğinizi öğrenmek için
  bana WhatsApp'tan ulaşabilirsiniz.
</p>

          <div className="campaignBenefits">
  <div>✓ Vade farksız 6 taksitle TM7: 89.990₺</div>
  <div>✓ Kobold VM7 kuponlu fiyatı: 4.000₺</div>
  <div>✓ 3 aylık Cookidoo üyeliği ücretsiz</div>
</div>

          <div className="campaignActions">
            <button
  className="campaignPrimary"
  onClick={() => {
    setOpen(false);
    contact();
  }}
>
  WhatsApp’tan Bilgi Al
</button>
            <button className="campaignSecondary" onClick={() => setOpen(false)}>Siteye Devam Et</button>
          </div>

          <p className="campaignLegal">
  Kampanya 1-31 Ağustos tarihleri arasında ve 3000 adet stokla
  sınırlıdır. Diğer kampanyalarla birleştirilemez. Ayrıntılı bilgi için
  iletişime geçiniz.
</p>
        </div>

        <div className="campaignModalVisual campaignModalVisualDesktop">
          <img
            src="/tm7-kampanya.jpg"
            alt="Thermomix TM7 Kampanya"
          />
        </div>

        
      </div>


    </div>
  );
}
function Hero({ go, contact }) {

  return (
    <section className="hero heroCampaign">
      <div className="heroText">
        <div className="pill">
          ✨ Thermomix Danışmanlığı - {SITE.consultant}
          <br />
          🎯 Danışman Kodu: <strong className="codeGold">TM101637</strong>
        </div>

        <h1>
          Thermomix TM7 ile
          <br />
          mutfakta zaman kazanın.
        </h1>

        <p>
          Güncel kampanyaları inceleyin, ücretsiz demo talep edin ve
          Thermomix deneyimini birebir keşfedin.
        </p>

        <div className="heroButtons">
  <button className="primary" onClick={contact}>
    WhatsApp’tan Bilgi Al
  </button>

  <button className="secondary" onClick={contact}>
    Ücretsiz Tanıtım Talep Et
  </button>
</div>
      </div>

      <div className="campaignHeroCard">
        <div className="campaignBadge">🔥 Ağustos Fırsatı</div>
        <img src="/tm7-kampanya.jpg" alt="Thermomix TM7 Güncel Kampanya" />
      </div>
    </section>
  );
}
function TrustCommunity({ contact }) {
  return (
    <section id="community" className="trustCommunity">
      <div className="trustCommunityHeader">
        <span className="trustEyebrow">
          Satış sonrası da yanınızdayız
        </span>

        <h2>
          <strong>3.400’den fazla</strong> kişinin yer aldığı
          <br />
          WhatsApp tarif ve destek topluluğu
        </h2>

        <p>
          Günlük tarif fikirleri, püf noktaları, kullanıcı deneyimleri ve
          ihtiyaç duyduğunuz konularda danışman desteği sunuyoruz.
        </p>
      </div>

      <div className="trustCommunityVisual">
        <img
          src="/wp-gruplari.png"
          alt="3.400+ kişilik WhatsApp tarif ve destek topluluğu"
        />
      </div>

      <div className="trustCommunityFooter">
        <div className="trustBenefit">
          <span className="trustBenefitIcon">💬</span>
          <div>
            <strong>Günlük tarif paylaşımları</strong>
            <small>Yeni tarifler ve mutfak fikirleri</small>
          </div>
        </div>

        <div className="trustBenefit">
          <span className="trustBenefitIcon">👥</span>
          <div>
            <strong>Soru ve cevap desteği</strong>
            <small>Merak ettikleriniz için destek</small>
          </div>
        </div>

        <div className="trustBenefit">
          <span className="trustBenefitIcon">🛡️</span>
          <div>
            <strong>Satış sonrası danışmanlık</strong>
            <small>Ürünü aldıktan sonra da yanınızdayız</small>
          </div>
        </div>

        <button onClick={contact}>
          <span>◉</span>
          WhatsApp Topluluğu Hakkında Bilgi Al
          <b>›</b>
        </button>
      </div>
    </section>
  );
}

function Home({ go, contact }) {
  return (
    <>
      <Hero go={go} contact={contact} />
      <TrustCommunity contact={contact} />
      <section className="features">
        {['Zaman Tasarrufu', 'Çok Fonksiyonlu', 'Sağlıklı Tarifler', 'Danışman Desteği'].map((x, i) => (
          <div className="feature" key={x}><span>{['⏱️','✨','🥗','🤝'][i]}</span><h3>{x}</h3><p>Thermomix deneyimini daha anlaşılır ve pratik hale getiren kişisel destek.</p></div>
        ))}
      </section>
    
    </>
  );
}

function About({ contact }) {
  const [showFunctions, setShowFunctions] = useState(false);
  const functions = [
    ['🔪', 'Doğrama', 'Sebze, meyve ve malzemeleri hızlıca doğrar.'],
    ['🥣', 'Karıştırma', 'Sos, çorba ve karışımları homojen hale getirir.'],
    ['🍞', 'Yoğurma', 'Ekmek, pizza ve hamur işlerini kolaylaştırır.'],
    ['♨️', 'Buharda Pişirme', 'Varoma ile sağlıklı ve dengeli pişirme sunar.'],
    ['⚖️', 'Hassas Tartı', 'Malzemeleri doğrudan haznede ölçmenizi sağlar.'],
    ['📖', 'Rehberli Tarifler', 'Cookidoo ile adım adım tarif yönlendirmesi sunar.'],
  ];

  return (
    <section className="aboutPremium">
      <div className="aboutPremiumHeader">
        <span>Thermomix TM7</span>

        <h1>
          Tek cihazda
          <strong> mutfağınızın tüm ihtiyaçları</strong>
        </h1>

        <p>
          Thermomix TM7; hazırlıktan pişirmeye kadar birçok işlemi tek cihazda
          birleştirerek mutfakta zamandan ve alandan tasarruf sağlar.
        </p>
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
    if (e.key === "Enter" || e.key === " ") {
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

        <button onClick={contact}>
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

function TM7BoxContents({ contact }) {
  return (
    <section className="tm7BoxSection">

      <div className="sectionIdentity">
        <span className="sectionIdentityEyebrow">
          THERMOMIX TM7
        </span>

        <h1>
          TM7 Kutusunda <strong>Neler Var?</strong>
        </h1>

        <p>
          Thermomix TM7 ile birlikte gelen temel parçaları,
          aksesuarları ve kullanım alanlarını tek bakışta inceleyin.
        </p>
      </div>


      <div className="tm7BoxVisualWrap">

        <div className="tm7BoxVisualTop">
          <div>
            <span>KUTU İÇERİĞİ</span>

            <h2>
              TM7 ile gelen her şey
              <strong> bir arada.</strong>
            </h2>
          </div>

          <p>
            Varoma setinden karıştırma kabına, bıçaktan spatulaya kadar
            Thermomix TM7 ile birlikte kullanacağınız temel parçaları
            aşağıdaki görselde inceleyebilirsiniz.
          </p>
        </div>


        <div className="tm7BoxImage">
          <img
            src="/tm7-kutu-icerigi.png"
            alt="Thermomix TM7 kutu içeriği ve aksesuarları"
          />
        </div>

      </div>


      <div className="tm7BoxBottom">

        <div className="tm7BoxBottomText">
          <span>ÜRÜN HAKKINDA MERAK ETTİKLERİNİZ Mİ VAR?</span>

          <h3>
            Thermomix TM7'yi
            <strong> yakından keşfedin.</strong>
          </h3>

          <p>
            Kutu içeriği, aksesuarların kullanımı, güncel kampanyalar
            veya satın alma süreciyle ilgili sorularınız için
            doğrudan iletişime geçebilirsiniz.
          </p>
        </div>

        <button
          type="button"
          className="tm7BoxContactButton"
          onClick={contact}
        >
          <img src="/whatsapp-icon.png" alt="" />

          <span>
            <small>Hızlı bilgi alın</small>
            WhatsApp'tan Bana Ulaşın
          </span>

          <b>→</b>
        </button>

      </div>

    </section>
  );
}

function TM7Functions() {
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

  <h1>
    TM7 <strong>Fonksiyonları</strong>
  </h1>

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

function CookidooSection({ contact }) {
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

  return (
    <section className="cookidooPremium">
      <div className="cookidooHero cookidooHeroV2">

  {/* SOL TARAF */}
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

    <div className="cookidooHeroActions">
      <a
        href="https://cookidoo.thermomix.com"
        target="_blank"
        rel="noreferrer"
      >
        Cookidoo'yu Keşfet
        <b>↗</b>
      </a>

      <button onClick={contact}>
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


  {/* SAĞ TARAF */}
  {/* SAĞ TARAF - TEK PARÇA FİNAL GÖRSEL */}
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

function FAQSection() {
  const faqs = [
    {
      q: "Thermomix TM7 nedir?",
      a: "Thermomix TM7; doğrama, karıştırma, yoğurma, buharda pişirme, yavaş pişirme, rendeleme, dilimleme ve daha birçok mutfak işlemini tek cihazda bir araya getiren çok işlevli bir mutfak cihazıdır."
    },
    {
      q: "Thermomix TM7 ile hangi yemekler yapılabilir?",
      a: "Çorba, ana yemek, hamur işi, tatlı, sos, içecek, buharda pişirilen yemekler ve daha birçok tarif hazırlanabilir. Cookidoo® üzerinden farklı kategorilerde binlerce tarife ulaşabilirsiniz."
    },
    {
      q: "Cookidoo® nedir?",
      a: "Cookidoo®, Thermomix'in resmi dijital tarif platformudur. Tarif keşfetme, haftalık yemek planlama, alışveriş listesi oluşturma ve rehberli pişirme gibi özellikler sunar."
    },
    {
      q: "Cookidoo®'da Türkçe tarif var mı?",
      a: "Evet. Cookidoo® içerisinde 1.500'den fazla Türkçe tarif bulunmaktadır ve yeni tarifler eklenmeye devam etmektedir."
    },
    {
      q: "Thermomix TM7'yi kullanmak zor mu?",
      a: "Hayır. Rehberli Pişirme özelliği sayesinde tarif adımlarını ekrandan takip edebilirsiniz. Cihaz size hangi malzemeyi ne zaman eklemeniz gerektiğini ve hangi işlemin uygulanacağını adım adım gösterir."
    },
    {
      q: "Thermomix TM7 aynı anda birden fazla yemek hazırlayabilir mi?",
      a: "Evet. Varoma sistemi sayesinde farklı seviyelerde buharda pişirme yapılabilir ve bazı tariflerde aynı anda birden fazla yemek hazırlanabilir."
    },
    {
      q: "Thermomix TM7 nereden satın alınır?",
      a: "Satın alma işlemi Vorwerk'in resmi satış sistemi üzerinden gerçekleştirilir. Danışman kodu ile yapılan alışverişlerde danışman desteği de satış öncesi ve sonrasında devam eder."
    },
    {
      q: "Thermomix danışman desteği neleri kapsar?",
      a: "Ürün tanıtımı, kampanya bilgilendirmesi, satın alma süreci, Cookidoo kullanımı, tarif desteği ve satış sonrası yönlendirme gibi konularda birebir destek sağlanır."
    },
    {
      q: "Ücretsiz tanıtım veya demo talep edebilir miyim?",
      a: "Evet. Uygunluğa göre online veya yüz yüze tanıtım talep edebilirsiniz. İletişim bölümünden bize ulaşmanız yeterlidir."
    },
    {
      q: "Thermomix TM7'nin temizliği zor mu?",
      a: "Hayır. Cihazın ön yıkama ve temizlik destek özellikleri bulunur. Hazne ve birçok parça da günlük kullanım sonrasında kolayca temizlenebilir."
    }
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="faqPremium">
      <div className="faqHeader">
        <span className="faqEyebrow">S.S.S</span>

        <h2>
          Merak ettikleriniz,
          <strong> tek yerde.</strong>
        </h2>

        <p>
          Thermomix TM7, Cookidoo®, satın alma süreci ve danışmanlık
          hizmetiyle ilgili en sık sorulan soruları burada bulabilirsiniz.
        </p>
      </div>

      <div className="faqList">
        {faqs.map((faq, index) => {
          const active = openFaq === index;

          return (
            <div
              className={`faqItem ${active ? "faqItemOpen" : ""}`}
              key={faq.q}
            >
              <button
                type="button"
                className="faqQuestion"
                onClick={() => setOpenFaq(active ? -1 : index)}
                aria-expanded={active}
              >
                <span className="faqNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faqQuestionText">
                  {faq.q}
                </span>

                <span className="faqToggle">
                  {active ? "−" : "+"}
                </span>
              </button>

              <div className="faqAnswer">
                <div>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faqBottom">
        <div>
          <span>Aradığınız cevabı bulamadınız mı?</span>
          <strong>Bana doğrudan ulaşabilirsiniz.</strong>
        </div>

        <button onClick={() => {
          const consultant = document.getElementById("consultant");
          consultant?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }}>
          Benimle İletişime Geç
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

function Campaigns({ contact, compact }) {
  return <section className="page"><div className="sectionTitle"><span>🎁 Kampanyalar</span><h1>Ayın kampanyalarını buradan takip edin</h1><p>Güncel Thermomix kampanyaları ve demo fırsatları için iletişime geçebilirsiniz.</p></div><div className="cards">{campaigns.map(([t,d,b]) => <div className="card" key={t}><div className="badge">{b}</div><h3>{t}</h3><p>{d}</p><button onClick={contact}>Detaylı Bilgi</button></div>)}</div>{!compact && <div className="note">SEO, Google Analytics, Meta Pixel ve WhatsApp dönüşüm takibi canlı yayında eklenmeye hazırdır.</div>}</section>;
}

function Blog() {
  return <section className="page"><div className="sectionTitle"><span>📖 Tarifler & Blog</span><h1>Bilgiler, tarifler ve mutfak ipuçları</h1><p>Thermomix gelene kadar altyapı hazır; ürün geldikten sonra düzenli içeriklerle Google ve Instagram trafiği büyütülebilir.</p></div><div className="cards blogCards">{blog.map(([t,d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p><a>Devamını Oku →</a></div>)}</div></section>;
}

function AboutUs({ contact }) {
  return (
    <section className="aboutUsPremium">
      <div className="aboutUsIntro">
        <span className="aboutUsEyebrow">LEZZET ASİSTANI</span>

        <h2>
          Thermomix yolculuğunuzda
          <strong> yalnız değilsiniz.</strong>
        </h2>

        <p>
          Ürün tanıtımından satın alma sürecine, Cookidoo kullanımından
          satış sonrası desteğe kadar Thermomix deneyiminizin her aşamasında
          doğru bilgi ve kişisel danışmanlık sunuyoruz.
        </p>

        <p>
          Bireysel danışmanlık hizmetimizi, deneyimli danışman ekibimizin
          bilgi birikimi ve tecrübesiyle destekliyoruz.
        </p>

        <button onClick={contact}>
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

function Consultant({ contact }) {
  return (
    <section className="contactPagePremium">

      {/* BAŞLIK */}
      <div className="contactPageHeader">
        <span className="contactPageEyebrow">
          İLETİŞİM
        </span>

        <h2>
          Thermomix hakkında aklınıza takılan
          <br />
          her şey için <strong>buradayım.</strong>
        </h2>

        <p>
          Thermomix TM7, güncel kampanyalar, ödeme seçenekleri,
          tanıtım süreci ve kullanım hakkında bilgi almak için
          size en uygun iletişim kanalını kullanabilirsiniz.
        </p>
      </div>


      {/* İLETİŞİM KARTLARI */}
      <div className="contactChannelGrid">

        {/* WHATSAPP */}
        <article className="contactChannelCard contactWhatsapp">
          <div className="contactChannelTop">

            <div className="contactChannelIcon">
              <img
                src="/whatsapp-icon.png"
                alt="WhatsApp"
              />
            </div>

            <span className="contactChannelBadge">
              En Hızlı Yanıt
            </span>

          </div>

          <h3>WhatsApp</h3>

          <p>
            Thermomix hakkında hızlı destek ve bilgi almak için
            bana doğrudan WhatsApp’tan yazabilirsiniz.
          </p>

          <strong className="contactChannelValue">
            {SITE.phoneDisplay}
          </strong>

          <button
            type="button"
            onClick={contact}
            className="contactChannelButton"
          >
            <img src="/whatsapp-icon.png" alt="" />
            WhatsApp’tan Yaz
            <span>→</span>
          </button>
        </article>


        {/* TELEFON */}
        <article className="contactChannelCard contactPhone">

          <div className="contactChannelTop">

            <div className="contactChannelIcon contactPhoneIcon">
              ☎
            </div>

            <span className="contactChannelBadge">
              Beni Arayın
            </span>

          </div>

          <h3>Telefon</h3>

          <p>
            Sorularınızı doğrudan görüşmek isterseniz
            telefon üzerinden bana ulaşabilirsiniz.
          </p>

          <strong className="contactChannelValue">
            {SITE.phoneDisplay}
          </strong>

          <a
            href={`tel:+90${SITE.phoneDisplay.replace(/\s/g, '').replace(/^0/, '')}`}
            className="contactChannelButton"
          >
            <span className="contactPhoneSmall">☎</span>
            Hemen Ara
            <span>→</span>
          </a>

        </article>


        {/* INSTAGRAM */}
        <article className="contactChannelCard contactInstagram">

          <div className="contactChannelTop">

            <div className="contactChannelIcon">
              <img
                src="/instagram-icon.png"
                alt="Instagram"
              />
            </div>

            <span className="contactChannelBadge">
              Takip Edin
            </span>

          </div>

          <h3>Instagram</h3>

          <p>
            Güncel kampanyalar, Thermomix içerikleri ve
            duyurular için Instagram hesabımı takip edebilirsiniz.
          </p>

          <strong className="contactChannelValue">
            @lezzetasistani
          </strong>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="contactChannelButton"
          >
            <img src="/instagram-icon.png" alt="" />
            Instagram’a Git
            <span>→</span>
          </a>

        </article>

      </div>


      {/* GÜVEN ALANI */}
      <div className="contactTrustStrip">

        <div>
          <span>✓</span>
          <div>
            <strong>Kişisel Danışmanlık</strong>
            <small>
              İhtiyaçlarınıza göre birebir yönlendirme
            </small>
          </div>
        </div>

        <div>
          <span>◷</span>
          <div>
            <strong>Hızlı Destek</strong>
            <small>
              Satış öncesi ve sonrası iletişim
            </small>
          </div>
        </div>

        <div>
          <span>👥</span>
          <div>
            <strong>3.400+ Kişilik Topluluk</strong>
            <small>
              Tarif ve kullanım desteği
            </small>
          </div>
        </div>

        <div>
          <span>✓</span>
          <div>
            <strong>Danışman Kodu</strong>
            <small>
              TM101637
            </small>
          </div>
        </div>

      </div>


      {/* ÜCRETSİZ TANITIM */}
      <div className="contactDemoBanner">

        <div className="contactDemoIcon">
          📅
        </div>

        <div className="contactDemoContent">

          <span>
            ÜCRETSİZ TANITIM GÖRÜŞMESİ
          </span>

          <h3>
            Thermomix TM7’yi
            <strong> yakından keşfetmek ister misiniz?</strong>
          </h3>

          <p>
            Ücretsiz tanıtım görüşmesinde Thermomix TM7’yi
            yakından tanıyabilir, sorularınızı sorabilir ve
            size uygun kullanım seçeneklerini öğrenebilirsiniz.
          </p>

        </div>

        <button
          type="button"
          onClick={contact}
          className="contactDemoButton"
        >
          <img
            src="/whatsapp-icon.png"
            alt=""
          />

          <span>
            <small>WhatsApp üzerinden</small>
            Ücretsiz Görüşme Talep Et
          </span>

          <b>→</b>
        </button>

      </div>


      <div className="contactPrivacy">
        🔒 Bilgileriniz yalnızca iletişim amacıyla kullanılır.
      </div>

    </section>
  );
}

function SiteFooter({ contact }) {
  return (
    <footer className="professionalFooter">
      <div className="footerMain">
        <div className="footerBrand">
          <div className="footerLogoCircle">
            <img src="/logo.png" alt="Lezzet Asistanı" />
          </div>
        </div>

        <div className="footerIntro">
          <h3>
            Lezzetli anlar,
            <strong> profesyonel destekle başlar.</strong>
            <span>♥</span>
          </h3>

          <p>
            Thermomix® marka adı ilgili sahibine aittir.
            <br />
            Bu site bağımsız danışman tanıtımı için hazırlanmıştır.
          </p>

          <div className="footerConsultantBadge">
            <span>✓</span>

            <div>
              <small>Thermomix Bağımsız Danışmanı</small>
              <strong>TM101637</strong>
            </div>
          </div>
        </div>

        <div className="footerContactList">
          <button type="button" onClick={contact}>
            <span className="footerContactIcon">
              <img src="/whatsapp-icon.png" alt="" />
            </span>

            <div>
              <small>WhatsApp</small>
              <strong>WhatsApp Destek Hattı</strong>
            </div>

            <b>›</b>
          </button>

          <a
           href={`tel:+90${SITE.phoneDisplay.replace(/\s/g, '')}`}>
            <span className="footerContactIcon footerPhoneIcon">☎</span>

            <div>
              <small>Telefon</small>
              <strong>{SITE.phoneDisplay}</strong>
            </div>

            <b>›</b>
          </a>

          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            <span className="footerContactIcon">
              <img src="/instagram-icon.png" alt="" />
            </span>

            <div>
              <small>Instagram</small>
              <strong>@lezzetasistani</strong>
            </div>

            <b>›</b>
          </a>

          <a href={SITE.youtube} target="_blank" rel="noreferrer">
            <span className="footerContactIcon footerYoutubeIcon">▶</span>

            <div>
              <small>YouTube</small>
              <strong>Lezzet Asistanı</strong>
            </div>

            <b>›</b>
          </a>
        </div>
      </div>

      <div className="footerTrustRow">
        <div>
          <span>🛡️</span>

          <div>
            <strong>Güvenilir İletişim</strong>
            <small>Kişisel bilgileriniz güvende.</small>
          </div>
        </div>

        <div>
          <span>◷</span>

          <div>
            <strong>Hızlı Destek</strong>
            <small>Mesajlarınıza en kısa sürede dönüş.</small>
          </div>
        </div>

        <div>
          <span>✓</span>

          <div>
            <strong>Bağımsız Danışman</strong>
            <small>Size özel bilgilendirme ve yönlendirme.</small>
          </div>
        </div>
      </div>

      <div className="footerCopyright">
        © 2026 {SITE.brand}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function Demo({ contact }) {
  return <section className="page"><div className="sectionTitle"><span>📅 Demo Talebi</span><h1>Ücretsiz tanıtım görüşmesi isteyin</h1><p>Form demo mantığını gösterir. Şimdilik buton WhatsApp’a yönlendirilir.</p></div><div className="form"><input placeholder="Ad Soyad" /><input placeholder="Telefon" /><input placeholder="E-posta" /><select><option>Online demo</option><option>Yüz yüze demo</option><option>Sadece bilgi almak istiyorum</option></select><textarea placeholder="Notunuz" /><button className="primary" onClick={contact}>Demo Talebi Gönder</button></div></section>;
}

function Contact({ contact }) {
  return <section className="page"><div className="sectionTitle"><span>📞 İletişim</span><h1>Thermomix hakkında bilgi almak için ulaşın</h1><p>WhatsApp, Instagram veya e-posta üzerinden hızlıca iletişime geçebilirsiniz.</p></div><div className="cards"><button className="card left" onClick={contact}><h3>WhatsApp</h3><p>{SITE.phoneDisplay}</p></button><a className="card" href={SITE.instagram} target="_blank"><h3>Instagram</h3><p>@lezzetasistani</p></a><div className="card"><h3>Web</h3><p>{SITE.domain}</p></div></div></section>;
}

export default function Page() {
  const [page, setPage] = useState('home');
const [modal, setModal] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [showHeader, setShowHeader] = useState(true);
const [productMenuOpen, setProductMenuOpen] = useState(false);
const [showScrollTop, setShowScrollTop] = useState(false);
const [headerFloating, setHeaderFloating] = useState(false);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Navbar artık üst bilgi çubuğunu geçti mi?
    setHeaderFloating(currentScrollY > 120);

    // Sayfanın üst kısmında her zaman göster
    if (currentScrollY <= 120) {
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY) {
      // Aşağı kaydırılıyor
      setShowHeader(false);
      setProductMenuOpen(false);
    } else if (currentScrollY < lastScrollY) {
      // Yukarı kaydırılıyor
      setShowHeader(true);
    }

    setShowScrollTop(currentScrollY > 500);

    lastScrollY = currentScrollY;
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll, {
    passive: true
  });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const go = (sectionId) => {
  setMenuOpen(false);

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setPage(sectionId);
};
  return (
    <main>
      <ContactModal open={modal} onClose={() => setModal(false)} />
        <CampaignPopup contact={() => setModal(true)} />
      <>
  <div className="siteTopBar">
    <a
      href={SITE.instagram}
      target="_blank"
      rel="noreferrer"
      className="topBarInstagram"
    >
      <img src="/instagram-icon.png" alt="" />
      Instagram'da bizi takip edin
    </a>

    <div className="topBarConsultant">
      <span>
        Danışman Kodu:
        <strong> TM101637</strong>
      </span>

      <i></i>

      <span>
        Thermomix Bağımsız Danışmanı:
        <strong> {SITE.consultant}</strong>
      </span>
    </div>
  </div>

  <div className={`newSiteHeaderSlot ${headerFloating ? 'floatingActive' : ''}`}>
  <header
    className={`newSiteHeader ${headerFloating ? 'headerFloating' : ''} ${
      showHeader ? 'headerVisible' : 'hideHeader'
    }`}
  >
    <button
      type="button"
      className="newHeaderBrand"
      onClick={() => go('home')}
    >
      <img src="/logo.png" alt="Lezzet Asistanı" />

      <div>
        <strong>LEZZET</strong>
        <span>ASİSTANI</span>
        <small>THERMOMIX DANIŞMANLIĞI</small>
      </div>
    </button>

    <button
      className="newMobileMenuButton"
      onClick={() => setMenuOpen(true)}
      aria-label="Menüyü aç"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav className={`newDesktopNav ${menuOpen ? 'mobileOpen' : ''}`}>
      <div className="mobileNavHeader">
        <strong>Menü</strong>

        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            setProductMenuOpen(false);
          }}
        >
          ×
        </button>
      </div>

      <button onClick={() => go('home')}>
        Anasayfa
      </button>

      <div
        className={`productDropdown ${
          productMenuOpen ? 'productOpen' : ''
        }`}
      >
        <button
          type="button"
          className="productDropdownTrigger"
          onClick={() => setProductMenuOpen(!productMenuOpen)}
        >
          Ürünler
        <span className="dropdownChevron"></span>
        </button>

        <div className="productDropdownMenu">
          <button
            onClick={() => {
              go('about');
              setProductMenuOpen(false);
            }}
          >
            <span>♨</span>
            <div>
              <strong>Thermomix TM7</strong>
              <small>TM7'yi yakından keşfedin</small>
            </div>
          </button>

          <button
            onClick={() => {
  go('boxcontents');
  setProductMenuOpen(false);
}}
          >
            <span>□</span>
            <div>
              <strong>TM7 Kutusunda Neler Var?</strong>
              <small>Kutu içeriğini inceleyin</small>
            </div>
          </button>
        </div>
      </div>

      <button onClick={() => go('aboutus')}>
  Hakkımızda
</button>

      <button onClick={() => go('tm7functions')}>
  TM7 Fonksiyonları
</button>

      <button onClick={() => go('cookidoo')}>
  Cookidoo
</button>

      <button onClick={() => go('faq')}>
  S.S.S
</button>

      <button onClick={() => go('home')}>
        Kampanyalar
      </button>


      <button onClick={() => go('consultant')}>
        İletişim
      </button>

      <button
        className="mobileNavContact"
        onClick={() => {
          setMenuOpen(false);
          setModal(true);
        }}
      >
        WhatsApp'tan Bilgi Al
      </button>
    </nav>

    <button
      className="newHeaderCta"
      onClick={() => setModal(true)}
    >
      <img src="/whatsapp-icon.png" alt="" />
      Ücretsiz Bilgi Al
    </button>
  </header>
  </div>

  {menuOpen && (
    <div
      className="mobileNavBackdrop"
      onClick={() => {
        setMenuOpen(false);
        setProductMenuOpen(false);
      }}
    />
  )}
</>
      <div id="home" className="scrollSection">
  <Home go={go} contact={() => setModal(true)} />
</div>

<div id="about" className="scrollSection">
  <About contact={() => setModal(true)} />
</div>

<div id="boxcontents" className="scrollSection">
  <TM7BoxContents contact={() => setModal(true)} />
</div>

<div id="tm7functions" className="scrollSection">
  <TM7Functions />
</div>

<div id="cookidoo" className="scrollSection">
  <CookidooSection contact={() => setModal(true)} />
</div>

<div id="faq" className="scrollSection">
  <FAQSection />
</div>

<div id="aboutus" className="scrollSection">
  <AboutUs contact={() => setModal(true)} />
</div>


<div id="consultant" className="scrollSection">
  <Consultant contact={() => setModal(true)} />
</div>

      <SiteFooter contact={() => setModal(true)} />

{showScrollTop && (
  <button
    type="button"
    className="scrollToTopButton"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }}
    aria-label="Sayfanın en üstüne çık"
    title="Yukarı çık"
  >
    ↑
  </button>
)}

<WhatsAppWidget
  contact={() => setModal(true)}
  contactModalOpen={modal}
/>
    </main>
  );
}


