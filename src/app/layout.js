import "./globals.css";



export const metadata = {
  title: "Star Wars - Embarca.ai",
  description: "Stars Wars Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>

      </head>
      <body>{children}</body>
    </html>
  );
}
