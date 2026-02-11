"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  History,
  Zap,
  BookmarkIcon,
  Braces,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Analyzer",
      url: "/analyzer",
      icon: Zap,
    },
    {
      title: "History",
      url: "/history",
      icon: History,
    },
    {
      title: "Saved Guides",
      url: "/guides",
      icon: BookmarkIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            <Braces />
          </div>
          <span className="font-semibold text-base">GapArchitect</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          label="Menu"
          items={data.navMain.map((item) => ({
            ...item,
            isActive: pathname === item.url,
          }))}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}