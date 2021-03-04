/* eslint-disable prettier/prettier */
import { lighten, shade } from 'polished'
import styled from 'styled-components'

import { FlightCardProps } from './types'

export const Card = styled.div<FlightCardProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.content};
  position: relative;
  max-width: 350px;
  height: 420px;
  padding: 16px;
  transition: all 100ms ease;
  border-radius: 5px;
  transition: all 250ms ease-in-out;
  box-shadow: 0px 5px 7px #0000000d;

  :hover {
    img {
      transform: scale(1.02)
    }
  }

  :nth-child(2) {
    margin-left: 12px;
  }

  :last-child {
    margin-left: 12px;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
    height: 225px;
    transition: all 0.3s ease-out 0s;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    padding-top: 12px;
    line-height: 22px;
    cursor: text;
  }

  div {
    position: relative;
    margin: auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      cursor: text;
      color: ${({ theme }) =>
    theme.title === 'dark'
      ? shade(0.3, theme.text)
      : lighten(0.3, theme.text)};
      font-size: 14px;
    }

    svg {
      cursor: pointer;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    outline: 0;
    border: 0;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;

    svg {
      margin-right: 12px;
    }

    :hover {
      transform: translateY(-4px);
      background-color: ${({ theme }) => shade(0.25, theme.primary)};
    }
  }

  @media screen and (max-width: 500px) {
    :nth-child(2) {
      margin: 0 6px;
    }

    :last-child {
      margin: 0 6px;
    }
  }
`
export const IconWrapper = styled.div`
  :hover {
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    position: absolute;
    bottom: 30px;
    opacity: 0;
    visibility: hidden;
    width: 220px;
    height: 60px;
    right: -5px;
    background-color: ${({ theme }) => shade(0.3, theme.primary)};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    padding: 8px;
    transition: 300ms linear 0s;
    z-index: 999;

    p {
      font-size: 14px;
      color: #fff;
    }

    &::before {
      content: '';
      position: absolute;
      right: 10px;
      bottom: -4px;
      height: 8px;
      width: 8px;
      transform: rotate(45deg);
      background-color: ${({ theme }) => shade(0.3, theme.primary)};
      border-bottom: 0.5px solid ${({ theme }) => shade(0.3, theme.primary)};
      border-right: 0.5px solid ${({ theme }) => shade(0.3, theme.primary)};
    }
  }
`
