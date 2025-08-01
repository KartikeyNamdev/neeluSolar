import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SnackbarProvider } from "notistack";
import SnackBar from "./SnackBar";

export const metadata: Metadata = {
  title: "Neelu Solar",
  description: "Neelu Solar Energy Pvt. Ltd",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>

      <body>{children}</body>
    </html>
  );
}
