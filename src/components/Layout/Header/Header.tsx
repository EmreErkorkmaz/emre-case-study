import { createUseStyles } from "react-jss"
import { colors } from "../../../helpers/constants"
import BasketSummary from "./BasketSummary/BasketSummary";

const useStyles = createUseStyles({
  topNav: {
    position: "fixed",
    display: "flex",
    width: "100vw",
    top: 0,
    left:0,
    justifyContent: "space-between",
    backgroundColor: colors.primaryColor,
    height: 76.64,
    padding: "0 104px",
    boxSizing: "border-box",
    zIndex: 999,
    "& > img": {
      height: 'auto',
      width: 'auto',
      paddingTop: 17,
      paddingBottom: 19.32,
    }
  },
  "@media screen and (max-width: 900px)": {
    topNav: {
      padding: 0,
      "& > img": {
        paddingLeft: 72
      }
    }
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <nav className={classes.topNav}>
      <div>&nbsp;</div>
      <img src={require('../../../assets/logo/Screenshot_1.jpg')} alt="Market"></img>
      <BasketSummary />
    </nav>
  )
}

export default Header
