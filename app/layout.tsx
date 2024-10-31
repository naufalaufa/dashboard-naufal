import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(poppins.className, "flex min-h-screen w-full ")}>
        <Sidebar />
        <div className="p-12 w-full max-w-[90vw] sm:ml-32">{children}</div>
      </body>
    </html>
  );
}
