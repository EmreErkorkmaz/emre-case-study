import { SelectChangeEvent, FormControl, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, Typography } from '@mui/material';
import React from 'react'
import { colors } from '../../../../../helpers/constants';
import FilterCard from '../../../../ui/Cards/FilterCard/FilterCard'
import { useDispatch, useSelector } from "react-redux"
import { Store } from '../../../../../redux/types';
import { setSelectedCompanies } from '../../../../../redux/actions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
};


const BrandFilter = () => {
  const companies = useSelector((state: Store) => state.companies)
  const dispatch = useDispatch();
  const [companyNames, setCompanyNames] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<typeof companyNames>) => {
    const { target: { value } } = event;
    const data = typeof value === 'string' ? value.split(',') : value
    dispatch(setSelectedCompanies(data));
    setCompanyNames(data);
  };

  return (
    <FilterCard label="Brands" sx={open ? { height: "274px", marginBottom: "24px" } : null}>
      <FormControl sx={{ width: "100%" }}>
        <Select
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={companyNames}
          onChange={handleChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography variant='caption'>Select brand</Typography>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          open={open}
          placeholder="Select brand"
        >
          {companies.map((item) => (
            <MenuItem key={item.name} value={item.slug}>
              <Checkbox checked={companyNames.indexOf(item.slug) > -1} sx={{ color: colors.lightGray }} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FilterCard>
  )
}

export default BrandFilter