'use client';

import Link from 'next/link';

const whatsappUrl =
  'https://wa.me/905016923135?text=Merhaba%2C%20Thermomix%20TM7%20kutu%20i%C3%A7eri%C4%9Fi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function TM7BoxContentsSection({
  onContact,
  showDetailLink = true,
}) {
  const handleContact = () => {
    if (onContact) {
      onContact();
      return;
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="tm7BoxSection">

      <div className="sectionIdentity">
        <span className="sectionIdentityEyebrow">
          THERMOMIX TM7
        </span>

        <h2>
          TM7 Kutusunda <strong>Neler Var?</strong>
        </h2>

        <p>
          Thermomix TM7 ile birlikte gelen temel parçaları,
          aksesuarları ve kullanım alanlarını tek bakışta inceleyin.
        </p>

        {showDetailLink && (
          <Link
            href="/thermomix-tm7-kutu-icerigi"
            className="seoDetailLink"
          >
            Thermomix TM7 kutu içeriğini detaylı inceleyin →
          </Link>
        )}
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
          onClick={handleContact}
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