import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Putiao, My Place, My Home, CSO, Inc.",
  description:
    "Protecting the Putiao River, preserving culture and heritage, supporting livelihoods, and building a stronger community for a sustainable tomorrow.",
  generator: "v0.app",

  metadataBase: new URL("https://putiao-cso-v0.vercel.app"),

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Putiao, My Place, My Home, CSO, Inc.",
    description:
      "Protecting the Putiao River, preserving culture and heritage, supporting livelihoods, and building a stronger community for a sustainable tomorrow.",
    url: "https://putiao-cso-v0.vercel.app",
    siteName: "Putiao, My Place, My Home, CSO, Inc.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Putiao, My Place, My Home, CSO, Inc.",
      },
    ],
    locale: "en_PH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Putiao, My Place, My Home, CSO, Inc.",
    description:
      "Protecting the Putiao River, preserving culture and heritage, supporting livelihoods, and building a stronger community for a sustainable tomorrow.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#FAFCFA" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TMBJZD86');
            `,
          }}
        />
      </head>

      <body className="antialiased bg-background text-foreground">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMBJZD86"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
