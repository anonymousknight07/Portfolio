import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat->Portfolio",
  description: "Made by Akshat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <link rel='icon' href='https://cdn.sanity.io/images/w0i6ovrr/production/aa0adae0e4fc91fc697771afeafd9a9a24eea0ea-361x361.png' />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
