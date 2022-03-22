import { Divider, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useMemo } from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
import { colors } from '../../../../helpers/constants'
import { Store } from '../../../../redux/types'
import BasketItem from './BaksetItem/BasketItem'

const useStyle = createUseStyles({
  container: {
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 2,
    maxHeight: 600,
    overflowY: "auto",
    border: `8px solid ${colors.primaryColor}`,
    "& > *": {
      boxShadow: "none"
    },
  },
  total: {
    display: "flex",
    flexDirection: "row-reverse",
    "& > div": {
      padding: "0 24px",
      marginTop: 16,
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `2px solid ${colors.primaryColor}`,
      borderRadius: 2
    }
  }
})

const Basket = () => {
  const classes = useStyle();
  const basket = useSelector((state: Store) => state.basket)

  const total = useMemo(() => {
    let result = 0;
    basket.forEach(({price, count}) => result += (price * (count || 0)))
    return result.toFixed(2);
  }, [basket])

  return (
    <Box marginBottom={2}>
      <Stack className={classes.container} divider={<Divider variant='middle' sx={{ color: colors.gray100 }} />}>
        {basket.length > 0 ?
          basket.map(item =>
            <Paper key={item.name}>
              <BasketItem item={item} />
            </Paper>) :
          <Paper>
            <Box height={50} paddingTop={1}>
              <Typography variant='h4' textAlign="center">No Item</Typography>
            </Box>
          </Paper>
        }
        <Paper className={classes.total}>
          <Box>
            <Typography variant='body2' color={colors.primaryColor}>₺{total}</Typography>
          </Box>
        </Paper>
      </Stack>
    </Box>
  )
}

export default Basket