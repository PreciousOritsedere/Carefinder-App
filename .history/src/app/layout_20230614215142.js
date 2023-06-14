// use client


import "./globals.css";
import { Work_Sans } from "next/font/google";
import Navbar from "@/Components/Nav/Navbar";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Carefinder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
