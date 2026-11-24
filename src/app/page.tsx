import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION_LABEL,
  PHONE_DISPLAY,
  PHONE_E164,
  PHONE_HREF,
  SITE_URL,
  WHATSAPP,
} from "@/lib/contact";
import { animalHref, animals } from "@/lib/animals";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ContactIcons";
import "./footer.css";
import "./navigation.css";

export const metadata: Metadata = {
  title: "Tokat Veteriner Kliniği | Vet356",
  description:
    "Tokat veteriner arayanlar için Vet356: Tokat Merkez'de kedi, köpek, kuş, tavşan ve egzotik dostlara muayene, koruyucu sağlık, bakım ve danışmanlık.",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Vet356 Veteriner Kliniği",
  description:
    "Tokat veteriner kliniği; can dostlarınız için muayene, koruyucu hekimlik, bakım ve danışmanlık.",
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tokat",
    addressRegion: "Tokat",
    addressCountry: "TR",
  },
  areaServed: "Tokat",
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
};

const services = [
  {
    number: "01",
    title: "Koruyucu hekimlik",
    text: "Aşı takvimi, parazit koruması ve düzenli kontrollerle hastalıklara erken müdahale ederiz.",
  },
  {
    number: "02",
    title: "Muayene ve takip",
    text: "Şikayetinizi dinler, muayene eder ve sonraki adımları sizinle birlikte netleştiririz.",
  },
  {
    number: "03",
    title: "Tedavi süreci",
    text: "Bulguları anlaşılır şekilde anlatır; tedavi ve bakım yolunu panik etmeden planlarız.",
  },
  {
    number: "04",
    title: "Beslenme danışmanlığı",
    text: "Yaşa, türe ve yaşam tarzına uygun mama ve porsiyon önerileri sunarız.",
  },
  {
    number: "05",
    title: "Bakım desteği",
    text: "Tüy, tırnak, yıkama ve günlük konfor için pratik, uygulanabilir yönlendirme veririz.",
  },
  {
    number: "06",
    title: "Yeni sahiplenme",
    text: "Eve yeni gelen dostunuz için ilk kontrol, aşı planı ve güvenli başlangıç desteği.",
  },
];

const visitSteps = [
  {
    number: "01",
    title: "Yazın veya arayın",
    text: "WhatsApp’tan kısa bir mesaj atın ya da telefonla bizi arayın.",
  },
  {
    number: "02",
    title: "Kısaca anlatın",
    text: "Dostunuzun türünü, yaşını ve sizi endişelendiren durumu paylaşmanız yeterli.",
  },
  {
    number: "03",
    title: "Günü netleştirin",
    text: "Size uygun saati birlikte seçelim; klinikte sakin bir şekilde karşılayalım.",
  },
];

const prepTips = [
  {
    title: "Yanınızda getirin",
    text: "Varsa önceki aşı kartı, ilaç veya mama bilgisini getirmeniz süreci hızlandırır.",
  },
  {
    title: "Mesajda yazın",
    text: "Tür, yaş, şikayet ve müsait olduğunuz günler; randevuyu daha çabuk ayarlamamızı sağlar.",
  },
  {
    title: "Sakin gelin",
    text: "Kedi için taşıma çantası, köpek için tasma kullanın. Yolda stresini azaltmak için acele etmeyin.",
  },
];

const faqs = [
  {
    q: "Randevu nasıl alırım?",
    a: `En hızlı yol WhatsApp. İsterseniz ${PHONE_DISPLAY} numarasını da arayabilirsiniz. Müsait gününüzü birlikte ayarlarız.`,
  },
  {
    q: "İlk ziyarette ne getirmeliyim?",
    a: "Varsa eski sağlık kayıtlarını, kullandığı mama veya ilaç bilgisini ve taşıma çantasını / tasmayı getirmeniz yeterli.",
  },
  {
    q: "Hangi hayvanlara bakıyorsunuz?",
    a: "Kedi ve köpek önceliğimiz. Kuş, tavşan, kemirgen ve egzotik dostlar için de iletişime geçebilirsiniz.",
  },
  {
    q: "Kliniğe nasıl gelirim?",
    a: "Tokat Merkez’deyiz. Gelmeden önce WhatsApp veya telefonla yazın; size yol tarifi verelim.",
  },
  {
    q: "Acil durumda ne yapmalıyım?",
    a: "Önce bizi arayın. Durumu kısaca anlatın; size en doğru yönlendirmeyi birlikte netleştirelim.",
  },
];

function ServiceMark() {
  return (
    <span className="line-icon line-icon-svg" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          fill="currentColor"
          d="M12 14.5c-2.2 0-4.5 1.2-4.5 3.4 0 1.6 1.7 2.6 4.5 2.6s4.5-1 4.5-2.6c0-2.2-2.3-3.4-4.5-3.4zm-5.2-2.2c1.1 0 2-.9 2-2.2S7.9 7.9 6.8 7.9 4.8 8.8 4.8 10.1s.9 2.2 2 2.2zm10.4 0c1.1 0 2-.9 2-2.2s-.9-2.2-2-2.2-2 .9-2 2.2.9 2.2 2 2.2zM8.6 6.8c1 0 1.8-.9 1.8-2S9.6 2.8 8.6 2.8 6.8 3.7 6.8 4.8s.8 2 1.8 2zm6.8 0c1 0 1.8-.9 1.8-2s-.8-2-1.8-2-1.8.9-1.8 2 .8 2 1.8 2z"
        />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#anasayfa">
        İçeriğe geç
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SiteHeader home />
      <div className="top-cta">
        <div className="wrap">
          <span>Can dostunuz için bir mesaj yeter.</span>
          <a href={WHATSAPP.appointment} target="_blank" rel="noreferrer">
            WhatsApp’tan yazın <b aria-hidden="true">-&gt;</b>
          </a>
        </div>
      </div>


      <section id="anasayfa" className="hero">
        <Image
          src="/images/vet356-hero.png"
          alt="Tokat Vet356 Veteriner Kliniği'nde veteriner hekim, köpek, kedi ve tavşan"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="wrap hero-content hero-animate">
          <p className="overline">
            TOKAT VETERİNER KLİNİĞİ <span />
          </p>
          <h1>
            <span className="seo-title">Tokat Veteriner Kliniği</span>
            Can dostlarınız için
            <br />
            <em>her an yanınızdayız.</em>
          </h1>
          <p className="hero-text">
            Tokat Merkez’de Vet356 olarak kedi, köpek, kuş, tavşan ve egzotik
            dostlarınıza muayene, aşı, bakım ve danışmanlık sunuyoruz. Uzmanlıkla
            tedavi eder, sevgiyle yaklaşırız.
          </p>
          <div className="hero-actions">
            <a
              className="primary"
              href={WHATSAPP.appointment}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan randevu al <b aria-hidden="true">-&gt;</b>
            </a>
            <a className="play" href="#randevu">
              <span aria-hidden="true">&#9654;</span> Nasıl randevu alınır?
            </a>
          </div>
          <ul className="hero-trust" aria-label="Kısa güven notları">
            <li>Güler yüzlü karşılama</li>
            <li>Türe özel yaklaşım</li>
            <li>Açık ve sakin iletişim</li>
          </ul>
        </div>
        <div className="hero-bottom">
          <div className="wrap">
            <span>VET356 / TOKAT</span>
            <span>Sevgi · Özen · Sağlık</span>
            <span>Aşağı kaydırın</span>
          </div>
        </div>
      </section>

      <section className="intro-clinic reveal" id="hakkimizda">
        <div className="wrap intro-clinic-grid">
          <div className="intro-clinic-copy">
            <p className="kicker">HAKKIMIZDA</p>
            <h2>
              Uzmanlıkla tedavi,
              <br />
              <em>sevgiyle yaklaşım.</em>
            </h2>
            <p>
              Her can dostu farklıdır. Vet356’da önce dinler, stresi azaltmaya
              çalışır, sonra net ve anlaşılır bir yol öneririz. Amacımız panik
              yaratmak değil; doğru bilgiyi vermek ve güvenli takibi sürdürmek.
            </p>
            <div className="intro-clinic-actions">
              <a className="primary dark-primary" href="#dostlarimiz">
                Dostlarımızı inceleyin
              </a>
              <a href="#iletisim">
                Bize ulaşın <b aria-hidden="true">-&gt;</b>
              </a>
            </div>
          </div>
          <div className="intro-clinic-media">
            <Image
              src="/images/clinic-interior.jpg"
              alt="Vet356 veteriner kliniği muayene odası"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
              className="intro-clinic-image"
            />
          </div>
        </div>
      </section>

      <section id="dostlarimiz" className="animals reveal">
        <div className="wrap">
          <div className="section-top">
            <div>
              <p className="kicker">DOSTLARIMIZ</p>
              <h2>
                Hangi can dostunuz
                <br />
                <em>için geldiniz?</em>
              </h2>
            </div>
            <p>
              Önceliğimiz kedi ve köpek. Kuş, tavşan, kemirgen ve egzotik
              dostlarınız için de türe özel, sakin bir yaklaşım sunuyoruz.
            </p>
          </div>

          <div className="pet-spotlight">
            {animals
              .filter((animal) => animal.slug === "kedi" || animal.slug === "kopek")
              .map((animal) => (
                <Link
                  key={animal.slug}
                  href={animalHref(animal.slug)}
                  className={`pet-spotlight-card pet-spotlight-${animal.slug}`}
                >
                  <div className="pet-spotlight-media">
                    <Image
                      src={animal.image}
                      alt={animal.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      className="pet-spotlight-image"
                      style={{
                        objectFit: "cover",
                        objectPosition:
                          animal.slug === "kedi"
                            ? "center 28%"
                            : "center 22%",
                      }}
                    />
                  </div>
                  <div className="pet-spotlight-copy">
                    <p>{animal.slug === "kedi" ? "KEDİ SAĞLIĞI" : "KÖPEK SAĞLIĞI"}</p>
                    <h3>{animal.title}</h3>
                    <span>
                      İncele <b aria-hidden="true">-&gt;</b>
                    </span>
                  </div>
                </Link>
              ))}
          </div>

          <div className="animal-grid">
            {animals
              .filter((animal) => animal.slug !== "kedi" && animal.slug !== "kopek")
              .map((animal) => (
              <Link
                className="category-card category-card-link"
                key={animal.slug}
                href={animalHref(animal.slug)}
              >
                <div className="animal-photo category-photo">
                  <Image
                    src={animal.image}
                    alt={animal.title}
                    fill
                    sizes="(max-width: 800px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: animal.position,
                    }}
                  />
                </div>
                <div className="animal-content category-content">
                  <h3>{animal.title}</h3>
                  <p>{animal.description}</p>
                  <span>
                    Detayları incele <b aria-hidden="true">-&gt;</b>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="randevu" className="visit-flow reveal">
        <div className="wrap">
          <div className="flow-head">
            <div>
              <p className="kicker">RANDEVU</p>
              <h2 className="flow-title">
                3 adımda
                <br />
                <em>kliniğe hazır olun.</em>
              </h2>
            </div>
            <p>
              Form yok, işlem karmaşık değil. Kısa bir mesajla randevu sürecini
              başlatabilirsiniz.
            </p>
          </div>
          <div className="flow-steps">
            {visitSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
            <a href={WHATSAPP.appointment} target="_blank" rel="noreferrer">
              <span aria-hidden="true">&gt;</span>
              <b>
                WhatsApp’tan
                <br />
                randevu iste
              </b>
            </a>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="service-area reveal">
        <div className="wrap">
          <div className="service-heading">
            <div>
              <p className="kicker light-kicker">HİZMETLER</p>
              <h2>
                Can dostunuzun
                <br />
                <em>ihtiyacına göre.</em>
              </h2>
            </div>
            <a href={WHATSAPP.info} target="_blank" rel="noreferrer">
              Hangi hizmet lazım? Yazın <b aria-hidden="true">&gt;</b>
            </a>
          </div>
          <div className="service-list">
            {services.map(({ number, title, text }) => (
              <article key={title}>
                <span>{number}</span>
                <div className="service-title">
                  <ServiceMark />
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
                <a
                  href={WHATSAPP.info}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} için WhatsApp ile bilgi al`}
                >
                  &gt;
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bilgi" className="insight wrap reveal">
        <div className="insight-card">
          <p className="kicker">ZİYARET ÖNCESİ</p>
          <h2>
            Kliniğe gelmeden
            <br />
            <em>bunları bilin.</em>
          </h2>
          <p>
            Biraz hazırlık, daha sakin bir ziyaret demektir. Aşağıdaki notlar ilk
            gelişinizi kolaylaştırır.
          </p>
          <a
            className="primary dark-primary"
            href={WHATSAPP.appointment}
            target="_blank"
            rel="noreferrer"
          >
            Randevu mesajı gönder <b aria-hidden="true">-&gt;</b>
          </a>
        </div>
        <div className="fact-stack">
          {prepTips.map((tip, index) => (
            <div key={tip.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq reveal">
        <div className="wrap faq-grid">
          <div>
            <p className="kicker">SIK SORULANLAR</p>
            <h2>
              Merak ettiğiniz
              <br />
              <em>kısa, net cevaplar.</em>
            </h2>
            <p>
              Randevu, ilk ziyaret ve yol tarifi hakkında en çok sorulanlar.
            </p>
            <a href={WHATSAPP.info} target="_blank" rel="noreferrer">
              Başka sorunuz mu var? <b aria-hidden="true">&gt;</b>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>
                  {item.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews reveal">
        <div className="wrap review-grid">
          <div>
            <p className="kicker">NEDEN VET356</p>
            <h2>
              Mutlu dostlar,
              <br />
              <em>rahat sahipler.</em>
            </h2>
            <p>
              Panik yaratmadan anlatır, adımları netleştirir ve can dostunuzun
              temposuna saygı duyarız. Kapıdan girdiğiniz andan itibaren
              güler yüzlü ve ilgili bir ekip sizi karşılar.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram’da güncel paylaşımlar <b aria-hidden="true">&gt;</b>
            </a>
          </div>
          <div className="review-state">
            <span aria-hidden="true">*</span>
            <h3>Size uygun kanaldan yazın.</h3>
            <p>
              Hızlı soru için WhatsApp, konuşmak için telefon. Yol tarifi için
              de aynı numaradayız.
            </p>
            <div className="review-actions">
              <a href={WHATSAPP.appointment} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={PHONE_HREF}>Ara</a>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="contact reveal">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker light-kicker">İLETİŞİM</p>
            <h2>
              Size nasıl yardımcı
              <br />
              <em>olabiliriz?</em>
            </h2>
            <p>
              Randevu, bilgi veya yol tarifi için size en uygun kanalı seçin.
              Genelde aynı gün içinde dönüş yapmaya özen gösteririz.
            </p>
            <p className="contact-note">
              Gelmeden önce konum için yazmanız yeterli; Tokat Merkez’de sizi
              yönlendiririz.
            </p>
          </div>
          <div className="contact-panel">
            <a href={PHONE_HREF}>
              <span className="line-icon line-icon-svg" aria-hidden="true">
                <PhoneIcon />
              </span>
              <span>
                <small>TELEFON</small>
                <b>{PHONE_DISPLAY}</b>
              </span>
            </a>
            <a href={WHATSAPP.appointment} target="_blank" rel="noreferrer">
              <span className="line-icon line-icon-svg" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <span>
                <small>WHATSAPP</small>
                <b>Hazır mesajla randevu iste</b>
              </span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <span className="line-icon line-icon-svg" aria-hidden="true">
                <InstagramIcon />
              </span>
              <span>
                <small>INSTAGRAM</small>
                <b>{INSTAGRAM_HANDLE}</b>
              </span>
            </a>
            <a href={WHATSAPP.location} target="_blank" rel="noreferrer">
              <span className="line-icon line-icon-svg" aria-hidden="true">
                <PinIcon />
              </span>
              <span>
                <small>KONUM</small>
                <b>{LOCATION_LABEL} - yol tarifi iste</b>
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="sticky-contact">
        <a className="sticky-phone" href={PHONE_HREF} aria-label="Hemen ara">
          <PhoneIcon />
          <span>Hemen ara</span>
        </a>
        <a
          className="whatsapp-float"
          href={WHATSAPP.appointment}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp üzerinden Vet356 ile iletişime geçin"
        >
          <WhatsAppIcon />
          <span>WhatsApp&apos;tan ulaşın</span>
        </a>
      </div>

      <SiteFooter home />
    </main>
  );
}
