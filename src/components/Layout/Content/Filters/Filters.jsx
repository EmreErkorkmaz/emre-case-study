import { Grid } from '@mui/material'
import React from 'react'
import { useFilter } from '../../../../hooks/useFilter/useFilter'
import BrandFilter from './BrandFilter/BrandFilter'
import OrderFilter from './OrderFilter/OrderFilter'
import TagsFilter from './TagsFilter/TagsFilter'

const Filters = () => {
  useFilter()
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <OrderFilter />
      </Grid>
      <Grid item xs={12}>
        <BrandFilter />
      </Grid>
      <Grid item xs={12}>
        <TagsFilter />
      </Grid>
    </Grid>
  )
}

export default Filters
