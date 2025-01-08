import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from './images/stars.jpg'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Embarca.ai",
  description: "Stars Wars Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body

      >
        {children}
      </body>
    </html>
  );
}
