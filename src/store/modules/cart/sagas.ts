/* eslint-disable generator-star-spacing */
import { all, takeLatest, select, call, put } from 'redux-saga/effects'

import { AxiosResponse } from 'axios'
import { GlobalStateInterface } from '../rootReducer'

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess
} from './actions'

import api from '@/services/api'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface StockResponseInterface {
  id: string
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload

  const currentSeatQuantity: number = yield select(
    (state: GlobalStateInterface) => {
      return (
        state.cart.items.find(item => item.product.id === product.id)
          ?.quantity ?? 0
      )
    }
  )

  const availableStockResponse: AxiosResponse<StockResponseInterface> = yield call(
    api.get,
    `stock/${product.id}`
  )

  if (availableStockResponse.data.quantity > currentSeatQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}
export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])
