import { SelectChangeEvent, FormControl, Select, OutlinedInput, MenuItem, Checkbox, ListItemText, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../../../helpers/constants';
import { setTagOptions, setSelectedTags } from '../../../../../redux/actions';
import { Store } from '../../../../../redux/types';
import FilterCard from '../../../../ui/Cards/FilterCard/FilterCard'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
};

const TagsFilter = () => {
  const { items, tags, selectedTags } = useSelector((state: Store) => {
    return {
      items: state.items,
      tags: state.tags,
      selectedTags: state.filter.selectedTags
    }
  })
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (items.length > 0) {
      const allTags: string[] = []
      items.forEach(item => item.tags.forEach(tag => allTags.push(tag)))
      const uniqueTags: any = new Set(allTags)
      dispatch(setTagOptions(Array.from(uniqueTags)))
    }
  }, [items, dispatch])

  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const { target: { value } } = event;
    const data = typeof value === 'string' ? value.split(',') : value;
    dispatch(setSelectedTags(data))
  };

  return (
    <FilterCard label="Tags" sx={{ height: open ? "274px" : null, marginBottom: 2 }}>
      <FormControl sx={{ width: "100%" }}>
        <Select
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={selectedTags}
          onChange={handleChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography variant='caption'>Select tags</Typography>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          open={open}
        >
          {tags.length > 0 && tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={selectedTags.indexOf(tag) > -1} sx={{ color: colors.lightGray }} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FilterCard>
  )
}

export default TagsFilter