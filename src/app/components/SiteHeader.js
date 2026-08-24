'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SiteHeader({ onContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [headerFloating, setHeaderFloating] = useState(false);

  const go = (sectionId) => {
    setMenuOpen(false);
    setProductMenuOpen(false);

    // Ana sayfadaysak direkt bölüme kaydır
    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return;
    }

    // SEO sayfasındaysak ana sayfadaki ilgili bölüme git
    window.location.href = `/#${sectionId}`;
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHeaderFloating(currentScrollY > 120);

      if (currentScrollY <= 120) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
        setProductMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="siteTopBar">
        <a
          href="https://instagram.com/lezzetasistani"
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
            <strong> Doğukan Yıldız</strong>
          </span>
        </div>
      </div>

      <div
        className={`newSiteHeaderSlot ${
          headerFloating ? 'floatingActive' : ''
        }`}
      >
        <header
          className={`newSiteHeader ${
            headerFloating ? 'headerFloating' : ''
          } ${showHeader ? 'headerVisible' : 'hideHeader'}`}
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

            <Link
  href="/"
  onClick={() => setMenuOpen(false)}
>
  Anasayfa
</Link>

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
                <Link
  href="/thermomix-tm7"
  onClick={() => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  }}
>
  <span>♨</span>

  <div>
    <strong>Thermomix TM7</strong>
    <small>TM7'yi yakından keşfedin</small>
  </div>
</Link>

<Link
  href="/thermomix-tm7-kutu-icerigi"
  onClick={() => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  }}
>
  <span>□</span>

  <div>
    <strong>TM7 Kutusunda Neler Var?</strong>
    <small>Kutu içeriğini inceleyin</small>
  </div>
</Link>
              </div>
            </div>

            <Link
  href="/thermomix-danismani"
  onClick={() => setMenuOpen(false)}
>
  Hakkımızda
</Link>

            <Link
  href="/thermomix-tm7-fonksiyonlari"
  onClick={() => setMenuOpen(false)}
>
  TM7 Fonksiyonları
</Link>

<Link
  href="/cookidoo"
  onClick={() => setMenuOpen(false)}
>
  Cookidoo
</Link>

            <button onClick={() => go('faq')}>
              S.S.S
            </button>

            <Link
  href="/thermomix-tm7-fiyat-kampanya"
  onClick={() => setMenuOpen(false)}
>
  Kampanyalar
</Link>

            <button onClick={() => go('consultant')}>
              İletişim
            </button>

            <button
  className="mobileNavContact"
  onClick={() => {
    setMenuOpen(false);

    if (onContact) {
      onContact();
    } else {
      window.open(
        'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29',
        '_blank'
      );
    }
  }}
>
  WhatsApp'tan Bilgi Al
</button>
          </nav>

          <button
  className="newHeaderCta"
  onClick={() => {
    if (onContact) {
      onContact();
    } else {
      window.open(
         'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29',
        '_blank'
      );
    }
  }}
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
  );
}