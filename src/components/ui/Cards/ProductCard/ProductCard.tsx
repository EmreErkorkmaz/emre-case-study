import { Button,  CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../../../../helpers/constants'
import { addToBasket } from '../../../../redux/actions'
import { Item } from '../../../../redux/types'

export type ProductCardProp = {
  data: Item,
  image: {
    path?: string,
    alt?: string
  }
}

const ProductCard: React.FC<ProductCardProp> = ({ data, image: { path, alt } }) => {
  const { price, name } = data;
  const dispatch = useDispatch();
  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={12} sx={{ padding: "16px", backgroundColor: colors.white200, borderRadius: "12px", border: "1px solid", borderColor: colors.white300 }}>
        <CardActionArea sx={{ position: "relative", width: "100%", height: 0, paddingBottom: "100%", backgroundColor: colors.white100 }}>
          <CardMedia sx={{ marginTop: "15%" }} component="img" image={require('../../../../assets/images/stock.jpg')} alt={alt} />
        </CardActionArea>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'>₺{price}</Typography>
        <Box height="40px" overflow="hidden">
          <Typography variant="subtitle2" textOverflow="ellipsis">{name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          sx={{
            height: "22px",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "20px"
          }}
          onClick={() => dispatch(addToBasket(data))}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProductCard