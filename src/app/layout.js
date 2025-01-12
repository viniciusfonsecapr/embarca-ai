import "./globals.css";


export const metadata = {
  title: "Star Wars - Embarca.ai",
  description: "Stars Wars Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
