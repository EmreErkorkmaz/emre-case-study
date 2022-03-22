import Content from "./Content/Content"
import Header from "./Header/Header"
import { Container, Grid } from '@mui/material'
import { colors } from "../../helpers/constants"
import Footer from "./Footer/Footer"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Container sx={{ backgroundColor: colors.layoutBackground, height: "100vh", overflowY: "auto" }} maxWidth={false} disableGutters={true} >
      <Header />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Content />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout
