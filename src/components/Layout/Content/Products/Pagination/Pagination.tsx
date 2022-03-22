import React from 'react'
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Pagination as Paginate } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../../../redux/types';
import { createUseStyles } from 'react-jss'

import { colors } from '../../../../../helpers/constants';
import { setPageNumber } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  ul: {
    "& .MuiPaginationItem-root": {
      color: colors.primaryColor
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      color: colors.white100
    }
  }
})

const Pagination = () => {
  const { pageCount } = useSelector((state: Store) => state.pagination)
  const classes = useStyles()
  const dispatch = useDispatch();
  return (

    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Paginate
        count={pageCount}
        shape="rounded"
        classes={{ul: classes.ul}}
        color="primary"
        // boundaryCount={2}
        siblingCount={2}
        onChange={(_, page) => dispatch(setPageNumber(page))}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  )
}

export default Pagination