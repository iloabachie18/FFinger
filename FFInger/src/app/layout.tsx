import type { Metadata } from "next";
import "./globals.css";
import { mulish } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SHEIN USA | Women's Clothing, Men's Clothing, Shoes & Accessories",
  description: "SHEIN - Free Shipping on Orders $49+, 30% off coupon for new users, Free Returns. Discover affordable, on-trend fashion, beauty, and lifestyle products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        {children}
      </body>
    </html>
  );
}
