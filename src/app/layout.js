import { Lato } from "next/font/google";
import "./globals.css";

const fontLato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Condomínio Dona Mirai",
  description: "Condomínio Dona Mirai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontLato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
