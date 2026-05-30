import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhira & Appa Coffee",
  description: "The best moments don't start with a plan. They start with great coffee and food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}
