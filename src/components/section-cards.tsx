import { IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total Vendido */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Vendido</CardDescription>
          <CardTitle className="text-2xl pb-[2px] font-semibold tabular-nums @[250px]/card:text-3xl">
            $9,870.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Ventas en aumento <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Comparado con el mes anterior
          </div>
        </CardFooter>
      </Card>

      {/* Productos Vendidos */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Productos Vendidos</CardDescription>
          <CardTitle className="text-2xl pb-[2px] font-semibold tabular-nums @[250px]/card:text-3xl">
            3,245
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +8.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Más unidades vendidas <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            En comparación al mes anterior
          </div>
        </CardFooter>
      </Card>

      {/* Producto Más Vendido */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Más Vendido</CardDescription>
          <CardTitle
            title="Agua Cristal 600ml"
            className="text-2xl font-semibold truncate pb-[2px] @[250px]/card:text-3xl"
          >
            Agua Cristal 600ml
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              520 unidades
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="font-medium">Más popular este mes</div>
          <div className="text-muted-foreground">
            Mayor rotación en inventario
          </div>
        </CardFooter>
      </Card>

      {/* Ganancias Totales */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Ganancias Totales</CardDescription>
          <CardTitle className="text-2xl pb-[2px] font-semibold tabular-nums @[250px]/card:text-3xl">
            $2,450.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +6.7%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Margen positivo <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Calculado sobre costo de productos
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
