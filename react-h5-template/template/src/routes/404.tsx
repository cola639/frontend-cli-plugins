import { lazy } from 'react'

// project imports
import Loadable from 'components/progress/Loadable'

const ErrorPage = Loadable(lazy(() => import('views/404')))

// ==============================|| MAIN ROUTING ||============================== //

const NotFound = {
  path: '*',
  element: <ErrorPage />
}

export default NotFound
