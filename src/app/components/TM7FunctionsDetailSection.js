export default function TM7FunctionsDetailSection() {
  const groups = [
    {
      title: 'Hazırlık fonksiyonları',
      text:
        'Thermomix TM7; doğrama, karıştırma, yoğurma, rendeleme, dilimleme, spiralleştirme ve soyma gibi hazırlık işlemlerini tek cihaz üzerinden gerçekleştirmeyi kolaylaştırır.',
    },
    {
      title: 'Pişirme modları',
      text:
        'Buharda pişirme, sabit pişirme, yavaş pişirme, esmerleştirme, pilav pişirici, yumurta haşlama ve vakumda pişirme gibi farklı yöntemler çeşitli tariflere uygun pişirme seçenekleri sunar.',
    },
    {
      title: 'Isıtma ve hassas sıcaklık kontrolü',
      text:
        'Su ısıtıcısı, yeniden ısıtma, mayalama ve koyulaştırma gibi modlar belirli sıcaklık aralıklarının kontrollü şekilde kullanılmasına yardımcı olur.',
    },
    {
      title: 'Temizlik ve kullanım kolaylığı',
      text:
        'Ön Temizleme modu karıştırma kabında kalan yemek artıklarının temizlenmesini kolaylaştırırken, otomatik modlar günlük kullanımda manuel ayar ihtiyacını azaltır.',
    },
  ];

  return (
    <section className="tm7FunctionsDetailSection">
      <div className="tm7FunctionsDetailHeader">
        <span>TM7 FONKSİYON REHBERİ</span>

        <h2>
  Thermomix TM7 fonksiyonları
  <strong> neler sunuyor?</strong>
</h2>

        <p>
  TM7’deki modlar yalnızca pişirme için değil; hazırlık, sıcaklık
  kontrolü, aksesuar kullanımı ve temizlik gibi farklı ihtiyaçlara
  yönelik çözümler sunar.
</p>
      </div>

      <div className="tm7FunctionsDetailGrid">
        {groups.map((item, index) => (
          <article
            className="tm7FunctionsDetailCard"
            key={item.title}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="tm7FunctionsSeoBlock">
        <div>
          <span>THERMOMIX TM7</span>

          <h2>TM7 fonksiyonları günlük kullanımda ne sağlar?</h2>

          <p>
            Thermomix TM7’nin farklı fonksiyonları hazırlık ve pişirme
            aşamalarını tek cihazda birleştirmeye yardımcı olur. Bazı modlar
            tamamen otomatik çalışırken bazı özellikler uyumlu aksesuarlarla
            birlikte kullanılabilir.
          </p>

          <p>
            Hangi modun hangi tariflerde kullanılabileceğini öğrenmek için
            fonksiyon kartlarından ilgili modu seçebilir ve video
            açıklamasını inceleyebilirsiniz.
          </p>
        </div>

        <div className="tm7FunctionsRelatedLinks">
          <a href="/thermomix-tm7">
            Thermomix TM7 özellikleri →
          </a>

          <a href="/thermomix-tm7-kutu-icerigi">
            TM7 kutu içeriği →
          </a>

          <a href="/cookidoo">
            Cookidoo ve Rehberli Pişirme →
          </a>
        </div>
      </div>
    </section>
  );
}