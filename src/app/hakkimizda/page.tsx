import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Otopark Ekipmanları hakkında bilgi edinin. Bir TRİ Metal Yapı kuruluşu olarak Ankara Ostim'den Türkiye geneline profesyonel otopark çözümleri sunuyoruz.",
};

export default function HakkimizdaPage() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <ul className="breadcrumbs">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li className="breadcrumbs-sep">/</li>
            <li className="breadcrumbs-current">Hakkımızda</li>
          </ul>
          <h1 className="page-header-title">Hakkımızda</h1>
          <p className="page-header-desc">
            Profesyonel otopark çözümleriyle sektörde fark yaratan firmamızı
            tanıyın.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span className="badge">Firmamız</span>
              <h2 className="section-title">
                Otopark Ekipmanlarında<br />Uzman Çözüm Ortağınız
              </h2>
              <p style={{ color: "#757575", lineHeight: 1.8 }}>
                Otopark Ekipmanları olarak; araç bariyerleri, park kaldırıcıları,
                otopark aydınlatması, zemin boyaları ve trafik levhaları başta olmak
                üzere otoparkların ihtiyaç duyduğu tüm ekipmanları tek çatı altında
                sunuyoruz.
              </p>
              <p style={{ color: "#757575", lineHeight: 1.8 }}>
                Ankara Ostim, Prestij Business Center&apos;dan faaliyetlerini yürüten
                firmamız, kaliteli ürünleri uygun fiyatlarla ve hızlı teslimat
                seçenekleriyle tüm Türkiye&apos;ye ulaştırmaktadır.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/urunler" className="btn-primary">
                  Ürünlerimiz <ArrowRight size={16} />
                </Link>
                <Link href="/iletisim" className="btn-secondary">
                  İletişim
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #111 0%, #1a1a00 100%)",
                  borderRadius: 20,
                  padding: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "4/3",
                  border: "2px solid rgba(245,197,24,0.2)",
                }}
              >
                <Shield size={80} style={{ color: "#F5C518", opacity: 0.5 }} />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              margin: "64px 0",
              padding: "48px",
              background: "#111",
              borderRadius: 20,
              border: "1.5px solid rgba(245,197,24,0.15)",
            }}
          >
            {[
              { number: "500+", label: "Tamamlanan Proje" },
              { number: "10+", label: "Yıl Deneyim" },
              { number: "50+", label: "Ürün Çeşidi" },
              { number: "100%", label: "Müşteri Memnuniyeti" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: "#F5C518",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.number}
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* TRİ Metal */}
          <div className="about-trimetal-box">
            <span style={{ fontSize: "3rem" }}>🏗️</span>
            <div>
              <h3 className="about-trimetal-title">Bir TRİ Metal Yapı Kuruluşudur</h3>
              <p className="about-trimetal-desc">
                Otopark Ekipmanları, yapı sektörünün köklü ve güvenilir
                firmalarından <strong>TRİ Metal Yapı</strong>&apos;nın bir kuruluşudur.
                &quot;Dilatasyonda Uzman Çözümler&quot; sloganıyla hizmet veren TRİ Metal
                Yapı; dilatasyon profilleri, köprü genleşme derzleri, duvar ve köşe
                koruma sistemleri, su yalıtım ürünleri ve alüminyum gövdeli paspas
                sistemleri başta olmak üzere pek çok alanda faaliyet göstermektedir.
                Bu güçlü kurumsal yapı, Otopark Ekipmanları&apos;nın da temel kalite
                anlayışını ve müşteri odaklı yaklaşımını şekillendirmektedir.
              </p>
              <a
                href={businessConfig.parentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="about-trimetal-link"
              >
                <ExternalLink size={14} />
                TRİ Metal Yapı Websitesini Ziyaret Edin
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
