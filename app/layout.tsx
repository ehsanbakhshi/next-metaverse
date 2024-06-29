import "./globals.css";

import { Footer, Header } from "@/components/layout";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaverse",
  description: "Metaverse UI/UX Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body className={`${inter.className}`}>
        <div className="bg-primary-black overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
