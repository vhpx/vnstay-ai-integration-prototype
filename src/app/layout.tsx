import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vietnamstay Generative AI",
  description: "A prototype for a generative AI integration with Vietnamstay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-full h-full ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
