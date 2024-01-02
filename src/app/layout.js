import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideTestProvider from "@/components/ClientSideTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home Page | Next.js",
    template: "%s | Next.js",
  },
  description: "Next.js app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideTestProvider> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideTestProvider> */}
      </body>
    </html>
  );
}
