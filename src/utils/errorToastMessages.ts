import { ToastMessage } from '@/hooks/useToast'

export const errorStockCheck: ToastMessage = {
  title: 'Ops! Out of stock',
  description: 'This product no longer has seats available',
  type: 'error'
}
