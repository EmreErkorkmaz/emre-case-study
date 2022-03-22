export type Item = {
  tags: string[],
  price: number,
  name: string,
  description: string,
  slug: string,
  added: number,
  manufacturer: string,
  itemType: "mug" | "shirt",
  count?: number
}

export type Company = {
  slug: string,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  contact: string,
  account: number,
}

export type Store = {
  items: Item[],
  paginatedItems: Item[],
  companies: Company[],
  filter: {
    sort: "pAsc" | "pDesc" | "nto" | "otn",
    selectedCompanies: string[],
    selectedTags: string[],
    itemType: "mug" | "shirt"
  },
  tags: string[],
  brands: string[],
  pagination: {
    page: number,
    pageCount: number,
    totalCount: number
  },
  basket: Item[],
  loading: boolean
}