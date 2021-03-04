import React from 'react'

import { useTheme } from '@/hooks/useTheme'
import { lighten, shade } from 'polished'

import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

import { StyledSkeleton } from './styles'

const CustomSkeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  circle,
  count,
  delay,
  duration,
  wrapper,
  style,
  className
}) => {
  const { theme } = useTheme()
  return (
    <StyledSkeleton
      color={theme.content}
      highlightColor={
        theme.title === 'dark'
          ? lighten(0.1, theme.body)
          : shade(0.1, theme.body)
      }
    >
      <Skeleton
        width={width}
        height={height}
        circle={circle}
        count={count}
        delay={delay}
        duration={duration}
        wrapper={wrapper}
        style={style}
        className={className}
      />
    </StyledSkeleton>
  )
}

export default CustomSkeleton
