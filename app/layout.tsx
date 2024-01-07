import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import FlareCursor from "./components/FlareCursor";
import Cursor from "./components/Cursor";

const DM_Sans_FONT = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineer - Frontend Developer | Minhaz Irphan Mohamed",
  description:
    "Welcome to my website, I am Minhaz Irphan Mohamed. I am an innovative software engineer specializing as a front-end developer and in web technologies and server-side management.  I bring over 4 years of experience as a software engineer, adept problem solver, and collaborative team player.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DM_Sans_FONT.className}>
        {/* <FlareCursor /> */}
        <Cursor />
        {children}
      </body>
    </html>
  );
}
