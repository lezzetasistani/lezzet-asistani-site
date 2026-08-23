'use client';

const SITE = {
  phoneDisplay: '0501 692 31 35',
  instagram: 'https://instagram.com/lezzetasistani',
};

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function ConsultantSection({ onContact }) {
  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contactPagePremium">

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

      <div className="contactChannelGrid">

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
            onClick={handleContact}
            className="contactChannelButton"
          >
            <img src="/whatsapp-icon.png" alt="" />
            WhatsApp’tan Yaz
            <span>→</span>
          </button>
        </article>

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
            href={`tel:+90${SITE.phoneDisplay
              .replace(/\s/g, '')
              .replace(/^0/, '')}`}
            className="contactChannelButton"
          >
            <span className="contactPhoneSmall">☎</span>
            Hemen Ara
            <span>→</span>
          </a>
        </article>

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
          onClick={handleContact}
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