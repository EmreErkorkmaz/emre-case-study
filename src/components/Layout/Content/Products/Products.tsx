import { Grid, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../../helpers/constants'
import ProductList from './ProductList/ProductList'
import Tabs from './Tabs/Tabs'
import Pagination from './Pagination/Pagination'
import { useSelector } from 'react-redux'
import { Store } from '../../../../redux/types'

const Products = () => {
  const loading = useSelector((state: Store) => state.loading)
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant='h4'>Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <Tabs />
      </Grid>
      <Grid item xs={12} sx={!loading ? { backgroundColor: colors.card, boxShadow: "0px 4px 24px rgba(93, 62, 188, 0.04)", borderRadius: "2px" } : null}>
        <ProductList />
      </Grid>
      {!loading && <Grid item xs={12} marginBottom={4} marginTop={4}>
        <Pagination />
      </Grid>}
    </Grid>
  )
}

export default Products