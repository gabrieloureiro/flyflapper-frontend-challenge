import { ToastMessage } from '@/hooks/useToast'

export const successCheckout: ToastMessage = {
  title: 'Congratulations!',
  description: 'Your order has been successfully completed. Enjoy the flight!',
  type: 'success'
}

export const successAddToCart: ToastMessage = {
  title: 'Product Added!',
  description: 'Your product has been successfully added!',
  type: 'success'
}

export const successRemoveFromCart: ToastMessage = {
  title: 'Product removed!',
  description: 'Your product has been successfully removed!',
  type: 'success'
}
