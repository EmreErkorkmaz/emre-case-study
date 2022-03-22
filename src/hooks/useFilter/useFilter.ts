import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Config from "../../helpers/config"
import { getItems, setLoading } from "../../redux/actions"
import { Store } from "../../redux/types"

export const useFilter = () => {
  const filter = useSelector((state: Store) => state.filter)
  const dispatch = useDispatch();
  useEffect(() => {
    let baseUrl = `${Config.baseUrl}/items?itemType=${filter.itemType}&`

    switch (filter.sort) {
      case "pAsc":
        baseUrl += "_sort=price"
        break;
      case "pDesc":
        baseUrl += "_sort=price&_order=desc"
        break;
      case "nto":
        baseUrl += "_sort=added"
        break;
      case "otn":
        baseUrl += "_sort=added&_order=desc"
        break;
      default:
        break;
    }

    if (filter.selectedCompanies.length > 0) {
      baseUrl += `&manufacturer_like=${filter.selectedCompanies.join("|")}`
    }

    if (filter.selectedTags.length > 0) {
      baseUrl += `&tags_like=${filter.selectedTags.join("|")}`
    }
    dispatch(setLoading(true))
    dispatch(getItems(baseUrl))
  }, [filter, dispatch])
}