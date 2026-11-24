import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vet356.com"),
  title: { default: "Vet356 | Veteriner Kliniği", template: "%s | Vet356" },
  description:
    "Tokat Merkez'de Vet356 Veteriner Kliniği: can dostlarınız için muayene, koruyucu hekimlik, bakım ve danışmanlık.",
  keywords: [
    "Tokat veteriner",
    "Vet356",
    "veteriner kliniği",
    "kedi köpek veteriner",
    "Tokat Merkez veteriner",
  ],
  applicationName: "Vet356",
  authors: [{ name: "Vet356 Veteriner Kliniği" }],
  creator: "Vet356",
  publisher: "Vet356 Veteriner Kliniği",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/vet356-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/vet356-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    title: "Vet356",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Vet356 Veteriner Kliniği",
    title: "Vet356 | Can dostlarınız için yanınızdayız",
    description:
      "Tokat Merkez'de can dostlarınız için sevgiyle, özenle sağlık.",
    images: [
      {
        url: "/images/vet356-hero.png",
        width: 1792,
        height: 1024,
        alt: "Vet356 Veteriner Kliniği'nde veteriner hekim, köpek, kedi ve tavşan",
      },
      {
        url: "/images/vet356-logo.png",
        width: 2048,
        height: 768,
        alt: "Vet356 Veteriner Kliniği logosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vet356 Veteriner Kliniği",
    description: "Can dostlarınız için her an yanınızdayız.",
    images: ["/images/vet356-hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
