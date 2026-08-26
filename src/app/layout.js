import { Lobster } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";


const losbter = Lobster({
  subsets: ["latin"],
  weight: ["400"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={losbter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
