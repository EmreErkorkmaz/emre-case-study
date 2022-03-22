import { Paper, Stack, Typography } from '@mui/material'
import { createUseStyles } from 'react-jss'
import { colors } from '../../../helpers/constants'

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 40,
    "& > div": {
      backgroundColor: "transparent",
      boxShadow: "none",
      "& > p": {
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 13,
      }
    }
  }
})

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Stack
        direction="row"
        spacing={2}
        className={classes.container}
      >
        <Paper>
          <Typography variant='caption' sx={{color: colors.primaryColor}}>©2019 Market</Typography>
        </Paper>
        <Paper>
          <Typography variant='caption' sx={{color: colors.primaryColor}}>•</Typography>
        </Paper>
        <Paper>
          <Typography variant='caption' sx={{color: colors.primaryColor}}>Privacy Policy</Typography>
        </Paper>
      </Stack>
    </footer>
  )
}

export default Footer