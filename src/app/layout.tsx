import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhira & Appa Coffee | Best Coffee Franchise in India",
  description:
    "Start your own Adhira & Appa Coffee franchise. India's fastest-growing coffee brand offering full support, low investment, and high ROI franchise opportunities.",
  icons: {
    icon: [
      {
        url: "https://framerusercontent.com/images/Z5mxdUtDT0kPareDlsyEBAYG8Zk.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://framerusercontent.com/images/JjKScLzARuJaNhmXwR6x40fgI5w.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "https://framerusercontent.com/images/dV1Fuu5qOkRJVvyr0xXgWBQTtQ4.png",
  },
  openGraph: {
    type: "website",
    title: "Adhira & Appa Coffee | Best Coffee Franchise in India",
    description:
      "Start your own Adhira & Appa Coffee franchise. India's fastest-growing coffee brand offering full support, low investment, and high ROI franchise opportunities.",
    images: "https://framerusercontent.com/images/HpsRAWXQuAc51gl6mmnLiwsNP0.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhira & Appa Coffee | Best Coffee Franchise in India",
    description:
      "Start your own Adhira & Appa Coffee franchise. India's fastest-growing coffee brand offering full support, low investment, and high ROI franchise opportunities.",
    images: "https://framerusercontent.com/images/HpsRAWXQuAc51gl6mmnLiwsNP0.png",
  },
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
