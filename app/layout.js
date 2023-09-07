import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import constants from "@/config/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: constants.name,
  description: constants.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
