import { CircularProgress, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { Store } from "../../../../../redux/types"
import ProductionListItem from "./ProductionListItem/ProductionListItem"

const ProductList = () => {
  const { paginatedItems, loading } = useSelector((state: Store) => state)
  return (
    <Grid container padding="20px" columnSpacing={3} rowSpacing="20px">
      {
        paginatedItems.length > 0 && !loading ?
          paginatedItems.map((item, index) =>
            <Grid key={index} item xs={12} md={6} lg={3}>
              <ProductionListItem data={item} image={{ alt: item.name }} />
            </Grid>)
          :
          <Grid item xs={12} height={400} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {
              loading ?
                <CircularProgress />
                :
                <Typography variant="h4">No Item Found</Typography>
            }
          </Grid>}
    </Grid>
  )
}

export default ProductList