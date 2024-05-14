import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import NavbarPadding from "./navbar-padding";
import { ThemeProvider } from "./theme-provider";

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
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <NavbarPadding>
            <main className="flex flex-1 h-full min-h-full">
              <Sidebar />
              {children}
            </main>
          </NavbarPadding>
        </ThemeProvider>
      </body>
    </html>
  );
}
