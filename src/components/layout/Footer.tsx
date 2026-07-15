import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { businessConfig } from "@/config/business";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Image
            src="/images/logo.png"
            alt="Otopark Ekipmanları"
            width={130}
            height={50}
            style={{ height: "50px", width: "auto", marginBottom: 16 }}
          />
          <p className="footer-brand-desc">
            Araç bariyerleri, park kaldırıcıları, otopark aydınlatması ve daha
            fazlası için profesyonel çözümler. Ankara Ostim&apos;den tüm Türkiye&apos;ye
            hizmet veriyoruz.
          </p>
          <a
            href={businessConfig.parentCompany.website}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-trimetal-link"
          >
            <ExternalLink size={13} />
            Bir TRİ Metal Kuruluşudur
          </a>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <p className="footer-col-title">Hızlı Linkler</p>
          <ul className="footer-links">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/urunler">Ürünler</Link></li>
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
            <li>
              <a
                href={businessConfig.parentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                TRİ Metal Yapı
              </a>
            </li>
          </ul>
        </div>

        {/* Ürünler */}
        <div>
          <p className="footer-col-title">Ürün Kategorileri</p>
          <ul className="footer-links">
            <li><Link href="/urunler">Araç Bariyerleri</Link></li>
            <li><Link href="/urunler">Park Kaldırıcılar</Link></li>
            <li><Link href="/urunler">Otopark Aydınlatması</Link></li>
            <li><Link href="/urunler">Otopark Boyası</Link></li>
            <li><Link href="/urunler">Tüm Ürünler</Link></li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <p className="footer-col-title">İletişim</p>
          <div className="footer-contact-item">
            <MapPin size={16} className="footer-contact-icon" />
            <div className="footer-contact-text">{businessConfig.fullAddress}</div>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} className="footer-contact-icon" />
            <div className="footer-contact-text">
              <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} className="footer-contact-icon" />
            <div className="footer-contact-text">
              <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <Clock size={16} className="footer-contact-icon" />
            <div className="footer-contact-text">{businessConfig.openingHours}</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {year} Otopark Ekipmanları. Bir{" "}
          <a
            href={businessConfig.parentCompany.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            TRİ Metal Yapı
          </a>{" "}
          Kuruluşudur. Tüm hakları saklıdır.
        </p>
        <p className="footer-bottom-text">
          Prestij Business Center, Ostim, Ankara
        </p>
      </div>
    </footer>
  );
}
