/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import { IconWrapperProps } from './types'

export const StyledBar = styled.header`
  display: flex;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.content};
`

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 1180px;
`

export const Logos = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
`

export const Brand = styled.img`
  border: 0;
  margin: auto 0;
  max-height: 30px;
  height: 30px;
  margin-left: 32px;
  max-width: 90px;
  transition: all 0.5s ease;
  cursor: pointer;

`
export const RightContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

svg {
  cursor: pointer;
}
`
