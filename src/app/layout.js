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
    <html lang="en">
      <body className={leaguespartan.className}>{children}</body>
    </html>
  );
}
