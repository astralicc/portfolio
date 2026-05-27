import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenji Sato | Creative Developer & UI Engineer",
  description: "Architecting minimalist digital systems, modular design grids, and fluid visual interactions at the intersection of design and software development.",
  keywords: ["Kenji Sato", "Creative Developer", "UI Engineer", "Portfolio", "Minimalist Design", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Kenji Sato" }],
  creator: "Kenji Sato",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kenjisato.dev",
    title: "Kenji Sato | Creative Developer & UI Engineer",
    description: "Architecting minimalist digital systems, modular design grids, and fluid visual interactions.",
    siteName: "Kenji Sato Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
