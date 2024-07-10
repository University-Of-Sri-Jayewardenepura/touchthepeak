import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: './fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Touch The Peak",
  description: "The The #1 Job Platform for Undergraduates in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={switzer.className}>{children}</body>
    </html>
  );
}
