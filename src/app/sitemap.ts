import type { MetadataRoute } from "next";
import { animalHref, animals } from "@/lib/animals";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vet356.com";
  const staticPaths = ["", "/blog", "/tesekkurler", "/gizlilik-politikasi"];
  const animalPaths = animals.map((animal) => animalHref(animal.slug));

  return [...staticPaths, ...animalPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/dostlarimiz") ? 0.8 : 0.6,
  }));
}
