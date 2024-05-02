"use client";
import react from "react";
import { Inter,Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "./i18n.js";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit ({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['thai'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={kanit.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
};
