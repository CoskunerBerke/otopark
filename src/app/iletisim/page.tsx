import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Otopark Ekipmanları iletişim bilgileri. Ankara Ostim, Prestij Business Center. Teklif almak veya bilgi almak için bize ulaşın.",
};

export default function IletisimPage() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <ul className="breadcrumbs">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li className="breadcrumbs-sep">/</li>
            <li className="breadcrumbs-current">İletişim</li>
          </ul>
          <h1 className="page-header-title">İletişim</h1>
          <p className="page-header-desc">
            Teklif almak, bilgi edinmek veya ziyaret planlamak için bize ulaşın.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div>
              <div className="contact-info-card">
                <div className="contact-info-item">
                  <div className="contact-info-icon-wrap">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="contact-info-label">Adres</p>
                    <p className="contact-info-value">{businessConfig.fullAddress}</p>
                    <a
                      href={businessConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 8,
                        color: "#D4A800",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Haritada Gör <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="contact-info-label">Telefon</p>
                    <p className="contact-info-value">
                      <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrap">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="contact-info-label">E-Posta</p>
                    <p className="contact-info-value">
                      <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-wrap">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="contact-info-label">Çalışma Saatleri</p>
                    <p className="contact-info-value">{businessConfig.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* TRİ Metal link */}
              <div className="about-trimetal-box" style={{ marginTop: 24 }}>
                <span style={{ fontSize: "2rem" }}>🏗️</span>
                <div>
                  <h3 className="about-trimetal-title">Bir TRİ Metal Yapı Kuruluşudur</h3>
                  <p className="about-trimetal-desc">
                    TRİ Metal Yapı hakkında daha fazla bilgi almak için resmi web
                    sitesini ziyaret edebilirsiniz.
                  </p>
                  <a
                    href={businessConfig.parentCompany.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-trimetal-link"
                  >
                    trimetalyapi.com →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="contact-map">
                <iframe
                  src={businessConfig.googleMapsEmbedUrl}
                  title="Otopark Ekipmanları Konum"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                <MapPin size={16} />
                Google Maps&apos;te Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
