"use client"

import { Geist, Geist_Mono } from "next/font/google"
import React from "react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { Separator } from "@workspace/ui/components/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { Providers } from "@/components/providers"
import "@workspace/ui/globals.css"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter((item) => item !== "")

  const formatLabel = (text: string) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <TooltipProvider delayDuration={100}>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm flex h-16 shrink-0 items-center gap-2 px-4 border-b">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    {segments.length === 0 ? (
                      <BreadcrumbItem>
                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                      </BreadcrumbItem>
                    ) : (
                      segments.map((segment, index) => {
                        const isLast = index === segments.length - 1
                        const href = `/${segments.slice(0, index + 1).join("/")}`

                        return (
                          <React.Fragment key={href}>
                            {index > 0 && (
                              <BreadcrumbSeparator className="hidden md:block" />
                            )}
                            <BreadcrumbItem>
                              {isLast ? (
                                <BreadcrumbPage>
                                  {formatLabel(segment)}
                                </BreadcrumbPage>
                              ) : (
                                <BreadcrumbLink href={href}>
                                  {formatLabel(segment)}
                                </BreadcrumbLink>
                              )}
                            </BreadcrumbItem>
                          </React.Fragment>
                        )
                      })
                    )}
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <Providers>
                <main className="flex-1 p-6">
                  {children}
                </main>
              </Providers>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}