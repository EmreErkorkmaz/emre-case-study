import { ADD_TO_BASKET, GET_COMPANIES_SUCCESS, GET_ITEMS_SUCCESS, REMOVE_FROM_BASKET, SET_ITEM_TYPE, SET_LOADING, SET_ORDER, SET_PAGE_NUMBER, SET_SELECTED_COMPANIES, SET_SELECTED_TAGS, SET_TAG_OPTIONS } from "./actionTypes";
import { addToBasketHandler, getItemsSuccess, removeFromBasketHandler, setPages } from "./middlewares";
import { Store } from "./types";


export type Action = {
  type: string,
  payload?: any
}

const initialStore: Store = {
  items: [],
  paginatedItems: [],
  companies: [],
  filter: {
    sort: "pAsc",
    selectedCompanies: [],
    selectedTags: [],
    itemType: "mug"
  },
  tags: [],
  brands: [],
  pagination: {
    page: 1,
    pageCount: 1,
    totalCount: 16
  },
  basket: [],
  loading: false
};

const reducer = (state = initialStore, action: Action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      const { paginatedItems, totalCount, pageCount } = getItemsSuccess(action)
      return { ...state, items: [...action.payload], paginatedItems, pagination: { page: 1, totalCount, pageCount }, loading: false }
    case GET_COMPANIES_SUCCESS:
      return { ...state, companies: [...action.payload] }
    case SET_ORDER:
      return { ...state, filter: { ...state.filter, sort: action.payload } }
    case SET_SELECTED_COMPANIES:
      return { ...state, filter: { ...state.filter, selectedCompanies: action.payload } }
    case SET_TAG_OPTIONS:
      return { ...state, tags: action.payload }
    case SET_SELECTED_TAGS:
      return { ...state, filter: { ...state.filter, selectedTags: action.payload } }
    case SET_ITEM_TYPE:
      return { ...state, filter: { ...state.filter, itemType: action.payload } }
    case SET_PAGE_NUMBER:
      const { newPageItems, page } = setPages(state, action)
      return { ...state, paginatedItems: newPageItems, pagination: { ...state.pagination, page } }
    case ADD_TO_BASKET:
      return addToBasketHandler(state, action.payload)
    case REMOVE_FROM_BASKET:
      return removeFromBasketHandler(state, action.payload)
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default reducer;