import { FC, useEffect } from 'react'
import styled, { css } from 'styled-components'

// ui lib
import { Button, Dialog, Toast } from 'antd-mobile'

// components
import { ReactComponent as MeIcon } from 'assets/icons/me1.svg'

// hooks

// options

// ==============================|| TEMPLATE ||============================== //
interface ITemplate {
  item: {
    title: string
    description: string
  }
}

const Template: FC<ITemplate> = ({ item }) => {
  useEffect(() => {
    return () => {}
  }, [])

  const handleMsg = () =>
    Dialog.confirm({
      content: '是否提交申请',
      onConfirm: () => {
        Toast.show({
          content: 'Hello World',
          afterClose: () => {
            console.log('close')
          }
        })
      }
    })

  return (
    <CardWrap className="flex-center">
      <CardLeft>
        <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" />
      </CardLeft>
      <CardRight>
        <div className="card_title">{item.title}</div>
        <div className="card_description">{item.description}</div>
        <MeIcon className="icon-small" />
        <Button
          fill={'none'}
          className="card_btn"
          shape="default"
          color="primary"
          onClick={handleMsg}
        >
          Default
        </Button>
      </CardRight>
    </CardWrap>
  )
}

// Common CSS
const cardStyles = css`
  flex: 1;
`
// Page CSS
const CardWrap = styled.div`
  width: 80vw;
  height: 80vw;
  padding: 1.6vw;
  margin: 2.1333vw 0;
  background-color: #fff;
  box-shadow: 0 2.1333vw 3.2vw #ebedf0;
  border-radius: 1.3333vw;
`

const CardLeft = styled.div`
  ${cardStyles}

  &:hover {
  }

  & img {
    width: 100%;
    height: 100%;
  }
`

const CardRight = styled.div`
  ${cardStyles}
  .card_title {
    font-size: 5.3333vw;
  }
  .card_description {
    margin-top: 2.1333vw;
    font-size: 4.2667vw;
  }

  .card_btn {
    color: #fff;
    background-color: #ff976a;
    margin-top: 2.1333vw;
    margin-left: 2.1333vw;
    width: 21.3333vw;
    height: 10.1333vw;
    padding: 1.3333vw;
    font-size: 4.2667vw;
  }
`

export default Template
