import styled from 'styled-components'

// project imports
import IntroductionCard from './IntroductionCard'

// ==============================|| SAMPLE PAGE ||============================== //

const list = [
  { title: '标题1', description: '描述1' },
  { title: '标题2', description: '描述2' },
  { title: '标题3', description: '描述3' },
  { title: '标题4', description: '描述4' },
  { title: '标题5', description: '描述5' },
  { title: '标题6', description: '描述6' }
]

const HomePage = () => {
  return (
    <Wrap className="flex-column">
      {list.map((item, index) => (
        <IntroductionCard item={item} key={index} />
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  background-color: #e39214;
  min-height: calc(100vh - 49px);
  width: 100%;
`

export default HomePage
