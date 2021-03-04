import React, { useCallback, useEffect, useState } from 'react'

import { ProductInterface } from '@/store/modules/cart/types'
import { FlightCardProps } from './types'

import formatCurrency from '@/utils/formatCurrency'

import { useDispatch, useSelector } from 'react-redux'
import { addProductToCartRequest } from '@/store/modules/cart/actions'

import { MdAirlineSeatLegroomExtra } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Card, IconWrapper } from './styles'
import { useToast } from '@/hooks/useToast'
import { successAddToCart } from '@/utils/successToastMessages'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { errorStockCheck } from '@/utils/errorToastMessages'

const FlightCard: React.FC<FlightCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const { addToast } = useToast()
  const hasFailedStockCheck = useSelector<GlobalStateInterface, boolean>(
    state => state.cart.failedStockCheck.includes(product.id)
  )

  const handleAddProductToCart = useCallback(
    (product: ProductInterface) => {
      dispatch(addProductToCartRequest(product))
      if (!hasFailedStockCheck) {
        addToast(successAddToCart)
      } else {
        addToast(errorStockCheck)
      }
    },
    [hasFailedStockCheck, dispatch]
  )

  return (
    <Card product={product}>
      <img src={product.imagePath} alt={product.title} />
      <h2>{product.title}</h2>
      <div>
        <span>{formatCurrency(product.price)} per seat</span>
        <IconWrapper>
          <AiOutlineInfoCircle size={20} color="#009788" />
          <div>
            <p>
              <strong>Aircraft:</strong> {product.aircraft}
            </p>
            <p>
              <strong>Estimated time:</strong> {product.time} minutes
            </p>
          </div>
        </IconWrapper>
      </div>
      <button type="button" onClick={() => handleAddProductToCart(product)}>
        <MdAirlineSeatLegroomExtra size={20} color="#fff" />
        Buy a seat
      </button>
    </Card>
  )
}

export default FlightCard
