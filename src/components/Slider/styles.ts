import styled from 'styled-components'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

export const CustomSlider = styled(Slider)`
  margin: 24px auto;
  width: calc(100% - 64px);
  max-width: 1180px;
  z-index: 2;
`

export const Wrapper = styled(motion.div)`
  width: 100%;
  padding: 16px 0 24px 0;
  display: flex;
  z-index: 2;

  .slick-track {
    padding: 12px 0;
  }
`
