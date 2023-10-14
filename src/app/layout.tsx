import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarLayout from "@/app/layouts/NavbarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CuyAnimeList",
  description: "Menyediakan List Anime Terbaik dan Terbaru",
  viewport: "width=device-width, initial-scale=1",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavbarLayout />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
