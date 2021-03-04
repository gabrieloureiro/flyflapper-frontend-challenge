import { CartItemInterface } from '@/store/modules/cart/types'
import { HtmlHTMLAttributes } from 'react'

export interface CartProps extends HtmlHTMLAttributes<HTMLDivElement> {
  items: CartItemInterface[]
}
