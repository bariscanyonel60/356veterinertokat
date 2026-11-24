import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  animalHref,
  animalWhatsApp,
  animals,
  getAnimal,
} from "@/lib/animals";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return animals.map((animal) => ({ slug: animal.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) return { title: "Dostlarımız" };
  return {
    title: `${animal.title} veteriner desteği`,
    description: animal.summary,
    alternates: { canonical: animalHref(animal.slug) },
  };
}

export default async function AnimalPage({ params }: PageProps) {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) notFound();

  const others = animals
    .filter((item) => item.slug !== animal.slug)
    .slice(0, 4);
  const wa = animalWhatsApp(animal);
  const hasServices = Boolean(animal.services?.length);

  return (
    <main className="animal-page">
      <SiteHeader />

      <section className="animal-hero wrap reveal">
        <nav className="breadcrumbs" aria-label="Sayfa yolu">
          <Link href="/">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/#dostlarimiz">Dostlarımız</Link>
          <span>/</span>
          <span>{animal.title}</span>
        </nav>
        <div className="animal-hero-grid">
          <div className="animal-hero-copy">
            <p className="kicker">VET356 / {animal.title.toLocaleUpperCase("tr-TR")}</p>
            <h1>
              {animal.title}
              <br />
              <em>dostunuz için yanınızdayız.</em>
            </h1>
            <p className="animal-lede">{animal.summary}</p>
            <div className="animal-actions">
              <a className="primary" href={wa} target="_blank" rel="noreferrer">
                WhatsApp’tan yazın
              </a>
              <a href={PHONE_HREF}>Ara: {PHONE_DISPLAY}</a>
            </div>
            {hasServices ? (
              <ul className="animal-hero-chips" aria-label="Hizmet özeti">
                {animal.services!.slice(0, 4).map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="animal-hero-media">
            <Image
              src={animal.image}
              alt={animal.title}
              fill
              sizes="(max-width: 800px) 100vw, 480px"
              style={{ objectFit: "cover", objectPosition: animal.position }}
              priority
            />
          </div>
        </div>
      </section>

      {hasServices ? (
        <section className="animal-services-band reveal">
          <div className="wrap">
            <div className="animal-services-head">
              <div>
                <p className="kicker light-kicker">HİZMET ALANLARI</p>
                <h2>
                  {animal.title} sağlığı için
                  <br />
                  <em>net ve sakin destek.</em>
                </h2>
              </div>
              <a href={wa} target="_blank" rel="noreferrer">
                Durumu yazın, birlikte planlayalım
              </a>
            </div>

            <div className="animal-service-rows">
              {animal.services!.map((service, index) => (
                <article key={service.title} className="animal-service-row">
                  <span className="animal-service-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="animal-service-main">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a
                    className="animal-service-cta"
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yazın
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="animal-body wrap">
        <div className="animal-panel reveal reveal-delay-1">
          <p className="kicker">ZIYARETTE</p>
          <h2>Bu ziyarette neler konuşuyoruz?</h2>
          <ul>
            {animal.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="animal-panel animal-panel-dark reveal reveal-delay-2">
          <p className="kicker light-kicker">HAZIRLIK</p>
          <h2>Gelmeden önce</h2>
          <ul>
            {animal.tips.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="animal-cta-strip wrap reveal">
        <div>
          <h2>
            {animal.title} dostunuz için
            <br />
            <em>hemen yazabilirsiniz.</em>
          </h2>
          <p>
            Türü, yaşı ve şikayeti kısaca yazmanız yeterli. Dönüş yapıp uygun
            saati birlikte netleştiririz.
          </p>
        </div>
        <div className="animal-cta-actions">
          <a className="primary" href={wa} target="_blank" rel="noreferrer">
            WhatsApp randevu
          </a>
          <a className="animal-cta-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="animal-related wrap reveal">
        <div className="section-top">
          <div>
            <p className="kicker">DİĞER DOSTLAR</p>
            <h2>
              Başka bir tür için
              <br />
              <em>mi bakıyorsunuz?</em>
            </h2>
          </div>
        </div>
        <div className="animal-related-grid">
          {others.map((item) => (
            <Link
              className="category-card animal-related-card"
              key={item.slug}
              href={animalHref(item.slug)}
            >
              <div className="animal-photo category-photo">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 800px) 50vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: item.position }}
                />
              </div>
              <div className="animal-content category-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>
                  İncele <b aria-hidden="true">-&gt;</b>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
