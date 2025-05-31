"use client";

import {
  IconChartBar,
  IconCreditCard,
  IconDashboard,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";
import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  user: {
    name: "Jefferson Lopez",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Sistema POS",
      url: "#",
      icon: IconShoppingCart,
    },
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Inventarios",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Cajas Registradoras",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Suscripción",
      url: "#",
      icon: IconCreditCard,
    },
  ],
  navSecondary: [
    {
      title: "Configuraciones",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ayuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Buscar",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Reportes Generales",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Reportes de Cierre de Caja",
      url: "#",
      icon: IconFolder,
    },
    {
      name: "Productos Vendidos",
      url: "#",
      icon: IconUsers,
    },
    {
      name: "Facturas",
      url: "#",
      icon: IconFileDescription,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image
                  src={"/logo-ligth.svg"}
                  alt="Logo"
                  width={30}
                  height={30}
                  className="invert dark:invert-0"
                />
                <Image
                  src={"/mart-pos-logotipo-ligth.svg"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="invert dark:invert-0"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
