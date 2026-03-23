import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pelluru Venkat Sai | Full Stack Developer",
  description:
    "Portfolio of Pelluru Venkat Sai, a full stack developer building responsive web products, dashboards, and client projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-transparent font-[var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
