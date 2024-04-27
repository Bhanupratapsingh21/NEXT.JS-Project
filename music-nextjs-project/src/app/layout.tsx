import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Fotter from "@/components/Fotter"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edusic | Master The Art Of Music With Us",
  description: "Created With Next-JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body className={inter.className} >
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
        <Fotter/>
      </body>
    </html>
  );
}
