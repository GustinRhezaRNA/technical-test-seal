import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Berita Kini",
  description: "Portal Berita Terkini dan Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
