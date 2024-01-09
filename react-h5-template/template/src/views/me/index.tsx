import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

// ui lib

// components
import Tabar from '../components/Tabar3/tabar'

// hooks

// options

// ==============================|| Me ||============================== //
interface IMe {}

const Me: FC<IMe> = () => {
  const [name, setName] = useState<string>('Me')

  useEffect(() => {
    return () => {}
  }, [])

  const handleClick = () => {
    setName('Me2')
  }

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
