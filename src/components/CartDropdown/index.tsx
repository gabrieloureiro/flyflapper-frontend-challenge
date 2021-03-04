/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-children-prop */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback } from 'react'

import { AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiShoppingCart } from 'react-icons/fi'

import {
  Container,
  AnimatedDropdown,
  CartItem,
  Icon,
  MediumText,
  CartActions
} from './styles'

import { AiOutlineDelete } from 'react-icons/ai'

import { DROP_DOWN_ANIMATION } from './animations'

import useEventListener from '@/hooks/useEventListener'
import { CartProps } from './types'
import { CartItemInterface, ProductInterface } from '@/store/modules/cart/types'
import formatCurrency from '@/utils/formatCurrency'
import {
  addProductToCartRequest,
  clearCart,
  removeProductFromCart
} from '@/store/modules/cart/actions'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { useToast } from '@/hooks/useToast'
import {
  successCheckout,
  successRemoveFromCart
} from '@/utils/successToastMessages'
import { useRouter } from 'next/router'

const CartDropdown: React.FC<CartProps> = ({ items }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const router = useRouter()
  const { addToast } = useToast()
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const prices = useSelector<GlobalStateInterface, number[]>(state =>
    state.cart.items.map(item => {
      return item.product.price * item.quantity
    })
  )

  const totalPrice = prices.reduce(
    (total: number, number: number) => total + number,
    0
  )

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true)
  }

  const handleAddProductToCart = useCallback(
    (product: ProductInterface) => {
      dispatch(addProductToCartRequest(product))
    },
    [dispatch]
  )

  const handleRemoveProductFromCart = useCallback(
    (product: ProductInterface) => {
      dispatch(removeProductFromCart(product))
    },
    [dispatch]
  )

  const handleClearCart = useCallback(
    (description: string) => {
      dispatch(clearCart())
      router.reload()
      addToast({ ...successCheckout, description })
    },
    [dispatch]
  )

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef.current?.contains(target as Node)) {
        return
      }
      setIsDropdownVisible(false)
    },
    [setIsDropdownVisible]
  )

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible
  })

  return (
    <Container>
      <Icon
        onClick={handleDropdownVisibility}
        color="#009788"
        children={<FiShoppingCart />}
      />
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              {items.length !== 0 ? (
                items.map((item: CartItemInterface) => {
                  return (
                    <CartItem key={item.product.id}>
                      <div>
                        <img
                          src={item.product.imagePath}
                          alt={item.product.title}
                        />
                        <span>{item.product.title}</span>
                      </div>
                      <CartActions>
                        <p>Seat quantity:</p>
                        <FiChevronUp
                          size={18}
                          color="#009788"
                          onClick={() => handleAddProductToCart(item.product)}
                        />
                        <p>{item.quantity}</p>
                        <Icon
                          onClick={() => {
                            handleRemoveProductFromCart(item.product)
                            item.quantity === 1
                              ? addToast(successRemoveFromCart)
                              : null
                          }}
                          color={item.quantity !== 1 ? '#009788' : '#8b0000'}
                          children={
                            item.quantity !== 1 ? (
                              <FiChevronDown />
                            ) : (
                                <AiOutlineDelete />
                              )
                          }
                        />
                      </CartActions>
                      <p>
                        {formatCurrency(item.product.price * item.quantity)}
                      </p>
                    </CartItem>
                  )
                })
              ) : (
                  <CartItem>Your cart is empty</CartItem>
                )}
              {items.length !== 0 && (
                <CartItem>
                  <div>
                    <MediumText>Total:</MediumText>
                    <p>{formatCurrency(totalPrice)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleClearCart(
                        `Your order worth ${formatCurrency(
                          totalPrice
                        )} has been successfully completed. Enjoy the flight!`
                      )
                    }
                  >
                    Checkout
                  </button>
                </CartItem>
              )}
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default CartDropdown
