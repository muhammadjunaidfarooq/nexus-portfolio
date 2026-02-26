import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "../globals.css";
import { draftMode } from "next/headers";
import Script from "next/script";
import { VisualEditing } from "next-sanity/visual-editing";
import { AppSidebar } from "@/components/app-sidebar";
// import { ModeToggle } from "@/components/DarkModeToggle";
// import { DisableDraftMode } from "@/components/DisableDraftMode";
// import { FloatingDock } from "@/components/FloatingDock";
// import SidebarToggle from "@/components/SidebarToggle";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Portfolio | Muhammad Junaid",
  description: "Advanced Engineer Portfolio with Sanity CMS and AI Integration",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract draft mode status early
  const { isEnabled } = await draftMode();

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          {/* OpenAI ChatKit Script */}
          <Script
            src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
            strategy="afterInteractive"
          />

          <SidebarProvider defaultOpen={false}>
            <SidebarInset className="relative min-h-screen bg-background">
              {children}
            </SidebarInset>

            <AppSidebar side="right" />

            {/* Global UI Components */}
            {/* <FloatingDock /> */}
            {/* <SidebarToggle /> */}

            {/* Mode Toggle Container */}
            {/* <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20"> */}
              {/* <div className="w-10 h-10 md:w-12 md:h-12"> */}
                {/* <ModeToggle /> */}
              {/* </div> */}
            {/* </div> */}
          </SidebarProvider>

          {/* Sanity Live Content Preview */}
          <SanityLive />

          {/* Conditional Visual Editing for Sanity Drafts */}
          {isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
