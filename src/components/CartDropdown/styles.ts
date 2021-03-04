/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { IconBase } from 'react-icons'
import { lighten, shade } from 'polished'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(IconBase)``

export const AnimatedDropdown = styled(motion.div)`
${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 65px;
    right: -60px;
    width: 300px;
    border-radius: 5px;
    background: ${theme.content};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

    ::before {
      content: '';
      position: absolute;
      right: 60px;
      top: -5px;
      height: 8px;
      width: 8px;
      transform: rotate(45deg);
      background-color: ${({ theme }) => theme.content};
    }

    @media screen and (max-width: 372px) {
      width: 200px;
    }
  `}
`

export const CartItem = styled.div`
${({ theme }) => css`
    width: 100%;
    padding: 24px;
    justify-content: space-between;
    background: ${theme.content};

    :hover {
      background: ${theme.title === 'dark'
      ? lighten(0.015, theme.content)
      : shade(0.015, theme.content)};
    }

    :first-child {
      border-radius: 5px 5px 0 0;
    }

    :last-child {
      border-radius: 0 0 5px 5px;
    }

    :first-child:last-child {
      border-radius: 5px;
    }

    :not(:last-child) {
      border-bottom: 0.1px dotted
        ${theme.title === 'dark'
      ? lighten(0.1, theme.content)
      : shade(0.1, theme.content)};
    }

    div {
      display: flex;
      justify-content: space-between;

      img {
        width: 35px;
        height: 35px;
        border-radius: 5px;
      }

      span {
        padding-left: 8px;
        font-size: 16px;
        text-align: right;
      }
    }

    button {
      margin-top: 12px;
      width: 100%;
      text-transform: uppercase;
      padding: 8px 12px;
      border-radius: 5px;
      outline: 0;
      border: 0;
      background: ${({ theme }) => theme.primary};
      color: #fff;
      transition: all 0.2s ease 0s;

      :hover {
        background-color: ${({ theme }) => shade(0.25, theme.primary)};
      }
    }

    p {
      text-align: right;
      color: ${({ theme }) =>
      theme.title === 'dark'
        ? shade(0.3, theme.text)
        : lighten(0.3, theme.text)};
      font-size: 14px;
    }
  `}
`
export const MediumText = styled.span`
${({ theme }) => css`
    font-size: 16px;
    font-weight: bold;
    color : ${theme.text};
    padding: 0 !important;
  `}
`

export const CartActions = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: flex-end !important;
    padding: 12px 0;

    > p {
      padding-right: 12px;
    }

    svg + p {
      color: ${theme.text};
      padding: 0 8px;
    }
  `}
`
