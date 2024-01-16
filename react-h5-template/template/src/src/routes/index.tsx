import { useRoutes } from 'react-router-dom'

// routes
import RoutesMap from './RoutesMap'
import NotFound from './404'
import MainLaylout from 'views/layout'

const GuestRoutes = {
  path: '/',
  element: <MainLaylout />,
  children: RoutesMap
}

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  // return useRoutes([LoginRoutes, AuthenticationRoutes, MainRoutes])
  return useRoutes([GuestRoutes, NotFound])
}
