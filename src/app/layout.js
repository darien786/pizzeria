import { Lobster } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";


const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Pizzas Flow",
  description: "Sabor que te hace volver"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lobster.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
