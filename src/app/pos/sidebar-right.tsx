"use client";

import { CreditCard, Minus, Plus, Trash2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Datos de ejemplo para productos en el carrito
const cartItems = [
  {
    id: 1,
    name: "Coca Cola 600ml",
    price: 2.5,
    quantity: 2,
    category: "Bebidas",
  },
  {
    id: 2,
    name: "Pan Integral",
    price: 1.8,
    quantity: 1,
    category: "Panadería",
  },
  {
    id: 3,
    name: "Leche Entera 1L",
    price: 3.2,
    quantity: 3,
    category: "Lácteos",
  },
];

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [items, setItems] = React.useState(cartItems);

  // Calcular totales
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * 0) / 100;
  const tax = (subtotal - discountAmount) * 0.16; // 16% IVA
  const total = subtotal - discountAmount + tax;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="h-(--header-height) border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Facturar</h2>
          <p className="text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? "producto" : "productos"}
          </p>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex-1 overflow-auto">
        <div className="p-4 space-y-4">
          {/* Lista de productos */}
          <div className="space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No hay productos agregados</p>
                <p className="text-sm">Selecciona productos para facturar</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.category}
                      </p>
                      <p className="text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateQuantity(item.id, 0)}
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-6 w-6 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-6 w-6 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-2">
        {/* Resumen de totales */}
        <SidebarSeparator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>IVA (16%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <SidebarSeparator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button variant="default" size="lg" disabled={items.length === 0}>
          <CreditCard className="mr-2 h-5 w-5" />
          Procesar Venta - ${total.toFixed(2)}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
