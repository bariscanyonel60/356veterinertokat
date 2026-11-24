import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Teşekkürler",
  description:
    "Vet356 Veteriner Kliniği ile iletişime geçtiğiniz için teşekkür ederiz.",
};

export default function Thanks() {
  return (
    <main className="utility-page">
      <nav className="breadcrumbs" aria-label="Sayfa yolu">
        <Link href="/">Ana Sayfa</Link>
        <span>/</span>
        <span>Teşekkürler</span>
      </nav>
      <p className="kicker">VET356</p>
      <h1>
        Teşekkür ederiz.
        <br />
        <em>Mesajınız bize ulaştıysa dönüş yapacağız.</em>
      </h1>
      <p>
        Randevu veya bilgi talebiniz için en kısa sürede dönüş yapmaya özen
        gösteriyoruz. Acil bir durum varsa hemen arayın.
      </p>
      <div className="utility-actions">
        <Link className="primary" href="/">
          Ana sayfaya dön <b aria-hidden="true">-&gt;</b>
        </Link>
        <a href={PHONE_HREF}>Ara: {PHONE_DISPLAY}</a>
        <a href={WHATSAPP.appointment} target="_blank" rel="noreferrer">
          WhatsApp&apos;tan yazın
        </a>
      </div>
    </main>
  );
}
