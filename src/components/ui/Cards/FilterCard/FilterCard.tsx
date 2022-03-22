import { Box, Typography, Card, SxProps } from '@mui/material'
import React from 'react'
import { colors } from '../../../../helpers/constants'

type Props = {
  label?: string,
  children?: React.ReactNode,
  sx?: SxProps
}

const FilterCard: React.FC<Props> = ({ label, children, sx }) => {
  return (
    <Box sx={sx}>
      <Typography variant="body1" mb="12px">{label}</Typography>
      <Card sx={{ backgroundColor: colors.card, borderRadius: "2px", padding: "24px", boxShadow: "0px 6px 24px rgba(93, 62, 188, 0.04)", height: "100%" }}>
        {children}
      </Card>
    </Box>
  )
}

export default FilterCard