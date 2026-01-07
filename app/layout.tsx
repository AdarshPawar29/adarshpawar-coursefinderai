import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export const metadata: Metadata = {
  title: "Dashboard | coursefinder.ai",
  description: "Manage student applications, track admissions, and access overseas education services with coursefinder.ai",
  keywords: ["education", "study abroad", "student applications", "overseas education", "visa", "admissions"],
  authors: [{ name: "coursefinder.ai" }],
  openGraph: {
    title: "coursefinder.ai Dashboard",
    description: "Manage student applications and overseas education services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
