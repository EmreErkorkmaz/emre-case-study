import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCompanies, getItems, setLoading } from "../../redux/actions"
import Config from '../../helpers/config';

export const useInitialData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getItems(`${Config.baseUrl}/items?itemType=mug`))
    dispatch(getCompanies(`${Config.baseUrl}/companies`))
  }, [dispatch])
}