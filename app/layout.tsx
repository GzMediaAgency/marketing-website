import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "GZ Media Agency | Web Development, AI, Automation & SaaS",
    template: "%s — GZ Media Agency",
  },
  description:
    "GZ Media Agency builds modern websites, web applications, AI solutions, business automations and custom SaaS products for ambitious businesses.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    "web agency",
    "AI agency",
    "automation",
    "SaaS development",
    "AI agents",
    "chatbots",
    "n8n",
    "Make",
    "WhatsApp automation",
    "web application",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "GZ Media Agency | Web Development, AI, Automation & SaaS",
    description:
      "We build digital solutions that move your business forward. Web apps, AI, automations and SaaS.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GZ Media Agency | Web Development, AI, Automation & SaaS",
    description:
      "We build digital solutions that move your business forward.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-ink-950 text-ink-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/logo.svg`,
              description:
                "GZ Media Agency builds modern websites, web applications, AI solutions, business automations and custom SaaS products.",
              sameAs: Object.values(SITE.social),
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE.email,
                contactType: "sales",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}