import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/contact";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Vet356 Veteriner Kliniği gizlilik politikası ve kişisel veri yaklaşımı.",
};

export default function Privacy() {
  return (
    <main>
      <SiteHeader />
      <div className="policy-page">
        <div className="policy-wrap">
          <nav className="breadcrumbs" aria-label="Sayfa yolu">
            <Link href="/">Ana Sayfa</Link>
            <span>/</span>
            <span>Gizlilik Politikası</span>
          </nav>
          <p className="kicker">VET356 VETERİNER KLİNİĞİ</p>
          <h1>Gizlilik Politikası</h1>
          <p className="policy-lede">
            Bu sayfa, Vet356 Veteriner Kliniği web sitesi aracılığıyla paylaşılan
            kişisel bilgilerin nasıl ele alındığına dair genel bilgilendirme
            sunar.
          </p>
          <section>
            <h2>İletişim bilgileri</h2>
            <p>
              Telefon veya WhatsApp üzerinden paylaştığınız ad, iletişim bilgisi
              ve randevu talebine ilişkin bilgiler yalnızca talebinize yanıt
              vermek ve iletişim kurmak amacıyla kullanılır.
            </p>
          </section>
          <section>
            <h2>Çerezler ve teknik veriler</h2>
            <p>
              Web sitesi, kullanıcı deneyimini iyileştirmeye yönelik temel teknik
              bilgileri işleyebilir. Zorunlu olmayan çerez veya analiz araçları
              kullanıma alındığında bu politika güncellenecektir.
            </p>
          </section>
          <section>
            <h2>Üçüncü taraf bağlantılar</h2>
            <p>
              WhatsApp ve Instagram bağlantıları ilgili platformlara yönlendirir.
              Bu platformların kendi gizlilik politikaları geçerlidir.
            </p>
          </section>
          <section>
            <h2>İletişim</h2>
            <p>
              Gizlilikle ilgili sorularınız için{" "}
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> numaralı telefondan veya{" "}
              <a href={WHATSAPP.info} target="_blank" rel="noreferrer">
                WhatsApp
              </a>{" "}
              üzerinden Vet356 ile iletişime geçebilirsiniz.
            </p>
          </section>
          <Link className="policy-back" href="/">
            &lt;- Ana sayfaya dön
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
