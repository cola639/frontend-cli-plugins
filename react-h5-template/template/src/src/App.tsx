// routing
import Routes from 'routes'

import useTitle from 'hooks/useTitle'

// ==============================|| APP ||============================== //

const App = () => {
  useTitle()

  return (
    <>
      <Routes />
    </>
  )
}

export default App
