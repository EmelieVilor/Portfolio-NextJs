import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProjectProvider } from "@/hooks/ProjectContext";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const IBMmono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  variable: "--font-ibm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emelie Vilör | Web Developer & UX Designer",
  description: "Portfolio for design and development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${IBMmono.variable} h-full antialiased`}>
      <body className="bg-dark min-h-full">
        <Navbar />
        <ProjectProvider>
          <main>{children}</main>
        </ProjectProvider>
        <Footer />
      </body>
    </html>
  );
}
