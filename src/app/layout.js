import "./globals.css";

export const metadata = {
  title: "Embarca.ai",
  description: "Stars Wars Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
