import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { PortfolioProvider } from "@/Context/portfolioContext";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PortfolioProvider>
          <Layout>
            <main className="flex min-h-screen flex-col items-center">
              {children}
            </main>
          </Layout>
        </PortfolioProvider>
      </body>
    </html>
  );
}
