import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION_LABEL,
  MEDIA_CREDIT_LABEL,
  MEDIA_CREDIT_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP,
} from "@/lib/contact";
import { animalHref, animals } from "@/lib/animals";
import { Logo } from "@/components/Logo";
import "@/app/footer.css";

type SiteFooterProps = {
  home?: boolean;
};

export function SiteFooter({ home = false }: SiteFooterProps) {
  const prefix = home ? "#" : "/#";

  return (
    <footer className="site-footer">
      <div className="footer-cta wrap">
        <div>
          <p className="footer-kicker">Vet356 / Tokat</p>
          <h2>
            Can dostlarınız için
            <br />
            <em>her an yanınızdayız.</em>
          </h2>
        </div>
        <div className="footer-cta-actions">
          <a
            className="footer-cta-primary"
            href={WHATSAPP.appointment}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp&apos;tan yazın
          </a>
          <a className="footer-cta-secondary" href={PHONE_HREF}>
            Ara: {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="wrap footer-layout">
        <div className="footer-about">
          <Logo href={home ? "#anasayfa" : "/"} tone="light" />
          <p>
            Tokat Merkez’de kedi, köpek, kuş, tavşan ve egzotik dostlarınıza
            sakin, net ve özenli veteriner desteği sunuyoruz. Uzmanlıkla tedavi,
            sevgiyle yaklaşım.
          </p>
          <div className="footer-chips">
            <span>Güler yüzlü karşılama</span>
            <span>Açık iletişim</span>
            <span>{LOCATION_LABEL}</span>
          </div>
        </div>

        <div>
          <h3>Keşfedin</h3>
          <a href={`${prefix}hakkimizda`}>Klinik</a>
          <a href={`${prefix}dostlarimiz`}>Dostlarımız</a>
          <a href={`${prefix}hizmetler`}>Hizmetler</a>
          <a href={`${prefix}randevu`}>Randevu adımları</a>
          <a href={`${prefix}iletisim`}>İletişim</a>
        </div>

        <div>
          <h3>Dost türleri</h3>
          {animals.map((animal) => (
            <a key={animal.slug} href={animalHref(animal.slug)}>
              {animal.title}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Ulaşın</h3>
          <a className="footer-contact-card" href={PHONE_HREF}>
            <small>Telefon</small>
            <strong>{PHONE_DISPLAY}</strong>
          </a>
          <a
            className="footer-contact-card"
            href={WHATSAPP.appointment}
            target="_blank"
            rel="noreferrer"
          >
            <small>WhatsApp</small>
            <strong>Hazır randevu mesajı</strong>
          </a>
          <a
            className="footer-contact-card"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <small>Instagram</small>
            <strong>{INSTAGRAM_HANDLE}</strong>
          </a>
          <a
            className="footer-contact-card"
            href={WHATSAPP.location}
            target="_blank"
            rel="noreferrer"
          >
            <small>Konum</small>
            <strong>{LOCATION_LABEL} - yol tarifi</strong>
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>(c) 2026 Vet356 Veteriner Kliniği</p>
        <div className="footer-bottom-links">
          <a href="/gizlilik-politikasi">Gizlilik politikası</a>
          <a href={`${prefix}iletisim`}>Bize ulaşın</a>
          <span>{LOCATION_LABEL}</span>
        </div>
      </div>

      <div className="wrap footer-media">
        <a
          href={MEDIA_CREDIT_URL}
          target="_blank"
          rel="noreferrer"
        >
          Media: <strong>{MEDIA_CREDIT_LABEL}</strong>
        </a>
      </div>
    </footer>
  );
}
