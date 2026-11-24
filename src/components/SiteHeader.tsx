"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  LOCATION_LABEL,
  MEDIA_CREDIT_LABEL,
  MEDIA_CREDIT_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP,
} from "@/lib/contact";
import { animalHref } from "@/lib/animals";
import { Logo } from "@/components/Logo";
import { PhoneIcon, WhatsAppIcon } from "@/components/ContactIcons";
import "@/app/navigation.css";

type SiteHeaderProps = {
  home?: boolean;
};

export function SiteHeader({ home = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [corpOpen, setCorpOpen] = useState(false);
  const [mobileCorpOpen, setMobileCorpOpen] = useState(false);
  const panelId = useId();
  const corpId = useId();
  const corpRef = useRef<HTMLDivElement>(null);
  const prefix = home ? "#" : "/#";
  const homeHref = home ? "#anasayfa" : "/";
  const logoHref = homeHref;
  const aboutHref = `${prefix}hakkimizda`;

  const corporateLinks = [
    { href: aboutHref, label: "Hakkımızda" },
    { href: "/blog", label: "Blog" },
    { href: "/gizlilik-politikasi", label: "KVKK / Gizlilik" },
  ] as const;

  const primaryLinks = [
    { href: homeHref, label: "Anasayfa" },
    { href: animalHref("kedi"), label: "Kedi" },
    { href: animalHref("kopek"), label: "Köpek" },
    { href: `${prefix}hizmetler`, label: "Hizmetler" },
    { href: `${prefix}randevu`, label: "Randevu" },
    { href: `${prefix}iletisim`, label: "İletişim" },
  ] as const;

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setCorpOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!corpOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!corpRef.current?.contains(event.target as Node)) {
        setCorpOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCorpOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [corpOpen]);

  return (
    <>
      <div className="utility">
        <div className="wrap utility-inner">
          <span>
            <i aria-hidden="true" /> Sevgiyle, özenle, sağlıkla.
          </span>
          <span>{LOCATION_LABEL}</span>
          <a href={PHONE_HREF}>Ara: {PHONE_DISPLAY}</a>
        </div>
      </div>

      <header className={`site-header${open ? " is-open" : ""}`}>
        <div className="wrap navigation">
          <Logo href={logoHref} />

          <nav className="desktop-nav" aria-label="Ana menü">
            <a href={homeHref}>Anasayfa</a>

            <div
              className={`nav-corp${corpOpen ? " is-open" : ""}`}
              ref={corpRef}
            >
              <button
                type="button"
                className="nav-corp-trigger"
                aria-expanded={corpOpen}
                aria-controls={corpId}
                onClick={() => setCorpOpen((value) => !value)}
              >
                Kurumsal
                <span aria-hidden="true">{corpOpen ? "-" : "+"}</span>
              </button>
              <div
                id={corpId}
                className="nav-corp-menu"
                hidden={!corpOpen}
                role="menu"
              >
                {corporateLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setCorpOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              className="nav-pet"
              href={animalHref("kedi")}
              aria-label="Kedi"
              title="Kedi"
            >
              <Image
                src="/images/category-cat.jpg"
                alt=""
                width={40}
                height={40}
                className="nav-pet-image"
              />
              <span className="nav-pet-label">Kedi</span>
            </a>
            <a
              className="nav-pet"
              href={animalHref("kopek")}
              aria-label="Köpek"
              title="Köpek"
            >
              <Image
                src="/images/category-dog.jpg"
                alt=""
                width={40}
                height={40}
                className="nav-pet-image"
              />
              <span className="nav-pet-label">Köpek</span>
            </a>
            <a href={`${prefix}hizmetler`}>Hizmetler</a>
            <a href={`${prefix}randevu`}>Randevu</a>
            <a href={`${prefix}iletisim`}>İletişim</a>
          </nav>

          <a
            className="appointment"
            href={WHATSAPP.appointment}
            target="_blank"
            rel="noreferrer"
          >
            Randevu al
          </a>

          <button
            type="button"
            className={`nav-toggle${open ? " is-active" : ""}`}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`nav-backdrop${open ? " is-visible" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      <aside
        id={panelId}
        className={`nav-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        aria-label="Mobil menü"
      >
        <div className="nav-drawer-top">
          <p>Tokat Merkez</p>
          <button
            type="button"
            className="nav-drawer-close"
            aria-label="Menüyü kapat"
            onClick={() => setOpen(false)}
          >
            Kapat
          </button>
        </div>

        <nav className="nav-drawer-links" aria-label="Mobil menü bağlantıları">
          <a href={homeHref} onClick={() => setOpen(false)}>
            <span>01</span>
            Anasayfa
          </a>

          <div className={`nav-drawer-corp${mobileCorpOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="nav-drawer-corp-trigger"
              aria-expanded={mobileCorpOpen}
              onClick={() => setMobileCorpOpen((value) => !value)}
            >
              <span>02</span>
              Kurumsal
              <b aria-hidden="true">{mobileCorpOpen ? "-" : "+"}</b>
            </button>
            {mobileCorpOpen ? (
              <div className="nav-drawer-corp-links">
                {corporateLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <a
            className="nav-drawer-pet"
            href={animalHref("kedi")}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/category-cat.jpg"
              alt=""
              width={44}
              height={44}
            />
            <span>03</span>
            Kedi
          </a>
          <a
            className="nav-drawer-pet"
            href={animalHref("kopek")}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/category-dog.jpg"
              alt=""
              width={44}
              height={44}
            />
            <span>04</span>
            Köpek
          </a>

          {primaryLinks.slice(3).map((link, index) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <span>{String(index + 5).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-drawer-foot">
          <a className="nav-drawer-phone" href={PHONE_HREF}>
            <span className="nav-drawer-icon" aria-hidden="true">
              <PhoneIcon />
            </span>
            <span>
              <small>Hemen ara</small>
              <strong>{PHONE_DISPLAY}</strong>
            </span>
          </a>
          <a
            className="nav-drawer-wa"
            href={WHATSAPP.appointment}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            <span>WhatsApp ile yazın</span>
          </a>
          <p>Can dostunuz için bir mesaj yeter; dinliyoruz.</p>
          <a
            className="nav-drawer-media"
            href={MEDIA_CREDIT_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Media: <strong>{MEDIA_CREDIT_LABEL}</strong>
          </a>
        </div>
      </aside>
    </>
  );
}
