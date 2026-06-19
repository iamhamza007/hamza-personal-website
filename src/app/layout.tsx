import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Hamza Feroz | Entrepreneur, Developer & Trader",
    template: "%s | Hamza Feroz",
  },
  description:
    "Personal portfolio of Hamza Feroz, a BA student from Kolkata building digital products across e-commerce, trading systems, and modern web experiences.",
  keywords: [
    "Hamza Feroz",
    "Shopify Developer",
    "Forex Trader",
    "Python Developer",
    "Entrepreneur",
    "Kolkata",
  ],
  authors: [{ name: "Hamza Feroz" }],
  openGraph: {
    title: "Hamza Feroz | Entrepreneur, Developer & Trader",
    description:
      "Building businesses, software, and financial freedom through disciplined execution.",
    type: "website",
    images: ["/hamza-feroz-headshot.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
