import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Quantrill - My First Website",
  description: "Welcome to Joshua Quantrill's first website built with Next.js, TypeScript, and Tailwind CSS. Explore my journey in web development.",
  keywords: ["Joshua Quantrill", "Web Development", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Joshua Quantrill" }],
  creator: "Joshua Quantrill",
  openGraph: {
    title: "Joshua Quantrill - My First Website",
    description: "Welcome to Joshua Quantrill's first website built with Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
