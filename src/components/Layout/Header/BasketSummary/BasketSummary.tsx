import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { createUseStyles } from "react-jss"
import { colors } from "../../../../helpers/constants"

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
  return (
    <div className={classes.basketSummary}>
      <FontAwesomeIcon icon={faShoppingBag} color={colors.secondaryColor} size="lg"/>
      <Typography variant="body2" color={colors.secondaryColor}>₺39,97</Typography>
    </div>
  )
}

export default BasketSummary
