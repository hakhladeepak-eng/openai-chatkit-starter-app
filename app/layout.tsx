import type { Metadata } from "next";
import { ChatKitScript } from "@/components/ChatKitScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ChatKitScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
