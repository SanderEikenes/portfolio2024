import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Ubuntu } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "100"
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Sander Eikenes",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={ubuntu.className} >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
