import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"AI Video Generator",
  description:"Vercel-native multimodal AI video generation platform",
  metadataBase:new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000")
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}<Analytics/><SpeedInsights/></body></html>;
}