import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',   // fallback until font loads
  preload: true,     // bundle font with build
})

export const metadata = {
  title: "Next.js Portfolio Sohaib",
  description:
    "A unique creative portfolio designed by Sohaib with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
  icons: {
    icon:"/assest/logo.jpg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth hydrated">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}