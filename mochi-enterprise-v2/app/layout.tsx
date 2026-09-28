import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mochi — Enterprise Intelligence",
  description: "Mochi enterprise intelligence workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}