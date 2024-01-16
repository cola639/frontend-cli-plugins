import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'

// ui lib

// components

// hooks

// options

// ==============================|| index ||============================== //
interface Iindex {}

const Index: FC<Iindex> = () => {
  const [name, setName] = useState('index')

  useEffect(() => {
    return () => {}
  }, [])

  const handleClick = () => {
    setName('index2')
  }

  return <Wrap onClick={handleClick}>{name}</Wrap>
}

const Wrap = styled.div`
  width: 26.6667vw;
  height: 26.6667vw;
  background-color: pink;
`

export default Index
