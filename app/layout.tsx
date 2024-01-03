import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import FlareCursor from "./components/FlareCursor";

const DM_Sans_FONT = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer - Frontend Developer | Minhaz Irphan Mohamed",
  description:
    "Welcome to my website, I am Minhaz Irphan Mohamed. A software engineer ready to use my skills to help innovate the tech space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DM_Sans_FONT.className}>
        <FlareCursor />
        {children}
      </body>
    </html>
  );
}
