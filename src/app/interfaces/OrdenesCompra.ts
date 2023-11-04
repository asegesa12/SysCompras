export interface OrdenesCompra {

  id?: number,
  orderNumber: number,
  estado: string
  articulo: string,
  stock: number,
  medida: string,
  costoUnitario: number,
  fechaOrden: Date

}
