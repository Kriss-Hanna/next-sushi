import { Playfair_Display, Poppins } from "next/font/google";
import ThemeProvider from "./theme-provider";
import RootClientWrapper from "./root-client-wrapper";
import { ClientSafe } from "./client-safe";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "YahpadSushi | Restaurant Japonais Authentique",
  description:
    "Découvrez une expérience culinaire japonaise authentique chez YahpadSushi. Menu traditionnel, ingrédients frais et atmosphère zen.",
  keywords:
    "restaurant japonais, sushi, sashimi, maki, cuisine japonaise, gastronomie japonaise",
  openGraph: {
    title: "YahpadSushi | Restaurant Japonais Authentique",
    description:
      "Découvrez une expérience culinaire japonaise authentique chez YahpadSushi. Menu traditionnel, ingrédients frais et atmosphère zen.",
    url: "https://yahpadsushi.com",
    siteName: "YahpadSushi",
    locale: "fr_FR",
    type: "website",
  },
};

// Force static rendering (élimine les différences hydratation)
export const dynamic = "force-static";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <ClientSafe>
          <ThemeProvider>{children}</ThemeProvider>
        </ClientSafe>
      </body>
    </html>
  );
}
