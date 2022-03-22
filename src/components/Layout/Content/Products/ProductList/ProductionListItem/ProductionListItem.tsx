import React from 'react'
import ProductCard, { ProductCardProp } from '../../../../../ui/Cards/ProductCard/ProductCard'

const ProductionListItem: React.FC<ProductCardProp> = ({data, image}) => {
  return (
    <ProductCard data={data} image={image}/>
  )
}

export default ProductionListItem