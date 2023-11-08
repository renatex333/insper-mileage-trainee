import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trainee Insper Mileage",
  description: "Projeto #1",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {props.children}
      </body>
    </html>
  );
}