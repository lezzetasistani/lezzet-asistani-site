'use client';

import Link from 'next/link';
import ConsultantSection from './components/ConsultantSection';
import SiteHeader from './components/SiteHeader';
import AboutUsSection from './components/AboutUsSection';
import { useEffect, useState, useRef } from 'react';
import TM7AboutSection from './components/TM7AboutSection';
import TM7FunctionsSection from './components/TM7FunctionsSection';
import TM7BoxContentsSection from './components/TM7BoxContentsSection';
import CookidooSection from './components/CookidooSection';
import SiteFooter from './components/SiteFooter';


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
           href={`https://wa.me/${SITE.whatsapp}?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29`}
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

<h2>
            Çekici
            <br />
            Fırsat!
          </h2>

          <div className="campaignTopInfo">
  <div className="campaignPriceBadge">
    <span>Vade Farksız</span>
    <strong>6 Taksitle</strong>
    <b>TM7 89.990₺</b>
  </div>

  <small className="campaignDate">
    1 - 31 AĞUSTOS
  </small>
</div>

          

{/* MOBİLDE GÖRÜNECEK */}
          <div className="campaignModalVisual campaignModalVisualMobile">
  <img
    src="/tm7-kampanya.jpg"
    alt="Thermomix TM7 Kampanya"
  />
</div>

         <p>
  Ağustos ayına özel Thermomix TM7 kampanyasında,
  <strong> Garanti Bonus kredi kartıyla 3 taksitli alımda 10.000₺ Bonus</strong>
  {' '}fırsatından yararlanabilirsiniz. Ayrıca normal satış fiyatı
  <strong> 6.990₺</strong> olan
  <strong> Kobold VM7 Şarjlı El Süpürgesi</strong>,
  kampanya kuponuyla <strong>4.000₺</strong> oluyor.
  Kampanya detayları için bana WhatsApp'tan ulaşabilirsiniz.
</p>

          <div className="campaignBenefits">
  <div>✓ Vade farksız 6 taksitle TM7: 89.990₺</div>
  <div>✓ Garanti Bonus kredi kartına 3 taksitli alımda 10.000₺ Bonus</div>
  <div>✓ 9.000₺ değerinde +3 yıl ek garanti hediye</div>
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

  <Link
    href="/thermomix-tm7-fiyat-kampanya"
    className="campaignHeroLink"
    aria-label="Thermomix TM7 güncel fiyat ve kampanyalarını inceleyin"
  >
    <img
      src="/tm7-kampanya.jpg"
      alt="Thermomix TM7 güncel fiyat ve Ağustos 2026 kampanyaları"
    />
  </Link>

<p className="campaignImageHint">
    Kampanya detaylarını görmek için görsele dokunun <span>→</span>
  </p>

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
        <Link href="/thermomix-danismani" className="seoDetailLink">
  Thermomix danışmanlığı hakkında detaylı bilgi →
</Link>
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

function FAQSection() {
  const faqs = [
  {
    q: "Thermomix TM7 nedir?",
    a: (
      <>
        Thermomix TM7; doğrama, karıştırma, yoğurma, buharda pişirme,
        yavaş pişirme, rendeleme, dilimleme ve daha birçok mutfak
        işlemini tek cihazda bir araya getiren çok işlevli bir mutfak
        cihazıdır.{" "}
        <Link href="/thermomix-tm7">
          Thermomix TM7 özelliklerini detaylı inceleyebilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Thermomix TM7; doğrama, karıştırma, yoğurma, buharda pişirme, yavaş pişirme, rendeleme, dilimleme ve daha birçok mutfak işlemini tek cihazda bir araya getiren çok işlevli bir mutfak cihazıdır."
  },

  {
    q: "Thermomix TM7 fiyatı ne kadar?",
    a: (
      <>
        Thermomix TM7'nin satış fiyatı dönemsel olarak değişebilir.
        Güncel fiyat, ödeme seçenekleri ve mevcut kampanyaları{" "}
        <Link href="/thermomix-tm7-fiyat-kampanya">
          Thermomix TM7 fiyat ve kampanya sayfasından
        </Link>{" "}
        inceleyebilirsiniz.
      </>
    ),
    schemaAnswer:
      "Thermomix TM7'nin satış fiyatı dönemsel olarak değişebilir. Güncel fiyat, ödeme seçenekleri ve mevcut kampanyalar Thermomix TM7 fiyat ve kampanya sayfasından incelenebilir."
  },

  {
    q: "Thermomix TM7 taksit yapılıyor mu?",
    a: (
      <>
        Evet. Thermomix TM7 satın alımlarında dönemsel olarak vade
        farksız taksit ve kredi kartı kampanyaları sunulabilmektedir.
        Güncel taksit seçenekleri için{" "}
        <Link href="/thermomix-tm7-fiyat-kampanya">
          fiyat ve kampanya detaylarını inceleyebilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Evet. Thermomix TM7 satın alımlarında dönemsel olarak vade farksız taksit ve kredi kartı kampanyaları sunulabilmektedir. Güncel taksit seçenekleri dönemsel kampanyalara göre değişebilir."
  },

  {
    q: "Thermomix TM7 ile hangi yemekler yapılabilir?",
    a: (
      <>
        Çorba, ana yemek, hamur işi, tatlı, sos, içecek ve buharda
        pişirilen yemekler dahil çok farklı tarifler hazırlanabilir.
        Cookidoo üzerinden farklı mutfaklara ait geniş bir tarif
        arşivine ulaşabilirsiniz.
      </>
    ),
    schemaAnswer:
      "Thermomix TM7 ile çorba, ana yemek, hamur işi, tatlı, sos, içecek ve buharda pişirilen yemekler dahil çok farklı tarifler hazırlanabilir. Cookidoo üzerinden farklı mutfaklara ait geniş bir tarif arşivine ulaşılabilir."
  },

  {
    q: "Cookidoo nedir?",
    a: (
      <>
        Cookidoo, Thermomix'in resmi dijital tarif platformudur.
        Tarif keşfetme, haftalık yemek planlama, alışveriş listesi
        oluşturma ve Rehberli Pişirme gibi özellikler sunar.{" "}
        <Link href="/cookidoo">
          Cookidoo hakkında detaylı bilgi alabilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Cookidoo, Thermomix'in resmi dijital tarif platformudur. Tarif keşfetme, haftalık yemek planlama, alışveriş listesi oluşturma ve Rehberli Pişirme gibi özellikler sunar."
  },

  {
    q: "Cookidoo'da Türkçe tarif var mı?",
    a: (
      <>
        Evet. Cookidoo içerisinde 1.500'den fazla Türkçe tarif
        bulunmaktadır. Ayrıca dünya genelinde çok geniş bir tarif
        arşivine erişebilirsiniz.
      </>
    ),
    schemaAnswer:
      "Evet. Cookidoo içerisinde 1.500'den fazla Türkçe tarif bulunmaktadır. Ayrıca dünya genelinde çok geniş bir tarif arşivine erişilebilir."
  },

  {
    q: "Thermomix TM7'yi kullanmak zor mu?",
    a: (
      <>
        Hayır. Rehberli Pişirme özelliği sayesinde tarif adımlarını
        cihaz ekranından takip edebilirsiniz. TM7 size malzeme ekleme,
        süre, sıcaklık ve diğer hazırlık aşamalarında adım adım
        rehberlik eder.
      </>
    ),
    schemaAnswer:
      "Hayır. Rehberli Pişirme özelliği sayesinde tarif adımları cihaz ekranından takip edilebilir. Thermomix TM7 malzeme ekleme, süre, sıcaklık ve diğer hazırlık aşamalarında kullanıcıya adım adım rehberlik eder."
  },

  {
    q: "Thermomix TM7 aynı anda birden fazla yemek hazırlayabilir mi?",
    a: (
      <>
        Evet. Varoma sistemi sayesinde farklı seviyelerde buharda
        pişirme yapılabilir ve uygun tariflerde aynı anda birden fazla
        yemek hazırlanabilir.
      </>
    ),
    schemaAnswer:
      "Evet. Varoma sistemi sayesinde farklı seviyelerde buharda pişirme yapılabilir ve uygun tariflerde aynı anda birden fazla yemek hazırlanabilir."
  },

  {
    q: "Thermomix TM7'nin kutusundan neler çıkıyor?",
    a: (
      <>
        Thermomix TM7 ana ünite, karıştırma kabı, karıştırma bıçağı,
        kapak, Varoma seti, pişirme sepeti ve spatula gibi temel
        parçalarla birlikte gelir.{" "}
        <Link href="/thermomix-tm7-kutu-icerigi">
          TM7 kutu içeriğini detaylı inceleyebilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Thermomix TM7 ana ünite, karıştırma kabı, karıştırma bıçağı, kapak, Varoma seti, pişirme sepeti ve spatula gibi temel parçalarla birlikte gelir."
  },

  {
    q: "Thermomix TM7'nin garanti süresi ne kadar?",
    a: (
      <>
        Thermomix TM7'nin standart garanti süresi 2 yıldır.
        Dönemsel kampanyalarda ek garanti avantajları da
        sunulabilmektedir. Güncel garanti kampanyalarını{" "}
        <Link href="/thermomix-tm7-fiyat-kampanya">
          kampanya sayfasından inceleyebilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Thermomix TM7'nin standart garanti süresi 2 yıldır. Dönemsel kampanyalarda ek garanti avantajları da sunulabilmektedir."
  },

  {
    q: "Thermomix TM7 nereden satın alınır?",
    a: (
      <>
        Thermomix TM7 satın alma işlemi Vorwerk'in resmi satış sistemi
        üzerinden gerçekleştirilir. Danışman desteğiyle satın alma
        süreci hakkında bilgi alabilir ve satış sonrasında da kullanım
        desteğinden yararlanabilirsiniz.
      </>
    ),
    schemaAnswer:
      "Thermomix TM7 satın alma işlemi Vorwerk'in resmi satış sistemi üzerinden gerçekleştirilir. Danışman desteğiyle satın alma süreci hakkında bilgi alınabilir ve satış sonrasında kullanım desteğinden yararlanılabilir."
  },

  {
    q: "Thermomix danışmanı ne işe yarar?",
    a: (
      <>
        Thermomix danışmanı; ürün tanıtımı, güncel kampanya
        bilgilendirmesi, satın alma süreci, Cookidoo kullanımı, tarif
        desteği ve satış sonrası kullanım konularında birebir destek
        sağlar.{" "}
        <Link href="/thermomix-danismani">
          Thermomix danışmanlığı hakkında detaylı bilgi alabilirsiniz.
        </Link>
      </>
    ),
    schemaAnswer:
      "Thermomix danışmanı; ürün tanıtımı, güncel kampanya bilgilendirmesi, satın alma süreci, Cookidoo kullanımı, tarif desteği ve satış sonrası kullanım konularında birebir destek sağlar."
  },

  {
    q: "Ücretsiz Thermomix tanıtımı veya demo talep edebilir miyim?",
    a: (
      <>
        Evet. Uygunluğa göre online veya yüz yüze Thermomix TM7
        tanıtımı talep edebilirsiniz. İletişim bölümünden bana
        ulaşmanız yeterlidir.
      </>
    ),
    schemaAnswer:
      "Evet. Uygunluğa göre online veya yüz yüze Thermomix TM7 tanıtımı talep edilebilir. Tanıtım talebi için iletişim bölümünden danışmana ulaşılabilir."
  },

  {
    q: "Thermomix TM7'nin temizliği zor mu?",
    a: (
      <>
        Hayır. Thermomix TM7'de Ön Temizleme modu bulunur. Günlük
        kullanım sonrasında karıştırma kabının temizlenmesini
        kolaylaştırmak için bu moddan yararlanabilirsiniz.
      </>
    ),
    schemaAnswer:
      "Hayır. Thermomix TM7'de Ön Temizleme modu bulunur. Günlük kullanım sonrasında karıştırma kabının temizlenmesini kolaylaştırmak için bu moddan yararlanılabilir."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.schemaAnswer,
    },
  })),
};

  const [openFaq, setOpenFaq] = useState(0);

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />

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
      </>
  );
}


function Campaigns({ contact, compact }) {
  return <section className="page"><div className="sectionTitle"><span>🎁 Kampanyalar</span><h1>Ayın kampanyalarını buradan takip edin</h1><p>Güncel Thermomix kampanyaları ve demo fırsatları için iletişime geçebilirsiniz.</p></div><div className="cards">{campaigns.map(([t,d,b]) => <div className="card" key={t}><div className="badge">{b}</div><h3>{t}</h3><p>{d}</p><button onClick={contact}>Detaylı Bilgi</button></div>)}</div>{!compact && <div className="note">SEO, Google Analytics, Meta Pixel ve WhatsApp dönüşüm takibi canlı yayında eklenmeye hazırdır.</div>}</section>;
}

function Blog() {
  return <section className="page"><div className="sectionTitle"><span>📖 Tarifler & Blog</span><h1>Bilgiler, tarifler ve mutfak ipuçları</h1><p>Thermomix gelene kadar altyapı hazır; ürün geldikten sonra düzenli içeriklerle Google ve Instagram trafiği büyütülebilir.</p></div><div className="cards blogCards">{blog.map(([t,d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p><a>Devamını Oku →</a></div>)}</div></section>;
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
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const go = (sectionId) => {
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

<SiteHeader onContact={() => setModal(true)} />

<div id="home" className="scrollSection">
  <Home go={go} contact={() => setModal(true)} />
</div>

<div id="about" className="scrollSection">
  <TM7AboutSection onContact={() => setModal(true)} />
</div>

<div id="boxcontents" className="scrollSection">
  <TM7BoxContentsSection onContact={() => setModal(true)} />
</div>

<div id="tm7functions" className="scrollSection">
  <TM7FunctionsSection />
</div>

<div id="cookidoo" className="scrollSection">
  <CookidooSection onContact={() => setModal(true)} />
</div>

<div id="faq" className="scrollSection">
  <FAQSection />
</div>

<div id="aboutus" className="scrollSection">
  <AboutUsSection onContact={() => setModal(true)} />
</div>


<div id="consultant" className="scrollSection">
  <ConsultantSection onContact={() => setModal(true)} />
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


