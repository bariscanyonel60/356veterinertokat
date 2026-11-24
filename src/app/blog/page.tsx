import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WHATSAPP } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Vet356 Blog: can dostlarınızın bakımı, sağlık takibi ve klinik notları.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    title: "İlk klinik ziyaretine nasıl hazırlanırsınız?",
    excerpt:
      "Taşıma, önceki kayıtlar ve kısa bir şikayet özeti; sakin bir muayenenin temelidir.",
    tag: "Randevu",
  },
  {
    title: "Kedi ve köpekte düzenli kontrol neden önemli?",
    excerpt:
      "Koruyucu hekimlik, küçük belirtileri erken fark etmenize yardımcı olur.",
    tag: "Koruyucu sağlık",
  },
  {
    title: "Yeni sahiplenen dostlar için ilk hafta notları",
    excerpt:
      "Beslenme, alışma süreci ve ne zaman klinikle iletişime geçmeniz gerektiği.",
    tag: "Bakım",
  },
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="blog-page wrap">
        <nav className="breadcrumbs" aria-label="Sayfa yolu">
          <Link href="/">Ana Sayfa</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <p className="kicker">VET356 BLOG</p>
        <h1>
          Can dostunuz için
          <br />
          <em>pratik notlar.</em>
        </h1>
        <p className="blog-lede">
          Bakım, randevu hazırlığı ve günlük sağlık hakkında kısa rehberler.
          Detaylı sorularınız için bize yazabilirsiniz.
        </p>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <span>{post.tag}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={WHATSAPP.info} target="_blank" rel="noreferrer">
                Bu konu hakkında yazın <b aria-hidden="true">-&gt;</b>
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
