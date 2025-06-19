import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustBridge",
  description: "Decentralized P2P Lending. Built on Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
