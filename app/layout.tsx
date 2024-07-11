import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script';

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
      <body className={switzer.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children} 
        </ThemeProvider>
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n5o22k8izb");`}
        </Script> 
      </body>
    </html>
  );
}
