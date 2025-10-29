import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
