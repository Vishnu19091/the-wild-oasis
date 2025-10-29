import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// console.log(josefin);

export const metadata: Metadata = {
  // title: "The Wild Oasis",
  title: {
    // This will %s will be the title of the pages that export metadata
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

/**
 * This RootLayout is a layout that is applied to

 * all the routes of this application, whatever is written or returned here

 * will be applied to all pages. If want a different layout for a route

 * add a 'layout' inside the folder it will be applied

 * @param children -> allows to add child components

 * @returns RootLayout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
