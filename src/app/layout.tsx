import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Otopark Ekipmanları | Profesyonel Otopark Çözümleri - Ankara",
    template: "%s | Otopark Ekipmanları",
  },
  description:
    "Araç bariyerleri, park kaldırıcıları, otopark aydınlatması ve tüm otopark ekipmanlarında Ankara'nın güvenilir çözüm ortağı. Bir TRİ Metal Kuruluşudur. Ostim, Yenimahalle/Ankara.",
  keywords: [
    "otopark ekipmanları",
    "araç bariyer",
    "park kaldırıcı",
    "otopark bariyeri",
    "otopark sistemleri",
    "ankara otopark",
    "TRİ Metal",
    "ostim",
  ],
  openGraph: {
    siteName: "Otopark Ekipmanları",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
