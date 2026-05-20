import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Queen Gambelas | Lavandaria para Alojamento Local",
  description:
    "Landing page B2B para anfitrioes de Airbnb e gestores de Alojamento Local em Gambelas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
