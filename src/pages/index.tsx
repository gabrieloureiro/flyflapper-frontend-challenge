/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { memo, useEffect, useState } from 'react'

import { ProductInterface } from '@/store/modules/cart/types'

import { useToast } from '@/hooks/useToast'

import api from '@/services/api'
import { welcomeInformation } from '@/utils/infoToastMessages'

import Layout from '@/components/Layout'
import Slider from '@/components/Slider'
import FlightCard from '@/components/FlightCard'
import CustomSkeleton from '@/components/Skeleton'

const Home: React.FC = () => {
  const { addToast } = useToast()
  const [catalog, setCatalog] = useState<ProductInterface[]>(
    [] as ProductInterface[]
  )

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
    addToast(welcomeInformation)
  }, [])

  return (
    <Layout title="Flights" description="Select the best flight to you">
      {catalog.length !== 0 ? (
        <Slider>
          {catalog.map((product: ProductInterface) => {
            return <FlightCard key={product.id} product={product} />
          })}
        </Slider>
      ) : (
          <CustomSkeleton width="100%" height="530px" />
        )}
    </Layout>
  )
}

export default memo(Home)
