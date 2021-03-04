import { ProductInterface } from '@/store/modules/cart/types'
import { HtmlHTMLAttributes } from 'react'

export interface FlightCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  product: ProductInterface
}
