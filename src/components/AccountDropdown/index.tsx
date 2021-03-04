/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback, HtmlHTMLAttributes } from 'react'

import { useTheme } from '@/hooks/useTheme'
import { AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi'

import { Container, AnimatedDropdown, NavButton, Avatar } from './styles'
import { DROP_DOWN_ANIMATION } from './animations'

import useEventListener from '@/hooks/useEventListener'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
import { ImRocket } from 'react-icons/im'

const AccountDropdown: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = () => {
  const { theme, changeTheme } = useTheme()
  const router = useRouter()
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
      <Avatar active={isDropdownVisible} src="/images/gl.jpg" alt="avatar" />
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
              <NavButton onClick={() => changeTheme(theme)}>
                {theme.title === 'light' ? <FiMoon /> : <FiSun />}
                Change Theme
              </NavButton>
              <NavButton onClick={() => router.push('/about')}>
                <ImRocket />
                About developer
              </NavButton>
              <NavButton onClick={() => router.push('/')}>
                <FiLogOut />
                Logout
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default AccountDropdown
