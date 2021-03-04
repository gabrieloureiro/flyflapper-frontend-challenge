import React from 'react'
import Head from 'next/head'

import { LayoutInterface } from './types'

import { CONTAINER_ANIMATION, DEFAULT_TRANSITION } from '@/animations'

import Topbar from '@/components/Topbar'
import Container from '@/components/Container'
import { ImWhatsapp } from 'react-icons/im'

import { FloatChat, Message, Title } from './styles'

const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  highlightTitle,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title} | FlyFlapper</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Topbar />
      <Container>
        <Title
          variants={CONTAINER_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={DEFAULT_TRANSITION}
        >
          {highlightTitle || description}
        </Title>
        {children}
      </Container>
      <FloatChat
        aria-label="whatsapp"
        target="_blank"
        rel="noopener noreferrer external"
        href="https://api.whatsapp.com/send?phone=5585999134041"
      >
        <Message>
          Hello, my name is <strong>Gabriel Loureiro</strong>. Did you enjoy my
          job? Click here or in the button below and talk to me!
        </Message>
        <ImWhatsapp size={24} color="#FFF" />
      </FloatChat>
    </>
  )
}

export default Layout
