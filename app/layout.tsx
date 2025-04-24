import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";
import NewAppModal from "./components/NewAppModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elys - AI Technology Solutions | Innovative AI Services",
  description:
    "Elys delivers cutting-edge AI technology solutions including Omnia, OmniFS, Linadraw, and more. Transform your business with our innovative AI-powered services and solutions.",
  keywords:
    "Elys, AI technology, artificial intelligence, Omnia, OmniFS, Linadraw, AI solutions, machine learning, AI services, elys.work, AI consulting",
  authors: [{ name: "Elys Technology" }],
  creator: "Elys Technology",
  publisher: "Elys Technology",
  robots: "index, follow",
  alternates: {
    canonical: "https://elys.work",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elys.work",
    title: "Elys - AI Technology Solutions | Innovative AI Services",
    description:
      "Transform your business with Elys's cutting-edge AI technology solutions. Specializing in AI services, machine learning, and innovative tech solutions.",
    siteName: "Elys Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elys AI Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elys - AI Technology Solutions",
    description:
      "Transform your business with Elys's cutting-edge AI technology solutions",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ThemeToggle />
          <NewAppModal />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
