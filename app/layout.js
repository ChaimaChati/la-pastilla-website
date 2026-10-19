import { Lora, Yellowtail } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { PhotoProvider } from "@/components/PhotoProvider";

const serif = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});
const script = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Restaurant La Pastilla – Cuisine marocaine à Agadir",
  description:
    "Petit déjeuner marocain, pâtisseries et jus exotiques frais. Restaurant La Pastilla, Boulevard du 20 Août, Agadir.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${serif.variable} ${script.variable}`}>
      <body>
        <LangProvider>
          <PhotoProvider>{children}</PhotoProvider>
        </LangProvider>
      </body>
    </html>
  );
}
