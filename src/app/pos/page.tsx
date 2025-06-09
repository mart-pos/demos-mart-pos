import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarRight } from "./sidebar-right";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "25rem",
          "--sidebar-width-mobile": "20rem",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      defaultOpen={false}
      open={false}
    >
      <AppSidebar variant="sidebar" collapsible="icon" />
      <SidebarInset>
        <SiteHeader isToogle={false}>Sistema POS</SiteHeader>
        <div className="flex-1 flex p-5 flex-col gap-5">
          <div className="*:not-first:mt-2">
            <div className="flex rounded-md">
              <Input
                className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                placeholder="Buscar productos por nombre, categoría o código"
              />
              <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
                Buscar
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Coca Cola", price: 2.5, category: "Bebidas" },
              { name: "Pan Integral", price: 1.8, category: "Panadería" },
              { name: "Leche Entera", price: 3.2, category: "Lácteos" },
              { name: "Manzanas", price: 4.5, category: "Frutas" },
              { name: "Arroz 1kg", price: 2.8, category: "Granos" },
              { name: "Pollo 1kg", price: 8.9, category: "Carnes" },
              { name: "Manzanas", price: 4.5, category: "Frutas" },
              { name: "Pan Integral", price: 1.8, category: "Panadería" },
              { name: "Coca Cola", price: 2.5, category: "Bebidas" },
            ].map((product, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 transition-shadow cursor-pointer"
              >
                <div className="aspect-square bg-muted rounded-md mb-3"></div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {product.category}
                </p>
                <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </SidebarInset>
      <SidebarRight side="right" variant="sidebar" collapsible="none" />
    </SidebarProvider>
  );
}
