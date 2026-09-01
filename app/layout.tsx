import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { siteUrl } from "./lib/config";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = "Chaudhary Estate | Property Dealers in Lahore";
const description =
  "Trusted property dealers in Lahore. Browse verified plots, homes, and commercial listings with Chaudhary Estate.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Chaudhary Estate",
    "Lahore property dealers",
    "plots for sale Lahore",
    "houses for sale Lahore",
    "Mozang real estate",
    "DHA Lahore property",
    "Bahria Town Lahore property",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Chaudhary Estate",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6efe6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
