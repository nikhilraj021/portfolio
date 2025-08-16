import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./components/hoc/Provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio-Nikhilraj",
  description: "Creative showcase of professional work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${poppins.className} antialiased leading-8 overflow-x-hidden min-h-screen`}
      >
        <Provider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
