import React, { useCallback } from 'react'

import { ProductInterface } from '@/store/modules/cart/types'
import { FlightCardProps } from './types'

import formatCurrency from '@/utils/formatCurrency'

import { useDispatch } from 'react-redux'
import { addProductToCart } from '@/store/modules/cart/actions'

import { MdAirlineSeatLegroomExtra } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Card, IconWrapper } from './styles'

const FlightCard: React.FC<FlightCardProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(
    (product: ProductInterface) => {
      dispatch(addProductToCart(product))
    },
    [dispatch]
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
