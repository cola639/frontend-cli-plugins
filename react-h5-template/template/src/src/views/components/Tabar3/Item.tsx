import { FC, ReactNode } from 'react'
import styled from 'styled-components'

// ==============================|| Item ||============================== //
interface IItem {
  tab: { name: string; icon: ReactNode; iconFilled: ReactNode; url: string }
  activeTab: string
  color: string
  handleActive: Function
}

const Item: FC<IItem> = ({ tab, activeTab, handleActive, color }) => {
  return (
    <Wrap
      key={tab.name}
      className={activeTab === tab.url ? 'active' : ''}
      color={color}
      onClick={() => handleActive(tab.url)}
    >
      <button className="link">
        <div>
          <span>{tab.icon}</span>
          <span>{tab.iconFilled}</span>
        </div>
        <strong>{tab.name}</strong>
      </button>
    </Wrap>
  )
}

const Wrap = styled.li`
  position: relative;
  flex-grow: 1;

  .link {
    cursor: pointer;
    display: table;
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    /* tabbar高度 */
    height: 50px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  .link div,
  .link span,
  .link svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .link div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -84%);
  }
  .link div span {
    width: 20px;
    bottom: 0;
    left: 0;
    transform-origin: 50% 50%;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    background: #fff;
    transform: scale(0.94);
    transform-origin: 0 100%;
    -webkit-animation: down 0.3s linear forwards;
    animation: down 0.3s linear forwards;
  }
  .link div span svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .link div span:first-child {
    height: 20px;
  }
  .link div span:first-child svg {
    transition: fill 0.3s ease, stroke 0.3s ease;
  }
  .link div span:last-child {
    height: 0;
    z-index: 5;
    transition: height 0.25s ease;
  }
  .link div span:last-child svg {
    fill: ${props => (props.color ? props.color : '#5628ee')};
    stroke: ${props => (props.color ? props.color : '#5628ee')};
  }
  .link strong {
    font-size: 10px;
    font-weight: 600;
    margin-top: 28px;
    color: #99a3ba;
    transition: all 0.3s ease;
  }

  &.active .link {
    z-index: 5;
  }

  &.active .link div span {
    animation: high 0.35s linear forwards 0.05s;
  }
  &.active .link div span:last-child {
    height: 20px;
    transition: height 0.3s ease 0.25s;
  }
  /* 文字 */
  &.active .link strong {
    color: ${props => (props.color ? props.color : '#5628ee')};
    font-weight: 700;
  }

  @keyframes high {
    0% {
      transform: rotate(0deg) scale(0.94);
    }
    33% {
      transform: rotate(8deg);
    }
    66% {
      transform: rotate(8deg) translateY(-1px);
    }
    100% {
      transform: rotate(0deg) scale(1) translateY(-1px);
    }
  }

  @keyframes down {
    0% {
      transform: rotate(0deg) scale(1) translateY(-1px);
    }
    33% {
      transform: rotate(8deg);
    }
    66% {
      transform: rotate(8deg) translateY(0);
    }
    100% {
      transform: rotate(0deg) scale(0.94) translateY(0);
    }
  }
`

export default Item
