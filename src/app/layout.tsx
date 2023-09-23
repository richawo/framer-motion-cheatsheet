"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import GitHubButton from "react-github-btn";
import { usePathname } from "next/navigation";
import { CodeProvider } from "./context/CodeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <CodeProvider>
        <body className={inter.className}>
          <div className="h-screen w-full flex flex-col gap-2 items-center justify-center relative">
            <div className="w-[60vmin] bg-black h-min relative border border-[#191919]">
              {children}
            </div>
            {pathname.length > 1 && (
              <p className="text-white/50 text-xs">{pathname}</p>
            )}
            <div className="absolute bottom-0 right-0 flex p-4 gap-4">
              <GitHubButton
                href="https://github.com/richawo"
                data-color-scheme="no-preference: light; light: light; dark: light;"
                data-size="large"
                aria-label="Follow @richawo on GitHub"
              >
                Follow @richawo
              </GitHubButton>
              <GitHubButton
                href="https://github.com/richawo/framer-motion-nextjs"
                data-color-scheme="no-preference: light; light: light; dark: light;"
                data-icon="octicon-star"
                data-size="large"
                aria-label="Star richawo/framer-motion-nextjs on GitHub"
              >
                Star
              </GitHubButton>
            </div>
          </div>
        </body>
      </CodeProvider>
    </html>
  );
}
