import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { Exo_2, Montserrat, Audiowide, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Poids des polices nécessaires
  variable: "--font-montserrat", // Variable CSS pour cette police
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-exo2",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
});

export const metadata = {
  title: "SOUMIC Festival",
  description: "Première édition !",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${exo2.variable} ${audiowide.variable}`}
    >
      <body>
        <Header />
        <div className="contentWrapper">
          <main className="mainContent">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
