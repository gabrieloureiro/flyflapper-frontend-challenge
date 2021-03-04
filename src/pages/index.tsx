import React, { useEffect, useState } from 'react'

import Layout from '@/components/Layout'
import Slider from '@/components/Slider'
import api from '@/services/api'
import { ProductInterface } from '@/store/modules/cart/types'
import FlightCard from '@/components/FlightCard'
import { useToast } from '@/hooks/useToast'
import { welcomeInformation } from '@/utils/infoToastMessages'

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
      <Slider>
        {catalog.map((product: ProductInterface) => {
          return <FlightCard key={product.id} product={product} />
        })}
      </Slider>
    </Layout>
  )
}

export default Home
