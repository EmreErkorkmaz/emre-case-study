import { Action } from "./reducer";
import { Item, Store } from "./types";

export const getItemsSuccess = (action: Action) => {
  const paginatedItems = action.payload.slice(0, 16);
  const totalCount = action.payload.length;
  const pageCount = Math.ceil(totalCount / 16);
  return {
    paginatedItems,
    totalCount,
    pageCount
  }
}

export const setPages = (state: Store, action: Action) => {
  const page = action.payload;
  const tCount = state.pagination.totalCount;
  const startIndex = (page - 1) * 16;
  const lastIndex = page * 16 < tCount ? page * 16 : tCount
  const newPageItems = state.items.slice(startIndex, lastIndex)
  return {
    newPageItems,
    page
  }
}

export const addToBasketHandler = (state: Store, item: Item) => {
  const basket = [...state.basket]
  const indexOfItem = basket.findIndex(basketItem => basketItem.name === item.name);
  if (indexOfItem !== -1) {
    const selectedItem = basket[indexOfItem];
    selectedItem.count = (selectedItem.count || 0) + 1;
  } else {
    basket.push({...item, count: 1});
  }
  return { ...state, basket }
}

export const removeFromBasketHandler = (state: Store, item: Item) => {
  let basket = [...state.basket]
  const selectedItem = basket.find(basketItem => basketItem.name === item.name);
  if(selectedItem?.count === 1){
    basket = basket.filter(item => item.name !== selectedItem.name)
  } else {
    selectedItem?.count && (selectedItem.count = (selectedItem!.count || 0) - 1);
  }
  return { ...state, basket }
}