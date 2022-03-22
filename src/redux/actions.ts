import { GET_ITEMS, GET_COMPANIES, SET_ORDER, SET_SELECTED_COMPANIES, SET_SELECTED_TAGS, SET_TAG_OPTIONS, SET_ITEM_TYPE, SET_PAGE_NUMBER, ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_LOADING } from "./actionTypes";
import { Item } from "./types";

export function getItems(url: string) {
  return { type: GET_ITEMS, payload: url }
}

export function getCompanies(url: string) {
  return { type: GET_COMPANIES, payload: url }
}

export function setOrder(value: string) {
  return { type: SET_ORDER, payload: value }
}

export function setTagOptions(value: string[]) {
  return { type: SET_TAG_OPTIONS, payload: value }
}

export function setSelectedCompanies(value: string | string[]) {
  return { type: SET_SELECTED_COMPANIES, payload: value }
}

export function setSelectedTags(value: string | string[]) {
  return { type: SET_SELECTED_TAGS, payload: value }
}

export function setItemType(value: string) {
  return { type: SET_ITEM_TYPE, payload: value }
}

export function setPageNumber(value: number) {
  return { type: SET_PAGE_NUMBER, payload: value }
}

export function addToBasket(item: Item) {
  return { type: ADD_TO_BASKET, payload: item }
}

export function removeFromBasket(item: Item) {
  return { type: REMOVE_FROM_BASKET, payload: item }
}

export function setLoading(value: boolean) {
  return { type: SET_LOADING, payload: value }
}