import React from 'react'
import Link from 'next/link'

import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { CartItemInterface } from '@/store/modules/cart/types'
import { TopbarInterface } from './types'

import { useSelector } from 'react-redux'

import AccountDropdown from '../AccountDropdown'
import CartDropdown from '../CartDropdown'

import { StyledBar, Brand, Logos, Wrapper, RightContent } from './styles'

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
