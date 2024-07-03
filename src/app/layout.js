import { League_Spartan } from "next/font/google";
import "./globals.css";

const leaguespartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Frontend Mentor | Job Listing",
  description: "Developed by @Darkx-dev",
};

export default function RootLayout({ children }) {
  return (
    <html className="hide-scrollbar" lang="en">
      <body className={leaguespartan.className + " bg-cyan-grayish-light-2"}>{children}</body>
    </html>
  );
}
