/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback, HtmlHTMLAttributes } from 'react'

import { useRouter } from 'next/router'
import { useTheme } from '@/hooks/useTheme'
import useEventListener from '@/hooks/useEventListener'

import { DROP_DOWN_ANIMATION } from './animations'

import { AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { ImRocket } from 'react-icons/im'

import { Container, AnimatedDropdown, NavButton, Avatar } from './styles'

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

            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default AccountDropdown
