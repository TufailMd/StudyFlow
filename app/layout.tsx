import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import { auth } from "@/auth";
import ThemeProvider from "@/context/Theme";

import Footer from "../components/footer/index";
import Navbar from "../components/navigation/navbar/index";

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
  weight: "100 200 300 400 500",
});

const interI = localFont({
  src: "/fonts/InterIVF.ttf",
  variable: "--font-inter-i",
  weight: "100 200 300 400 500",
});

const SpaceGrotesk = localFont({
  src: "/fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300, 400, 500",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interI.variable} ${SpaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
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
            <Toaster richColors />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
