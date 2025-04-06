import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: "AimVertical - Data-Driven Social Media Analytics",
  description: "Transform your social media strategy with data-driven insights for TikTok, Instagram, and Facebook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
