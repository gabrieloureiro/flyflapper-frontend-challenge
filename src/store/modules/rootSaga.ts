/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable generator-star-spacing */
import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export default function* rootSaga() {
  return yield all([cart])
}
