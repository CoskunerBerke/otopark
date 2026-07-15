import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Araç bariyerleri, park kaldırıcıları, otopark aydınlatması ve tüm otopark ekipmanları. Otopark Ekipmanları ürün kataloğu.",
};

const categories = [
  {
    id: "bariyerler",
    title: "Araç Bariyerleri",
    desc: "Manuel, otomatik ve elektrikli araç bariyer sistemleri. AVM, hastane, site ve kapalı otopark uygulamaları için ideal seçenekler.",
    products: [
      "Galvaniz Bariyer",
      "Boru Bariyer",
      "Katlanır Bariyer",
      "Elektrikli Bariyer",
      "Zincirli Bariyer",
    ],
  },
  {
    id: "kaldiricilar",
    title: "Park Kaldırıcılar",
    desc: "Tek ve çift araçlı mekanik park kaldırıcı sistemler. Dar alanlarda çift kat park imkânı.",
    products: [
      "Tek Araçlı Park Kaldırıcı",
      "Çift Araçlı Park Kaldırıcı",
      "Pit-Lift Sistemleri",
      "Puzzle Park Sistemleri",
    ],
  },
  {
    id: "aydinlatma",
    title: "Otopark Aydınlatması",
    desc: "LED teknolojisi ile enerji tasarruflu, uzun ömürlü otopark aydınlatma armatürleri.",
    products: [
      "LED Tavan Armatürü",
      "Acil Aydınlatma",
      "Çıkış Levhası Armatürleri",
      "Sensörlü Armatürler",
    ],
  },
  {
    id: "boya",
    title: "Otopark Boyası & Çizgi",
    desc: "Kaymaz zemin boyaları, park yeri çizgi boyaları ve trafik işaret uygulamaları.",
    products: [
      "Zemin Boyası",
      "Çizgi Boyası",
      "Kaymaz Kaplama",
      "Trafik Sarı Boya",
    ],
  },
  {
    id: "levhalar",
    title: "Trafik Levhaları",
    desc: "Otopark giriş-çıkış levhaları, yönlendirme levhaları ve reflektörlü trafik işaretleme ürünleri.",
    products: [
      "Yön Levhaları",
      "Kat Levhaları",
      "Giriş-Çıkış Levhaları",
      "Engelli Park Levhaları",
    ],
  },
  {
    id: "aksesuarlar",
    title: "Otopark Aksesuarları",
    desc: "Bariyer zincirleri, araç durdurucu takozlar, park konileri ve tüm otopark aksesuarları.",
    products: [
      "Park Konisi",
      "Araç Takozu",
      "Bariyer Zinciri",
      "Park Çubuğu",
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
            Tüm otopark ekipmanı ihtiyaçlarınız için geniş ürün yelpazemizi inceleyin.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                style={{
                  background: "#fff",
                  border: "1.5px solid #E0E0E0",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Placeholder img */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #F5F5F5, #EEEEEE)",
                    aspectRatio: "16/9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 8,
                    color: "#BDBDBD",
                  }}
                >
                  <Shield size={36} />
                  <span style={{ fontSize: "0.75rem" }}>Görsel yakında eklenecek</span>
                </div>

                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  <h2
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "#111",
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p style={{ fontSize: "0.85rem", color: "#9E9E9E", lineHeight: 1.7 }}>
                    {cat.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    {cat.products.map((p) => (
                      <div
                        key={p}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: "0.82rem",
                          color: "#424242",
                        }}
                      >
                        <ChevronRight size={13} style={{ color: "#D4A800", flexShrink: 0 }} />
                        {p}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #F0F0F0" }}>
                    <Link
                      href="/iletisim"
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      Teklif İste <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
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
            <h3
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Aradığınızı bulamadınız mı?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
              Geniş tedarik ağımız sayesinde ihtiyaç duyduğunuz her türlü otopark
              ekipmanını sizin için temin edebiliriz.
            </p>
            <a href={`tel:${businessConfig.phone}`} className="btn-primary">
              <Phone size={16} />
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
