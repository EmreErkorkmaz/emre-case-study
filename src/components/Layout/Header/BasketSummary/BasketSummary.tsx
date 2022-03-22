import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { createUseStyles } from "react-jss"
import { useSelector } from "react-redux";
import { colors } from "../../../../helpers/constants"
import { Store } from "../../../../redux/types";

const useStyles = createUseStyles({
  basketSummary: {
    height: "100%",
    backgroundColor: colors.primaryColorDark,
    display: "flex",
    alignItems: "center",
    paddingRight: 24,
    paddingLeft: 24,
    "& > svg": {
      marginRight: 8
    }
  }
})

const BasketSummary = () => {
  const classes = useStyles();
  const basket = useSelector((state: Store) => state.basket)

  const total = useMemo(() => {
    let result = 0;
    basket.forEach(({price, count}) => result += (price * (count || 0)))
    return result.toFixed(2);
  }, [basket])

  return (
    <div className={classes.basketSummary}>
      <FontAwesomeIcon icon={faShoppingBag} color={colors.secondaryColor} size="lg"/>
      <Typography variant="body2" color={colors.secondaryColor}>₺{total}</Typography>
    </div>
  )
}

export default BasketSummary
