import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ArrowRight,
  Phone,
  ChevronRight,
  Star,
  Truck,
  Headphones,
  Award,
  CheckCircle,
} from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Otopark Ekipmanları | Demir Otopark ve Güvenlik Ürünleri - Ankara",
  description:
    "Demir araç stoperi, otopark bariyerleri, bariyer ürünleri, kolon köşe koruyucular ve bisiklet park demirleri. Ankara Ostim'den Türkiye geneline. Bir TRİ Metal Kuruluşudur.",
};

const products = [
  {
    id: 1,
    title: "Demir Otopark Araç Stoperi",
    desc: "Araçların park alanları dışına çıkmasını önleyen sağlam demir araç stoperleri. Uzun ömürlü, dayanıklı yapı.",
    img: "/images/arac-stoper.jpg",
    href: "/urunler",
  },
  {
    id: 2,
    title: "Demir Otopark Bariyerleri",
    desc: "Otoparklarda alan sınırlandırma ve güvenlik için yüksek kaliteli demir bariyer sistemleri. Siyah-sarı renkli dayanıklı yapı.",
    img: "/images/otopark-bariyerleri.jpg",
    href: "/urunler",
  },
  {
    id: 3,
    title: "Demir Bariyer Ürünleri",
    desc: "Etkinlikler, şantiyeler ve kalabalık alanlarda geçiş kontrolü için taşınabilir, kilitlenebilir metal bariyer ürünleri.",
    img: "/images/bariyer-urunleri.jpg",
    href: "/urunler",
  },
  {
    id: 4,
    title: "Demir Kolon Köşe Koruyucular",
    desc: "Otopark kolonlarını ve köşelerini araç hasarına karşı koruyan sarı-siyah renkli demir koruyucu sistemler.",
    img: "/images/kolon-kose-koruyucu.jpg",
    href: "/urunler",
  },
  {
    id: 5,
    title: "Bisiklet Park Demirleri",
    desc: "AVM, üniversite, park ve kamu binaları için galvanizli çelik bisiklet park standları. Renk seçenekleri mevcuttur.",
    img: "/images/bisiklet-park.jpg",
    href: "/urunler",
  },
];

const whyUs = [
  {
    icon: <Award size={22} />,
    title: "Kaliteli Ürünler",
    desc: "Tüm ürünlerimiz yüksek kaliteli demir ve çelik malzemelerden üretilmektedir.",
  },
  {
    icon: <Truck size={22} />,
    title: "Hızlı Teslimat",
    desc: "Geniş stok kapasitemiz ile siparişlerinizi kısa sürede teslim ediyoruz.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Teknik Destek",
    desc: "Satış sonrası teknik destek ve montaj hizmeti ile yanınızdayız.",
  },
  {
    icon: <Shield size={22} />,
    title: "Renk Seçenekleri",
    desc: "Tüm ürünlerimizde farklı renk seçenekleri sunulmaktadır. Özel renk talepleri karşılanır.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-grid" />
        {/* Hero BG image overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.6) 100%)"
        }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/hero-bg.jpg" alt="Otopark Ekipmanları" fill style={{ objectFit: "cover" }} priority />
        </div>

        <div className="hero-content">
          <div className="hero-text" style={{ zIndex: 2 }}>
            <span className="hero-badge">
              <Star size={12} fill="currentColor" />
              Otoparkınızda Maksimum Güvenlik
            </span>
            <h1 className="hero-title">
              Profesyonel{" "}
              <span>Otopark</span>
              {" "}Ekipmanları
            </h1>
            <p className="hero-desc">
              Demir araç stoperleri, otopark bariyerleri, kolon köşe koruyucular ve
              bisiklet park demirleri. Ankara Ostim&apos;den tüm Türkiye&apos;ye hızlı teslimat.
            </p>
            <div className="hero-actions">
              <Link href="/urunler" className="btn-primary">
                Ürünleri İncele <ArrowRight size={16} />
              </Link>
              <a href={`tel:${businessConfig.phone}`} className="btn-outline-white">
                <Phone size={15} />
                Hemen Ara
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-number">5</span>
                <span className="hero-stat-label">Ürün Kategorisi</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Tamamlanan Proje</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Kalite Garantisi</span>
              </div>
            </div>
          </div>

          {/* Right side products strip */}
          <div className="hero-visual" style={{ zIndex: 2 }}>
            <div className="hero-img-wrap">
              <Image src="/images/hero-bg.jpg" alt="Otopark Ürünleri" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="hero-tags">
              {["Araç Stoperi", "Otopark Bariyeri", "Köşe Koruyucu", "Bisiklet Park", "Bariyer Ürünleri"].map((t) => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <span className="badge">Ürün Kategorilerimiz</span>
            <h2 className="section-title">5 Temel Ürün<br />Kategorimiz</h2>
            <p className="section-subtitle">
              Otoparklarınızı güvenli, düzenli ve profesyonel hale getirecek tüm
              demir ekipmanlar tek bir adreste.
            </p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {products.map((p) => (
              <Link key={p.id} href={p.href} className="product-card">
                <div className="product-card-img-wrap">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="product-card-img-placeholder" style={{ position: "absolute", inset: 0, zIndex: -1 }}>
                    <Shield size={32} />
                    <span style={{ fontSize: "0.75rem" }}>Görsel yükleniyor</span>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.title}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <div className="product-card-footer">
                    <span className="product-card-cta">
                      Detayları Gör <ChevronRight size={14} />
                    </span>
                    <span style={{
                      fontSize: "0.7rem", background: "rgba(245,197,24,0.1)",
                      color: "#D4A800", border: "1px solid rgba(245,197,24,0.3)",
                      borderRadius: 100, padding: "3px 10px", fontWeight: 700
                    }}>
                      Renk Seçenekleri
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="badge">Neden Biz?</span>
            <h2 className="section-title">Güvenilir Çözüm Ortağınız</h2>
            <p className="section-subtitle">
              TRİ Metal Yapı&apos;nın güçlü altyapısıyla, otopark ekipmanlarında
              en iyi kalite ve hizmeti sunuyoruz.
            </p>
          </div>
          <div className="why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3 className="why-card-title">{w.title}</h3>
                <p className="why-card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRİ METAL */}
      <section style={{ padding: "60px 0", background: "#F5F5F5" }}>
        <div className="container">
          <div className="about-trimetal-box">
            <span style={{ fontSize: "3rem" }}>🏗️</span>
            <div>
              <h3 className="about-trimetal-title">Bir TRİ Metal Yapı Kuruluşudur</h3>
              <p className="about-trimetal-desc">
                Otopark Ekipmanları, yapı sektörünün köklü firmalarından{" "}
                <strong>TRİ Metal Yapı</strong>&apos;nın bir kuruluşudur. TRİ Metal;
                dilatasyon profilleri, köprü genleşme derzleri, duvar ve köşe koruma
                sistemleri başta olmak üzere pek çok alanda &quot;Dilatasyonda Uzman
                Çözümler&quot; sloganıyla Türkiye genelinde hizmet vermektedir.
              </p>
              <a
                href={businessConfig.parentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="about-trimetal-link"
              >
                TRİ Metal Yapı Websitesini Ziyaret Edin →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="badge" style={{ background: "rgba(245,197,24,0.15)", border: "1.5px solid rgba(245,197,24,0.3)" }}>
            Hemen Teklif Alın
          </span>
          <h2 className="cta-title">
            Otoparkınız İçin <span>Ücretsiz</span> Teklif
          </h2>
          <p className="cta-desc">
            İhtiyaçlarınızı belirtin, size en uygun otopark ekipmanı çözümünü suналım.
          </p>
          <div className="cta-actions">
            <Link href="/iletisim" className="btn-primary">
              Teklif İste <ArrowRight size={16} />
            </Link>
            <a href={`tel:${businessConfig.phone}`} className="btn-outline-white">
              <Phone size={15} />
              {businessConfig.phone}
            </a>
            <a href={`tel:${businessConfig.phone2}`} className="btn-outline-white">
              <Phone size={15} />
              {businessConfig.phone2}
            </a>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {["Ücretsiz Keşif", "Hızlı Teslimat", "Renk Seçenekleri", "Kurulum Desteği"].map((i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
                <CheckCircle size={14} style={{ color: "var(--color-primary)" }} />
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
