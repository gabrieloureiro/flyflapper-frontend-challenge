export interface ProductInterface {
  id: string
  imagePath?: string
  title: string
  aircraft: string
  time: number
  price: number
}

export interface CartItemInterface {
  product: ProductInterface
  quantity: number
}

export interface CartStateInterface {
  items: CartItemInterface[]
  failedStockCheck: string[]
}
