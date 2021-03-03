/* eslint-disable react/no-children-prop */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback } from 'react'

import { AnimatePresence } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'

import { Container, AnimatedDropdown, CartItem, Icon } from './styles'

import { DROP_DOWN_ANIMATION } from './animations'

import useEventListener from '@/hooks/useEventListener'
import { CartProps } from './types'
import { CartItemInterface } from '@/store/modules/cart/types'
import formatCurrency from '@/utils/formatCurrency'

const CartDropdown: React.FC<CartProps> = ({ items }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true)
  }

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
    <Container onClick={handleDropdownVisibility}>
      <Icon
        active={isDropdownVisible}
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
              {items.map((item: CartItemInterface) => {
                return (
                  <CartItem key={item.product.id}>
                    <div>
                      <img
                        src={item.product.imagePath}
                        alt={item.product.title}
                      />
                      <span>{item.product.title}</span>
                    </div>
                    <p>{formatCurrency(item.product.price * item.seat)}</p>
                  </CartItem>
                )
              })}
              <CartItem>
                <button>finish</button>
              </CartItem>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default CartDropdown
