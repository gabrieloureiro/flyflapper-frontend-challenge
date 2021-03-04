/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { SliderProps } from './types'

import settings from './settings'

import { CARDS_ANIMATION, DEFAULT_TRANSITION } from '@/animations'

import Arrow from './Arrow'

import { CustomSlider, Wrapper } from './styles'

const Slider: React.FC<SliderProps> = ({
  arrowColor = '#009788',
  children
}) => {
  const sliderSettings = {
    ...settings,
    prevArrow: <Arrow left arrowColor={arrowColor} />,
    nextArrow: <Arrow arrowColor={arrowColor} />
  }

  return (
    <Wrapper
      variants={CARDS_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
      transition={DEFAULT_TRANSITION}
    >
      <CustomSlider {...sliderSettings} arrowColor={arrowColor}>
        {children}
      </CustomSlider>
    </Wrapper>
  )
}
export default Slider
