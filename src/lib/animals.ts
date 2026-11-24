export type AnimalService = {
  title: string;
  text: string;
};

export type Animal = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  position: string;
  highlights: string[];
  tips: string[];
  services?: AnimalService[];
};

export const animals: Animal[] = [
  {
    slug: "kedi",
    title: "Kedi",
    description: "Muayene, aşı, kısırlaştırma ve günlük bakım desteği.",
    summary:
      "Kediniz için kısırlaştırma, aşı, beslenme, yıkama ve yara tedavisinde sakin bir klinik yaklaşım sunuyoruz. Stresi azaltmaya özen gösteririz.",
    image: "/images/category-cat.jpg",
    position: "center 28%",
    highlights: [
      "Kısırlaştırma öncesi bilgilendirme ve planlama",
      "Aşı takvimi ve parazit koruma",
      "Beslenme, tüy bakımı ve yıkama önerileri",
      "Yara, kesik ve cilt sorunlarında ilk değerlendirme",
    ],
    tips: [
      "Taşıma çantasıyla gelin; çantayı evde önceden tanıttığınızda stres azalır.",
      "Varsa önceki aşı, kısırlaştırma ve ilaç bilgilerini yanınızda getirin.",
      "İştah, idrar, kusma veya yara değişikliği varsa mesajda kısaca yazın.",
    ],
    services: [
      {
        title: "Kısırlaştırma",
        text: "Uygun zamanı birlikte planlarız. İşlem öncesi muayene, süreç hakkında net bilgi ve sonrası bakım önerileri verilir.",
      },
      {
        title: "Aşı uygulamaları",
        text: "Yaşa ve yaşam koşullarına göre aşı takvimini oluştururuz. Takip için size anlaşılır bir plan bırakırız.",
      },
      {
        title: "Beslenme ve bakım",
        text: "Mama seçimi, porsiyon, tüy dökülmesi, tırnak ve kum kabı gibi günlük konularda pratik öneriler sunarız.",
      },
      {
        title: "Yıkama / tüy bakımı",
        text: "Kediniz strese girmeyecek şekilde yıkama ihtiyacını değerlendiririz. Evde sürdürülebilir bakım adımlarını netleştiririz.",
      },
      {
        title: "Yara tedavisi",
        text: "Kesik, sıyrık veya cilt lezyonlarında ilk muayene yapar; temizleme, takip ve evde dikkat edilecekleri anlatırız.",
      },
      {
        title: "Genel muayene",
        text: "İştahsızlık, halsizlik, idrar sorunları veya davranış değişikliğinde sakin bir ortamda değerlendirme yaparız.",
      },
    ],
  },
  {
    slug: "kopek",
    title: "Köpek",
    description: "Muayene, aşı, bakım ve koruyucu sağlık desteği.",
    summary:
      "Köpeğiniz için kısırlaştırma, aşı, beslenme, yıkama ve yara tedavisinde net ve güvenli klinik destek sağlıyoruz.",
    image: "/images/category-dog.jpg",
    position: "center 22%",
    highlights: [
      "Kısırlaştırma süreci ve sonrası bakım planı",
      "Aşı ve parazit koruma takibi",
      "Beslenme, egzersiz ve yıkama önerileri",
      "Yara, topallama ve deri sorunlarında değerlendirme",
    ],
    tips: [
      "Tasma ile gelin; klinik ortamında sakin kalmasına yardımcı olun.",
      "Son aşı, kısırlaştırma ve mama bilgisini yanınızda bulundurun.",
      "Yara, topallama, kusma veya iştahsızlık varsa önceden yazın.",
    ],
    services: [
      {
        title: "Kısırlaştırma",
        text: "Irk, yaş ve sağlık durumuna göre uygun zamanı belirleriz. İşlem öncesi kontrol ve iyileşme dönemi önerileri verilir.",
      },
      {
        title: "Aşı uygulamaları",
        text: "Yavru ve yetişkin köpekler için aşı takvimini planlarız. Parazit korumasıyla birlikte takip ederiz.",
      },
      {
        title: "Beslenme ve bakım",
        text: "Yaşa, aktiviteye ve kilo durumuna uygun beslenme önerileri sunarız. Tüy, tırnak ve ağız bakımı için yönlendirme yaparız.",
      },
      {
        title: "Yıkama / tüy bakımı",
        text: "Deri tipine uygun yıkama ihtiyacını değerlendiririz. Evde düzenli bakım için doğru sıklık konusunda bilgi veririz.",
      },
      {
        title: "Yara tedavisi",
        text: "Kesik, sıyrık veya açık yaralarda ilk müdahale ve takip planı oluştururuz. Evde pansuman noktalarını anlatırız.",
      },
      {
        title: "Genel muayene",
        text: "Topallama, kusma, ishal, halsizlik veya davranış değişikliğinde muayene ile sonraki adımı birlikte belirleriz.",
      },
    ],
  },
  {
    slug: "kuslar",
    title: "Kuşlar",
    description: "Hassas türlere sakin muayene ve bakım desteği.",
    summary:
      "Kuşlar için düşük stresli yaklaşımla muayene, beslenme ve yaşam alanı konularında net yönlendirme sağlıyoruz.",
    image: "/images/category-bird.png",
    position: "center 42%",
    highlights: [
      "Sakin ortamda dikkatli muayene",
      "Beslenme ve tüy bakımı danışmanlığı",
      "Kafes ve yaşam alanı düzeni önerileri",
      "İştah veya davranış değişikliği değerlendirmesi",
    ],
    tips: [
      "Tanıdık bir taşıma kafesi kullanın; ani sıcaklık değişiminden koruyun.",
      "Son günlerdeki dışkı, iştah ve ses değişikliklerini not edin.",
      "Kullandığı yem markasını mesajınızda belirtin.",
    ],
  },
  {
    slug: "tavsanlar",
    title: "Tavşanlar",
    description: "Beslenme, diş sağlığı ve ilk kontrol rehberliği.",
    summary:
      "Tavşanınız için beslenme, diş sağlığı, yaşam alanı ve ilk kontrol konularında özenli destek sunuyoruz.",
    image: "/images/category-rabbit-hamster.png",
    position: "center 20%",
    highlights: [
      "İlk kontrol ve genel sağlık değerlendirmesi",
      "Beslenme ve ot / kuru gıda dengesi",
      "Diş ve sindirimle ilgili temel yönlendirme",
      "Yaşam alanı düzeni önerileri",
    ],
    tips: [
      "Taşıma kutusunu sabitleyin; tabana yumuşak bir örtü koyun.",
      "Son 24 saatteki iştah ve dışkı durumunu paylaşın.",
      "Yediği ot ve mama bilgisini getirin.",
    ],
  },
  {
    slug: "kemirgenler",
    title: "Kemirgenler",
    description: "Küçük dostlar için dikkatli takip ve öneri.",
    summary:
      "Hamster, kobay ve benzeri küçük dostlar için dikkatli muayene ve günlük bakım önerileri veriyoruz.",
    image: "/images/category-rabbit-hamster.png",
    position: "center 81%",
    highlights: [
      "Küçük türlere uygun sakin muayene",
      "Beslenme ve kafes hijyeni önerileri",
      "Diş ve tüy bakımı yönlendirmesi",
      "Yeni sahiplenme sonrası ilk kontrol",
    ],
    tips: [
      "Güvenli, havalandırmalı bir taşıma kutusu kullanın.",
      "Son günlerdeki aktivite ve iştah değişimini yazın.",
      "Kullandığı altlık ve mama türünü belirtin.",
    ],
  },
  {
    slug: "egzotik",
    title: "Egzotik dostlar",
    description: "Türüne özel ihtiyaçları gözeten yaklaşım.",
    summary:
      "Egzotik dostlarınız için türe özel ihtiyaçları dinleyip güvenli bakım ve takip planını birlikte kuruyoruz.",
    image: "/images/category-gecko-tortoise.png",
    position: "center 35%",
    highlights: [
      "Türe özel ilk değerlendirme",
      "Beslenme ve ortam koşulları danışmanlığı",
      "Stresi azaltan muayene yaklaşımı",
      "Evdeki bakım rutinine pratik öneriler",
    ],
    tips: [
      "Tür adını ve yaklaşık yaşını mesajınızda yazın.",
      "Yaşam alanı sıcaklık / nem bilgisini paylaşın.",
      "Son dönemdeki iştah veya hareket değişimini belirtin.",
    ],
  },
];

export function getAnimal(slug: string) {
  return animals.find((animal) => animal.slug === slug);
}

export function animalHref(slug: string) {
  return `/dostlarimiz/${slug}`;
}

export function animalWhatsApp(animal: Animal) {
  const message = `Merhaba Vet356, ${animal.title.toLocaleLowerCase("tr-TR")} dostum için bilgi / randevu almak istiyorum.`;
  return `https://wa.me/905355249960?text=${encodeURIComponent(message)}`;
}
