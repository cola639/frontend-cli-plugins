import { lazy, ReactElement } from 'react'

// project imports
import Loadable from 'components/progress/Loadable'
import NavigationScroll from './guards/NavigationScroll'

// sample page routing
const HomePage = Loadable(lazy(() => import('views/home')))
const MePage = Loadable(lazy(() => import('views/me')))

type Route = {
  path: string
  title?: string
  element: ReactElement
}

const RoutesMap: Route[] = [
  {
    path: '/',
    title: '首页',
    element: (
      <NavigationScroll>
        <HomePage />
      </NavigationScroll>
    )
  },
  {
    path: '/me',
    title: '个人页',
    element: <MePage />
  }
]

export default RoutesMap
