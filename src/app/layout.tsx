import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "../../public/images/LogoSVG.svg";

import ApolloWrapper from "@/lib/graphql/ApolloWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Me Time",
  description: "Me Time - Inspiring Me",
  icons: Logo.src,
  openGraph: {
    images: Logo.src,
    title: "Me Time",
    description: "Me Time - Inspiring Me",
    url: "https://me-time.co.za",
    siteName: "Me Time",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloWrapper>
        {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
