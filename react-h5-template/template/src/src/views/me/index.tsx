import { FC, useEffect } from 'react'
import styled from 'styled-components'

// ui lib

// components
import Tabar from '../components/Tabar3/tabar'

// hooks

// options

// ==============================|| Me ||============================== //
interface IMe {}

const Me: FC<IMe> = () => {
  useEffect(() => {
    return () => {}
  }, [])

  const handleClick = () => {}

  return (
    <Warp className="flex-center" onClick={handleClick}>
      <Tabar />
    </Warp>
  )
}

const Warp = styled.div`
  cursor: pointer;
`

export default Me
