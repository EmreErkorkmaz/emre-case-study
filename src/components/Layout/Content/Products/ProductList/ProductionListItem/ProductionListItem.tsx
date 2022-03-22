import React from 'react'
import ProductCard, { ProductCardProp } from '../../../../../ui/Cards/ProductCard/ProductCard'

// const data = {
//   name: "Test asdasdfasfa sdasdasdas",
//   price: 100
// }

// const image = {
//   alt: "Test"
// }

const ProductionListItem: React.FC<ProductCardProp> = ({data, image}) => {
  return (
    <ProductCard data={data} image={image}/>
  )
}

export default ProductionListItem