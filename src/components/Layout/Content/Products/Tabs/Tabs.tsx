import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { colors } from '../../../../../helpers/constants';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { setItemType } from '../../../../../redux/actions';

const useStyles = createUseStyles({
  tabs: { display: "flex", flexDirection: "column", alignItems: "baseline", marginTop: 16, marginBottom: 16 }
})


const Tabs = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <TabsUnstyled className={classes.tabs} defaultValue={0}>
      <TabsList>
        <Tab onClick={() => dispatch(setItemType("mug"))}>Mug</Tab>
        <Tab onClick={() => dispatch(setItemType("shirt"))}>Shirt</Tab>
      </TabsList>
    </TabsUnstyled>
  );
}

export default Tabs;


const Tab = styled(TabUnstyled)`
  font-family: Open Sans, sans-serif;
  color: ${colors.primaryColor};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  background-color: ${colors.white100};
  padding: 6px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 2px;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${colors.white100};
    background-color: ${colors.primaryColor};
  }

  &:focus {
    color: ${colors.white100};
    border-radius: 3px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${colors.primaryColor};
    color: ${colors.white100};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;