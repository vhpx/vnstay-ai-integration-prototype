import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import NavbarPadding from "./navbar-padding";
import { ThemeProvider } from "./theme-provider";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      <body className={`flex flex-col min-h-screen ${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <NavbarPadding>
            <main className="grid md:flex flex-1 min-h-full">
              <Sidebar />
              <div className="overflow-y-auto h-[calc(100vh-68px)] w-full">
                {children}
              </div>
            </main>
          </NavbarPadding>
        </ThemeProvider>
      </body>
    </html>
  );
}
