import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserSync from "@/components/UserSync";
import TanStackProvider from "@/components/providers/TanStackProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentelligence",
  description: "AI Voice Dental Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserSync/>
        <Toaster/>
        {children}
      </body>
    </html>
    </ClerkProvider>
    </TanStackProvider>
    
  );
}
