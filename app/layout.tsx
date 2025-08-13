import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry"; // Import AntdRegistry
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Neelu Solar",
  description: "Neelu Solar Energy Pvt. Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <AntdRegistry>
          {" "}
          {/* Wrap with AntdRegistry */}
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
