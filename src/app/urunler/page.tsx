import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Demir otopark araç stoperi, otopark bariyerleri, bariyer ürünleri, kolon köşe koruyucular ve bisiklet park demirleri. Otopark Ekipmanları ürün kataloğu.",
};

const categories = [
  {
    id: "arac-stoper",
    title: "Demir Otopark Araç Stoperi",
    desc: "Araçların park alanının dışına çıkmasını, duvara veya engele çarpmasını önleyen sağlam demir araç stoperleridir. Yüksek dayanıklılığa sahip malzeme yapısı sayesinde uzun yıllar boyunca sorunsuz hizmet sunar.",
    img: "/images/arac-stoper.jpg",
    features: [
      "Yüksek kaliteli demir konstrüksiyon",
      "Zemine ankraj ile sabit montaj",
      "Reflektörlü şerit seçeneği",
      "Farklı renk seçenekleri mevcut",
      "Açık ve kapalı otopark kullanımına uygun",
    ],
  },
  {
    id: "otopark-bariyerleri",
    title: "Demir Otopark Bariyerleri",
    desc: "Otoparklarda park alanlarını sınırlandırmak, güvenliği sağlamak ve düzeni korumak için kullanılan yüksek kaliteli demir bariyer sistemleridir. Siyah-sarı reflektörlü seçenekleri ile gece görünürlüğü maksimum seviyededir.",
    img: "/images/otopark-bariyerleri.jpg",
    features: [
      "Siyah-sarı reflektörlü yüzey",
      "Gece görünürlüğü yüksek tasarım",
      "Çeşitli boy ve konfigürasyonlar",
      "Dayanıklı toz boya kaplama",
      "Hızlı montaj sistemi",
    ],
  },
  {
    id: "bariyer-urunleri",
    title: "Demir Bariyer Ürünleri",
    desc: "Etkinlikler, şantiyeler, kalabalık alanlar ve geçici güvenlik önlemi gerektiren her yerde kullanılan taşınabilir ve birbirine kilitlenebilir metal bariyer ürünleridir.",
    img: "/images/bariyer-urunleri.jpg",
    features: [
      "Taşınabilir ve hafif yapı",
      "Birbirine kilitlenebilir sistem",
      "Sarı, gri, turuncu renk seçenekleri",
      "Etkinlik ve şantiye kullanımına uygun",
      "Toplu alımda özel fiyatlandırma",
    ],
  },
  {
    id: "kolon-kose-koruyucu",
    title: "Demir Kolon Köşe Koruyucular",
    desc: "Otopark kolonlarını ve duvar köşelerini araç çarpmasına karşı koruyan sağlam demir koruyucu sistemlerdir. Dikkat çekici siyah-sarı renk kombinasyonu sayesinde sürücüler mesafeyi kolayca hesaplayabilir.",
    img: "/images/kolon-kose-koruyucu.jpg",
    features: [
      "Kolon ve köşe profilleri mevcut",
      "Siyah-sarı uyarı şeridi",
      "Darbe emici tasarım",
      "Kolay montaj sistemi",
      "Endüstriyel ortamlara dayanıklı",
    ],
  },
  {
    id: "bisiklet-park",
    title: "Bisiklet Park Demirleri",
    desc: "Kamu binaları, üniversiteler, AVM'ler, parklar ve toplu taşıma istasyonları için tasarlanmış galvanizli çelik bisiklet park standlarıdır. Korozyona karşı dirençli dış kaplama sayesinde her hava koşulunda uzun ömürlü kullanım sağlar.",
    img: "/images/bisiklet-park.jpg",
    features: [
      "Galvanizli çelik yapı",
      "Spiral, düz ve modern tasarım seçenekleri",
      "Tekli veya çoklu araç kapasitesi",
      "İç ve dış mekan kullanımına uygun",
      "Özel renk seçenekleri ile sipariş imkânı",
    ],
  },
];

export default function UrunlerPage() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <ul className="breadcrumbs">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li className="breadcrumbs-sep">/</li>
            <li className="breadcrumbs-current">Ürünler</li>
          </ul>
          <h1 className="page-header-title">Ürün Kategorileri</h1>
          <p className="page-header-desc">
            Otoparklarınız için 5 temel demir ekipman kategorimizi inceleyin.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: 48,
                  alignItems: "center",
                  flexDirection: idx % 2 !== 0 ? "row-reverse" : "row",
                  background: idx % 2 !== 0 ? "#F9F9F9" : "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1.5px solid #EEEEEE",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    background: "#F0F0F0",
                    order: idx % 2 !== 0 ? 2 : 1,
                  }}
                >
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    order: idx % 2 !== 0 ? 1 : 2,
                  }}
                >
                  <span className="badge">Ürün Kategorisi</span>
                  <h2
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      fontWeight: 900,
                      color: "#111",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p style={{ color: "#757575", lineHeight: 1.8, fontSize: "0.95rem" }}>
                    {cat.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                    {cat.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "#424242" }}>
                        <ChevronRight size={14} style={{ color: "#D4A800", flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
                    <Link href="/iletisim" className="btn-primary">
                      Teklif Al <ArrowRight size={14} />
                    </Link>
                    <a href={`tel:${businessConfig.phone}`} className="btn-secondary" style={{ fontSize: "0.875rem" }}>
                      <Phone size={14} />
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: 64,
              padding: "48px",
              background: "#111",
              borderRadius: 20,
              textAlign: "center",
              border: "1.5px solid rgba(245,197,24,0.15)",
            }}
          >
            <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "#fff", marginBottom: 12 }}>
              Aradığınızı bulamadınız mı?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
              Geniş ürün yelpazemiz ve özel üretim kapasitemizle ihtiyacınıza özel
              çözümler üretiyoruz.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${businessConfig.phone}`} className="btn-primary">
                <Phone size={16} />
                {businessConfig.phone}
              </a>
              <a href={`tel:${businessConfig.phone2}`} className="btn-outline-white">
                <Phone size={16} />
                {businessConfig.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
