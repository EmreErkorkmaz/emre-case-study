import { GET_COMPANIES, GET_COMPANIES_SUCCESS, GET_ITEMS, GET_ITEMS_SUCCESS } from "./actionTypes"
import { all, call, delay, put, takeLatest } from "redux-saga/effects"
import { Action } from './reducer';
import axios from "axios";
import { Company, Item } from "./types";
import { setLoading } from "./actions";

function* getItemsAsync(action: Action): Generator<any, void, any> {
  function getItems() {
    return axios.get<Item[]>(action.payload, {headers: {
      "Access-Control-Allow-Origin": "http://localhost:3010/"
    }})
  }
  try {
    yield delay(2000)
    const items = yield call(getItems)
    yield put({ type: GET_ITEMS_SUCCESS, payload: items.data })
  } catch (error) {
    yield put(setLoading(false))
  }
}

function* watchGetItems() {
  yield takeLatest(GET_ITEMS, getItemsAsync)
}

function* getCompaniesAsync(action: Action): Generator<any, void, any> {
  function getCompanies() {
    return axios.get<Company[]>(action.payload, {headers: {
      "Access-Control-Allow-Origin": "http://localhost:3010/"
    }})
  }
  try {
    const companies = yield call(getCompanies)
    yield put({ type: GET_COMPANIES_SUCCESS, payload: companies.data })
  } catch (error) {
    yield put(setLoading(false))
  }
}

function* watchGetCompanies() {
  yield takeLatest(GET_COMPANIES, getCompaniesAsync)
}

export default function* rootSaga() {
  yield all([
    watchGetItems(),
    watchGetCompanies()
  ])
}
