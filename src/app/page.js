'use client';

import { useEffect, useState } from 'react';

const SITE = {
  brand: 'Lezzet Asistanı',
  subtitle: 'Thermomix Danışmanlığı • Tarifler • Mutfak İpuçları',
  consultant: 'Doğukan Yıldız',
  city: 'İstanbul',
  phoneDisplay: '0536 073 31 33',
  whatsapp: '905360733133',
  instagram: 'https://instagram.com/lezzetasistani',
  domain: 'lezzetasistani.com',
};

const pages = [
  ['home', 'Anasayfa'],
  ['about', 'Thermomix Nedir?'],
  ['campaigns', 'Kampanyalar'],
  ['blog', 'Tarifler & Blog'],
  ['consultant', 'Danışmanınız'],
  ['demo', 'Demo Talebi'],
  ['contact', 'İletişim'],
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
        <p>Thermomix TM7, kampanyalar ve demo talebi için size en uygun kanaldan ulaşabilirsiniz.</p>
        <div className="modalGrid">
          <a className="contactCard whatsapp" href={`https://wa.me/${SITE.whatsapp}?text=Merhaba%20Doğukan%20Bey,%20Thermomix%20TM7%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank">WhatsApp<br /><small>{SITE.phoneDisplay}</small></a>
          <a className="contactCard instagram" href={SITE.instagram} target="_blank">Instagram<br /><small>@lezzetasistani</small></a>
        </div>
      </div>
    </div>
  );
}

function Hero({ go, contact }) {
  return (
    <section className="hero">
      <div className="heroText">
        <div className="pill">
  ✨ Thermomix Danışmanlığı - {SITE.consultant}
  <br />
  🎯 Danışman Kodu: <strong className="codeGold">TM101637</strong>
</div>
        <h1>Mutfaktaki kişisel lezzet asistanınız.</h1>
        <p>Thermomix TM7 hakkında bilgi alın, güncel kampanyaları inceleyin ve ücretsiz demo talep edin. Lezzet Asistanı ile mutfakta daha kolay, daha planlı ve daha keyifli bir deneyim sizi bekliyor.</p>
        <div className="heroButtons">
          <button className="primary" onClick={contact}>Thermomix Hakkında Bilgi Al</button>
          <button className="secondary" onClick={() => go('demo')}>Ücretsiz Demo Talep Et</button>
        </div>
      </div>
      <div className="heroImage">
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80" alt="Modern mutfak" />
        <div className="floating">📍 {SITE.city}<br /><b>{SITE.brand}</b></div>
      </div>
    </section>
  );
}

function Home({ go, contact }) {
  return (
    <>
      <Hero go={go} contact={contact} />
      <section className="features">
        {['Zaman Tasarrufu', 'Çok Fonksiyonlu', 'Sağlıklı Tarifler', 'Danışman Desteği'].map((x, i) => (
          <div className="feature" key={x}><span>{['⏱️','✨','🥗','🤝'][i]}</span><h3>{x}</h3><p>Thermomix deneyimini daha anlaşılır ve pratik hale getiren kişisel destek.</p></div>
        ))}
      </section>
      <Campaigns contact={contact} compact />
    </>
  );
}

function About() {
  return <section className="page two"><div><h1>Thermomix Nedir?</h1><p>Thermomix; doğrama, karıştırma, yoğurma, pişirme, buharda pişirme ve rehberli tarif deneyimini tek cihazda sunan çok fonksiyonlu bir mutfak yardımcısıdır.</p>{['20’den fazla fonksiyon', 'Cookidoo ile rehberli tarif deneyimi', 'Planlı ve pratik mutfak rutini', 'Satış öncesi ve sonrası danışman desteği'].map(x => <div className="check" key={x}>✓ {x}</div>)}</div><img src="https://images.unsplash.com/photo-1556909172-8c2f041fca1e?auto=format&fit=crop&w=1200&q=80" alt="Mutfak" /></section>;
}

function Campaigns({ contact, compact }) {
  return <section className="page"><div className="sectionTitle"><span>🎁 Kampanyalar</span><h1>Ayın kampanyalarını buradan takip edin</h1><p>Güncel Thermomix kampanyaları ve demo fırsatları için iletişime geçebilirsiniz.</p></div><div className="cards">{campaigns.map(([t,d,b]) => <div className="card" key={t}><div className="badge">{b}</div><h3>{t}</h3><p>{d}</p><button onClick={contact}>Detaylı Bilgi</button></div>)}</div>{!compact && <div className="note">SEO, Google Analytics, Meta Pixel ve WhatsApp dönüşüm takibi canlı yayında eklenmeye hazırdır.</div>}</section>;
}

function Blog() {
  return <section className="page"><div className="sectionTitle"><span>📖 Tarifler & Blog</span><h1>Bilgiler, tarifler ve mutfak ipuçları</h1><p>Thermomix gelene kadar altyapı hazır; ürün geldikten sonra düzenli içeriklerle Google ve Instagram trafiği büyütülebilir.</p></div><div className="cards blogCards">{blog.map(([t,d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p><a>Devamını Oku →</a></div>)}</div></section>;
}

function Consultant({ contact }) {
  return <section className="page two"><div><span className="pill">Danışmanınız</span><h1>Merhaba, ben {SITE.consultant}</h1><p>İstanbul’da Thermomix danışmanlığı, demo talebi, kampanya bilgilendirmesi ve satış sonrası kullanım rehberliği için buradayım.</p>{['Kişiye özel danışmanlık', 'Demo ve kampanya bilgilendirmesi', 'Tarif ve kullanım desteği', 'Satış sonrası yönlendirme'].map(x => <div className="check" key={x}>✓ {x}</div>)}<button className="primary spaced" onClick={contact}>Doğukan Bey’e Ulaş</button></div><div className="profileBox"><div className="avatar">DY</div><h2>{SITE.consultant}</h2><p>{SITE.brand}</p><small>{SITE.city}</small></div></section>;
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

const go = (p) => {
  setPage(p);
  setMenuOpen(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <main>
      <ContactModal open={modal} onClose={() => setModal(false)} />
      <header className={`siteHeader ${showHeader ? '' : 'hideHeader'}`}>
  <Logo />
  <button className="mobileMenuButton" onClick={() => setMenuOpen(!menuOpen)}>☰ Menü</button>
  <nav className={menuOpen ? 'open' : ''}>
    {pages.map(([id, label]) => (
      <button key={id} className={page === id ? 'active' : ''} onClick={() => go(id)}>
        {label}
      </button>
    ))}
  </nav>
  <button className="headerCta" onClick={() => setModal(true)}>WhatsApp</button>
</header>
      {page === 'home' && <Home go={go} contact={() => setModal(true)} />}
      {page === 'about' && <About />}
      {page === 'campaigns' && <Campaigns contact={() => setModal(true)} />}
      {page === 'blog' && <Blog />}
      {page === 'consultant' && <Consultant contact={() => setModal(true)} />}
      {page === 'demo' && <Demo contact={() => setModal(true)} />}
      {page === 'contact' && <Contact contact={() => setModal(true)} />}
      <footer><Logo /><p>© 2026 {SITE.brand}. Thermomix® marka adı ilgili sahibine aittir. Bu site bağımsız danışman tanıtımı için hazırlanmıştır.</p></footer>
      <button className="float" onClick={() => setModal(true)}>💬</button>
    </main>
  );
}
