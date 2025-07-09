import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "StarkDesk Agency",
//   description: "Build your brand with StarkDesk — expert in UGC ads, cinematic reels, business websites, eCommerce, and performance-driven marketing campaigns.",
// };




//FOR GREATER SEO AND OTHERS IN NEXT JS REMEMBER (IMPORTANT )
export const metadata = {
   metadataBase: new URL("https://starkdesk.tech"), 
  title: "StarkDesk – Video + Web Growth Agency",
  description: "Grow your brand with premium video content, websites, and digital strategy.",
  openGraph: {
    title: "StarkDesk – Video + Web Growth Agency",
    description: "Grow your brand with premium video content, websites, and digital strategy.",
    // url: "https://starkdesk.in",
    siteName: "StarkDesk",
    images: [
      {
        url: "../assets/starkdesk-logo.jpg", // Your hosted image
        
        // url: "https://starkdesk.in/images/og-image.jpg", // Your hosted image
        width: 1200,
        height: 630,
        alt: "StarkDesk Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
