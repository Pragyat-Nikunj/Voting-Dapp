import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "VoteLab - Decentralized Voting",
  description: "Secure, transparent, and decentralized voting powered by Ethereum.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30">
        
        <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.7),transparent_70%)] pointer-events-none" />

        <Providers>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header /> 
            <main className="flex-grow pt-8 pb-20">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}