import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vet356 Veteriner Kliniği",
    short_name: "Vet356",
    description:
      "Tokat Merkez'de can dostlarınız için muayene, koruyucu hekimlik, bakım ve danışmanlık.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#082b48",
    lang: "tr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/images/vet356-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/vet356-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/vet356-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
