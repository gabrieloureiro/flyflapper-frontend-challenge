import React from 'react'
import Link from 'next/link'

import { TopbarInterface } from './types'

import AccountDropdown from '../AccountDropdown'
import { StyledBar, Brand, Logos, Wrapper, RightContent } from './styles'
import CartDropdown from '../CartDropdown'
import { useSelector } from 'react-redux'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { CartItemInterface } from '@/store/modules/cart/types'

const Topbar: React.FC<TopbarInterface> = () => {
  const items = useSelector<GlobalStateInterface, CartItemInterface[]>(
    state => state.cart.items
  )
  return (
    <StyledBar>
      <Wrapper>
        <Logos>
          <Link href="/">
            <Brand src="/images/flapper.png" alt="flapper" />
          </Link>
        </Logos>
        <RightContent>
          <CartDropdown items={items} />
          <AccountDropdown />
        </RightContent>
      </Wrapper>
    </StyledBar>
  )
}

export default Topbar
