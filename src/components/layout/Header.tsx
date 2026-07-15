"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { businessConfig } from "@/config/business";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <Image
              src="/images/logo.png"
              alt="Otopark Ekipmanları Logo"
              width={120}
              height={46}
              style={{ height: "46px", width: "auto" }}
              priority
            />
            <div className="header-logo-text">
              <span className="header-logo-name">Otopark Ekipmanları</span>
              <span className="header-logo-tag">Bir TRİ Metal Kuruluşudur</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="header-nav">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href={`tel:${businessConfig.phone}`} className="header-phone">
              <Phone size={15} />
              {businessConfig.phone}
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              background: "#111",
              borderTop: "1px solid rgba(245,197,24,0.15)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${businessConfig.phone}`}
              className="btn-primary"
              style={{ marginTop: 8, justifyContent: "center" }}
            >
              <Phone size={15} />
              Bizi Arayın
            </a>
          </div>
        )}
      </header>

      {/* TRİ Metal Banner */}
      <div className="trimetal-banner">
        <div className="trimetal-banner-inner">
          <p className="trimetal-banner-text">
            <strong>Otopark Ekipmanları</strong>, Türkiye&apos;nin önde gelen yapı ekipmanları üreticisi{" "}
            <strong>TRİ Metal Yapı</strong>&apos;nın bir kuruluşudur.
          </p>
          <a
            href={businessConfig.parentCompany.website}
            target="_blank"
            rel="noopener noreferrer"
            className="trimetal-banner-link"
          >
            TRİ Metal&apos;i Keşfedin →
          </a>
        </div>
      </div>
    </>
  );
}
