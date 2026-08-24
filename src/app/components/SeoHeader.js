'use client';

import { useState } from 'react';
import Link from 'next/link';

const instagram = 'https://instagram.com/lezzetasistani';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%20%28S%C4%B0TE%29';

export default function SeoHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      <div className="siteTopBar">
        <a
          href={instagram}
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

      <div className="newSiteHeaderSlot">
        <header className="newSiteHeader">
          <Link href="/" className="newHeaderBrand">
            <img src="/logo.png" alt="Lezzet Asistanı" />

            <div>
              <strong>LEZZET</strong>
              <span>ASİSTANI</span>
              <small>THERMOMIX DANIŞMANLIĞI</small>
            </div>
          </Link>

          <button
            type="button"
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
                  setProductOpen(false);
                }}
              >
                ×
              </button>
            </div>

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Anasayfa
            </Link>

            <div
              className={`productDropdown ${
                productOpen ? 'productOpen' : ''
              }`}
            >
              <button
                type="button"
                className="productDropdownTrigger"
                onClick={() => setProductOpen(!productOpen)}
              >
                Ürünler
                <span className="dropdownChevron"></span>
              </button>

              <div className="productDropdownMenu">
                <Link
                  href="/thermomix-tm7"
                  onClick={() => {
                    setProductOpen(false);
                    setMenuOpen(false);
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
                    setProductOpen(false);
                    setMenuOpen(false);
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

            <Link href="/#aboutus" onClick={() => setMenuOpen(false)}>
              Hakkımızda
            </Link>

            <Link
              href="/thermomix-tm7-fonksiyonlari"
              onClick={() => setMenuOpen(false)}
            >
              TM7 Fonksiyonları
            </Link>

            <Link href="/cookidoo" onClick={() => setMenuOpen(false)}>
              Cookidoo
            </Link>

            <Link href="/#faq" onClick={() => setMenuOpen(false)}>
              S.S.S
            </Link>

            <Link
              href="/thermomix-tm7-fiyat-kampanya"
              onClick={() => setMenuOpen(false)}
            >
              Kampanyalar
            </Link>

            <Link href="/#consultant" onClick={() => setMenuOpen(false)}>
              İletişim
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobileNavContact"
            >
              WhatsApp'tan Bilgi Al
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="newHeaderCta"
          >
            <img src="/whatsapp-icon.png" alt="" />
            Ücretsiz Bilgi Al
          </a>
        </header>
      </div>

      {menuOpen && (
        <div
          className="mobileNavBackdrop"
          onClick={() => {
            setMenuOpen(false);
            setProductOpen(false);
          }}
        />
      )}
    </>
  );
}