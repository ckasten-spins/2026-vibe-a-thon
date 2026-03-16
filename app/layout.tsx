import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpinsPortalLayout from "@/components/SpinsPortalLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demand Signal Engine | SPINS",
  description: "Agentic intelligence that converts policy changes, behavioral shifts, and supply disruptions into structured CPG demand analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" style={{ background: '#F3F4F6', color: '#111827', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <SpinsPortalLayout>
          {children}
        </SpinsPortalLayout>
      </body>
    </html>
  );
}
