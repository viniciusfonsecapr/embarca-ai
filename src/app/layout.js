import "./globals.css";
import { Audiowide } from "next/font/google";

export const metadata = {
  title: "Star Wars - Embarca.ai",
  description: "Stars Wars Book",
};

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",  // Adicione os pesos que você deseja usar
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={audiowide.className}>
      <body>{children}</body>
    </html>
  );
}
