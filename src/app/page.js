'use client';

import { useEffect, useState } from 'react';

const SITE = {
  brand: 'Lezzet Asistanı',
  subtitle: 'Thermomix Danışmanlığı • Tarifler • Mutfak İpuçları',
  consultant: 'Doğukan Yıldız',
  city: 'İstanbul',
  phoneDisplay: '0501 692 31 35',
  whatsapp: '905016923135',
  instagram: 'https://instagram.com/lezzetasistani',
  tiktok: 'https://www.tiktok.com/@thermo.lezzetasistani',
  domain: 'lezzetasistani.com',
};

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
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
  <button className="close" onClick={onClose}>×</button>

  <h2>Bizimle İletişime Geçin</h2>

  <p>
    Thermomix TM7, kampanyalar ve demo talebi için bize aşağıdaki
    kanallardan ulaşabilirsiniz.
  </p>
        <div className="modalGrid">
          <a className="contactCard whatsapp" href={`https://wa.me/${SITE.whatsapp}?text=Merhaba%20Doğukan%20Bey,%20Thermomix%20TM7%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank">WhatsApp<br /><small>{SITE.phoneDisplay}</small></a>
          <a className="contactCard instagram" href={SITE.instagram} target="_blank">Instagram<br /><small>@lezzetasistani</small></a>
        </div>
      </div>
    </div>
  );
}
function WhatsAppWidget({ contact }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

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
              <button onClick={contact}>Bilgi almak istiyorum.</button>
              <button onClick={contact}>Demo talep etmek istiyorum.</button>
              <button onClick={contact}>Kampanyaları öğrenmek istiyorum.</button>
            </div>
          </div>

          <button className="waChatInput" onClick={contact}>
            <span>Mesaj yaz...</span>
            <b>➤</b>
          </button>
        </div>
      ) : (
        <button className="waMiniButton" onClick={() => setOpen(true)}>
          🟢 WhatsApp Destek Hattı
          <span></span>
        </button>
      )}
    </div>
  );
}
function CampaignPopup({ contact }) {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setOpen(true), 3500);
  return () => clearTimeout(timer);
}, []);

  if (!open) return null;

  return (
    <div className="campaignModalBackdrop">
      <div className="campaignModal">
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

        <div className="campaignModalVisual">
          <img src="/tm7-kampanya.jpg" alt="Thermomix TM7 Kampanya" />
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

function Campaigns({ contact, compact }) {
  return <section className="page"><div className="sectionTitle"><span>🎁 Kampanyalar</span><h1>Ayın kampanyalarını buradan takip edin</h1><p>Güncel Thermomix kampanyaları ve demo fırsatları için iletişime geçebilirsiniz.</p></div><div className="cards">{campaigns.map(([t,d,b]) => <div className="card" key={t}><div className="badge">{b}</div><h3>{t}</h3><p>{d}</p><button onClick={contact}>Detaylı Bilgi</button></div>)}</div>{!compact && <div className="note">SEO, Google Analytics, Meta Pixel ve WhatsApp dönüşüm takibi canlı yayında eklenmeye hazırdır.</div>}</section>;
}

function Blog() {
  return <section className="page"><div className="sectionTitle"><span>📖 Tarifler & Blog</span><h1>Bilgiler, tarifler ve mutfak ipuçları</h1><p>Thermomix gelene kadar altyapı hazır; ürün geldikten sonra düzenli içeriklerle Google ve Instagram trafiği büyütülebilir.</p></div><div className="cards blogCards">{blog.map(([t,d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p><a>Devamını Oku →</a></div>)}</div></section>;
}

function Consultant({ contact }) {
  return (
    <section className="consultantPremium">
      <div className="consultantIntro">
        <span className="consultantBadge">
          ✓ Thermomix Bağımsız Danışmanı
        </span>

        <h2>
          Merhaba, ben
          <strong>{SITE.consultant}</strong>
        </h2>

        <h3>Thermomix Bağımsız Danışmanı</h3>

        <p>
          Thermomix ile mutfağınızı daha pratik ve keyifli hale getirmeniz
          için buradayım. Ürün tanıtımı, kampanya bilgilendirmesi, tarif
          desteği ve satış sonrası süreçlerde size özel danışmanlık
          sağlıyorum.
        </p>

        <div className="consultantQuickFeatures">
          <div>
            <span>👥</span>
            <p>Kişiye özel danışmanlık</p>
          </div>

          <div>
            <span>📅</span>
            <p>Online veya yüz yüze tanıtım</p>
          </div>

          <div>
            <span>📖</span>
            <p>Tarif ve Cookidoo desteği</p>
          </div>

          <div>
            <span>🏷️</span>
            <p>Güncel kampanya bilgileri</p>
          </div>

          <div>
            <span>🎧</span>
            <p>Satış öncesi ve sonrası destek</p>
          </div>

          <div>
            <span>💬</span>
            <p>Hızlı ve çözüm odaklı iletişim</p>
          </div>
        </div>

        <button className="consultantWhatsappButton" onClick={contact}>
          <span className="socialIcon">
        <img
  src="/whatsapp-icon.png"
  alt="WhatsApp"
  className="socialPlatformIcon whatsappIcon"
/>
    </span>
          WhatsApp’tan Bana Ulaşın
          <b>→</b>
        </button>

        <small className="consultantTrustText">
          🛡️ Güvenilir, hızlı ve çözüm odaklı iletişim
        </small>
      </div>

      <div className="consultantBrandCard">
        <div className="consultantLogoCircle">
          <img src="/logo.png" alt="Lezzet Asistanı" />
        </div>

        <h2>{SITE.consultant}</h2>
        <p>Thermomix Bağımsız Danışmanı</p>

        <div className="consultantCodeCard">
          <span>🪪 Danışman Kodu</span>
          <strong>TM101637</strong>
        </div>
      </div>

      <div className="consultantContactCard">
        <h3>İletişim Bilgilerim</h3>

        <div className="consultantContactList">
          <button onClick={contact}>
            <span>◉</span>
            <div>
              <small>WhatsApp</small>
              <strong>{SITE.phoneDisplay}</strong>
            </div>
          </button>

          <a href={`tel:+90${SITE.phoneDisplay.replace(/\s/g, '')}`}>
            <span>☎</span>
            <div>
              <small>Telefon</small>
              <strong>{SITE.phoneDisplay}</strong>
            </div>
          </a>

          <div className="consultantLocationItem">
  <span className="consultantContactIcon">📍</span>

  <div className="consultantContactText">
    <small>Konum</small>
    <strong>{SITE.city}</strong>
  </div>
</div>
        </div>

        <h3 className="consultantSocialTitle">
          Sosyal Medya Hesaplarım
        </h3>

        <div className="consultantSocialList">
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            <span className="socialIcon">
  <img
    src="/instagram-icon.png"
    alt="Instagram"
    className="socialPlatformIcon"
  />
</span>
            <div>
              <small>Instagram</small>
              <strong>@lezzetasistani</strong>
            </div>
            <b>›</b>
          </a>

          <a href={SITE.tiktok} target="_blank" rel="noreferrer">
            <span className="socialIcon">
  <img
    src="/tiktok-icon.png"
    alt="TikTok"
    className="socialPlatformIcon"
  />
</span>
            <div>
              <small>TikTok</small>
              <strong>@thermo.lezzetasistani</strong>
            </div>
            <b>›</b>
          </a>

          <a
            href="https://lezzetasistani.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>🌐</span>
            <div>
              <small>Web Sitesi</small>
              <strong>lezzetasistani.com</strong>
            </div>
            <b>›</b>
          </a>
        </div>
      </div>
    </section>
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

useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setShowHeader(currentScroll < lastScroll || currentScroll < 80);
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
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
      <header className={`siteHeader ${showHeader ? '' : 'hideHeader'}`}>
  <Logo />
  <button className="mobileMenuButton" onClick={() => setMenuOpen(!menuOpen)}>☰ Menü</button>
  <nav className={menuOpen ? 'open' : ''}>
    {pages.map(([key, label, target]) => (
  <button
    key={key}
    className={page === target ? 'active' : ''}
    onClick={() => go(target)}
  >
    {label}
  </button>
))}
  </nav>
  <button className="headerCta" onClick={() => setModal(true)}>WhatsApp</button>
</header>
      <div id="home" className="scrollSection">
  <Home go={go} contact={() => setModal(true)} />
</div>

<div id="about" className="scrollSection">
  <About contact={() => setModal(true)} />
</div>


<div id="consultant" className="scrollSection">
  <Consultant contact={() => setModal(true)} />
</div>

      <footer><Logo /><p>© 2026 {SITE.brand}. Thermomix® marka adı ilgili sahibine aittir. Bu site bağımsız danışman tanıtımı için hazırlanmıştır.</p></footer>
      <WhatsAppWidget contact={() => setModal(true)} />
    </main>
  );
}
