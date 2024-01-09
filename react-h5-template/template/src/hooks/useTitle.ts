import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import routesMap from 'routes/RoutesMap'

const useTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const currentRoute = routesMap.find(route => route.path === location.pathname)
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title
    } else {
      document.title = '默认标题'
    }
  }, [location])
}

export default useTitle
