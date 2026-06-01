import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

import ThemeProvider from "@/context/Theme";

import Footer from "../components/footer/index";
import Navbar from "../components/navigation/navbar/index";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "StudyFlow",
    template: "%s | StudyFlow",
  },
  description:
    "A collaborative learning platform where students can ask questions, share study notes, and get AI-powered explanations.",
  // icons: {
  //   icon: "/image/site-logo.svg",
  // },
  keywords: [
    "StudyFlow",
    "student platform",
    "Q&A app",
    "notes sharing",
    "AI learning",
  ],
};

const inter = localFont({
  src: "/fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100, 200, 300, 400, 500",
});

const interI = localFont({
  src: "/fonts/InterIVF.ttf",
  variable: "--font-inter-i",
  weight: "100, 200, 300, 400, 500",
});

const SpaceGrotesk = localFont({
  src: "/fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300, 400, 500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interI.variable} ${SpaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* {ThemeProvider({ children })} */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 mt-16">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
