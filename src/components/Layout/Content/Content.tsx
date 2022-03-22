import { Grid } from "@mui/material";
import { createUseStyles } from "react-jss"
import Basket from "./Basket/Basket";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";

const useStyles = createUseStyles({
  content: {
    paddingTop: 115,
    paddingRight: 104,
    paddingLeft: 104,
    height: "100%",
    boxSizing: "border-box"
  },
  "@media screen and (max-width: 900px)": {
    content: {
      paddingRight: 20,
      paddingLeft: 20,
    }
  }
})

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.content} columnSpacing={2}>
      <Grid item xs={12} lg={3}>
        <Filters />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Products />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Basket />
      </Grid>
    </Grid>
  )
}

export default Content
