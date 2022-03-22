import { CheckCircleOutline } from "@mui/icons-material"
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "../../../../../helpers/constants"
import { setOrder } from "../../../../../redux/actions"
import { Store } from "../../../../../redux/types"
import FilterCard from "../../../../ui/Cards/FilterCard/FilterCard"

const OrderFilter = () => {
  const order = useSelector((state: Store) => state.filter.sort)
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOrder(event.target.value))
  }
  return (
      <FilterCard label="Sorting">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={order}
            onChange={handleChange}
          >
            <FormControlLabel value="pAsc" control={<Radio sx={{color: colors.lightGray}} checkedIcon={<CheckCircleOutline />}/>} label="Price low to high" />
            <FormControlLabel value="pDesc" control={<Radio sx={{color: colors.lightGray}} checkedIcon={<CheckCircleOutline />}/>} label="Price high to low" />
            <FormControlLabel value="nto" control={<Radio sx={{color: colors.lightGray}} checkedIcon={<CheckCircleOutline />}/>} label="New to old" />
            <FormControlLabel value="otn" control={<Radio sx={{color: colors.lightGray}} checkedIcon={<CheckCircleOutline />}/>} label="Old to new" />
          </RadioGroup>
        </FormControl>
      </FilterCard>
  )
}

export default OrderFilter