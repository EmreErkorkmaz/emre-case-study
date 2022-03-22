import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { colors } from '../../../../../helpers/constants'
import { addToBasket, removeFromBasket } from '../../../../../redux/actions'
import { Item } from '../../../../../redux/types'

const useStyles = createUseStyles({
  container: {
    height: 70
  },
  counter: {
    backgroundColor: colors.primaryColor,
    color: colors.secondaryColor,
    width: 32,
    height: 32,
    display: "inline-block",
    verticalAlign: "middle",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    "&:first-child": {
      padding: 8,
      "& > p": {
        textAlign: "center"
      }
    }
  }
})

type Prop = {
  item: Item
}

const BasketItem: React.FC<Prop> = ({item}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid container className={classes.container} alignItems="center">
      <Grid item xs={7}>
        <Typography variant='subtitle2'>{item.name}</Typography>
        <Typography color={colors.primaryColor} fontWeight={600} fontStyle="normal" letterSpacing="0.16px">₺{item.price}</Typography>
      </Grid>
      <Grid item container xs={5} alignItems="center" justifyContent="space-around">
        <Grid item xs={4}>
          <IconButton color='primary' onClick={() => dispatch(addToBasket(item))}>
            <AddOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.counter}>
            <Typography variant='body2'>{item.count}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <IconButton color='primary' onClick={() => dispatch(removeFromBasket(item))}>
            <RemoveOutlined />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BasketItem