import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Zap,
  ArrowRight,
  Phone,
  ChevronRight,
  Star,
  Truck,
  Headphones,
  Award,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Otopark Ekipmanları | Profesyonel Otopark Çözümleri Ankara",
  description:
    "Araç bariyerleri, park kaldırıcıları, otopark aydınlatması ve profesyonel otopark ekipmanları. Ankara Ostim'den tüm Türkiye'ye hizmet. Bir TRİ Metal Kuruluşudur.",
};

const products = [
  {
    id: 1,
    title: "Araç Bariyerleri",
    desc: "Manuel, otomatik ve elektrikli araç bariyer sistemleri. AVM, hastane, site ve kapalı otopark uygulamaları için ideal çözümler.",
    img: null,
    href: "/urunler",
  },
  {
    id: 2,
    title: "Park Kaldırıcılar",
    desc: "Tek ve çift araçlı park kaldırıcı sistemler. Dar alanlarda çift kat park imkânı sağlayan yüksek kaliteli mekanik çözümler.",
    img: null,
    href: "/urunler",
  },
  {
    id: 3,
    title: "Otopark Aydınlatması",
    desc: "LED teknolojisi ile enerji tasarruflu, uzun ömürlü otopark aydınlatma armatürleri. IP65 korumalı sağlam yapı.",
    img: null,
    href: "/urunler",
  },
  {
    id: 4,
    title: "Otopark Boyası & Çizgi",
    desc: "Kaymaz otopark zemini boyaları, park yeri çizgi boyaları ve trafik işaret uygulamaları.",
    img: null,
    href: "/urunler",
  },
  {
    id: 5,
    title: "Trafik Levhaları",
    desc: "Otopark giriş-çıkış levhaları, yönlendirme levhaları ve reflektörlü trafik işaretleme ürünleri.",
    img: null,
    href: "/urunler",
  },
  {
    id: 6,
    title: "Otopark Aksesuarları",
    desc: "Bariyer zincirleri, araç durdurucu takozlar, park konileri ve tüm otopark aksesuarları.",
    img: null,
    href: "/urunler",
  },
];

const whyUs = [
  {
    icon: <Award size={22} />,
    title: "Kaliteli Ürünler",
    desc: "Tüm ürünlerimiz CE sertifikalı, uzun ömürlü malzemelerden üretilmektedir.",
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
    title: "Garanti",
    desc: "Ürünlerimiz 2 yıl garantili olup, uzun vadeli teknik destek sunuyoruz.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">
              <Star size={12} fill="currentColor" />
              Ankara&apos;nın Güvenilir Otopark Ekipmanı Tedarikçisi
            </span>
            <h1 className="hero-title">
              Profesyonel{" "}
              <span>Otopark</span>
              {" "}Ekipmanları
            </h1>
            <p className="hero-desc">
              Araç bariyerleri, park kaldırıcıları, otopark aydınlatması ve daha
              fazlası. Ostim&apos;den tüm Türkiye&apos;ye kaliteli ve uygun fiyatlı
              otopark çözümleri.
            </p>
            <div className="hero-actions">
              <Link href="/urunler" className="btn-primary">
                Ürünleri İncele <ArrowRight size={16} />
              </Link>
              <Link href="/iletisim" className="btn-outline-white">
                Teklif Al
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Tamamlanan Proje</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">10+</span>
                <span className="hero-stat-label">Yıl Deneyim</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">100%</span>
                <span className="hero-stat-label">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="hero-img-wrap">
              <div className="hero-img-placeholder">
                <Shield size={48} style={{ color: "rgba(245,197,24,0.3)" }} />
                <span>Ürün görseli yakında eklenecek</span>
              </div>
            </div>
            <div className="hero-tags">
              {["Araç Bariyeri", "Park Kaldırıcı", "LED Aydınlatma", "Zemin Boyası"].map((t) => (
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
            <h2 className="section-title">Tüm İhtiyaçlarınız İçin<br />Eksiksiz Çözümler</h2>
            <p className="section-subtitle">
              Geniş ürün yelpazemiz ile otoparkınızı en verimli, güvenli ve estetik
              hale getiriyoruz.
            </p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <Link key={p.id} href={p.href} className="product-card">
                <div className="product-card-img-wrap">
                  {p.img ? (
                    <img src={p.img} alt={p.title} />
                  ) : (
                    <div className="product-card-img-placeholder">
                      <Shield size={32} />
                      <span style={{ fontSize: "0.75rem" }}>Görsel yakında</span>
                    </div>
                  )}
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.title}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <div className="product-card-footer">
                    <span className="product-card-cta">
                      Ürünleri Gör <ChevronRight size={14} />
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
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <span className="badge">Neden Biz?</span>
            <h2 className="section-title">Güvenilir Çözüm Ortağınız</h2>
            <p className="section-subtitle">
              Yılların deneyimi ve TRİ Metal Yapı&apos;nın güçlü altyapısıyla, otopark
              ekipmanlarında size en iyi hizmeti sunuyoruz.
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

      {/* TRİ METAL SECTION */}
      <section style={{ padding: "60px 0", background: "#F5F5F5" }}>
        <div className="container">
          <div className="about-trimetal-box">
            <span style={{ fontSize: "3rem" }}>🏗️</span>
            <div>
              <h3 className="about-trimetal-title">
                Bir TRİ Metal Yapı Kuruluşudur
              </h3>
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
            Hemen Başlayalım
          </span>
          <h2 className="cta-title">
            Otoparkınız İçin{" "}
            <span>Ücretsiz</span>{" "}
            Teklif Alın
          </h2>
          <p className="cta-desc">
            İhtiyaçlarınızı bize bildirin, uzman ekibimiz size en uygun otopark
            ekipmanı çözümünü sunacaktır.
          </p>
          <div className="cta-actions">
            <Link href="/iletisim" className="btn-primary">
              Teklif İste <ArrowRight size={16} />
            </Link>
            <a href={`tel:${businessConfig.phone}`} className="btn-outline-white">
              <Phone size={15} />
              {businessConfig.phone}
            </a>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {["Ücretsiz Keşif", "Hızlı Teslimat", "Kurulum Desteği"].map((i) => (
              <span
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}
              >
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
