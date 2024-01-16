import { ReactComponent as CameraFilledIcon } from 'assets/icons/tabar/camera-filled.svg'
import { ReactComponent as CameraIcon } from 'assets/icons/tabar/camera.svg'
import { ReactComponent as DashboardFilledIcon } from 'assets/icons/tabar/dashboard-filled.svg'
import { ReactComponent as DashboardIcon } from 'assets/icons/tabar/dashboard.svg'
import { ReactComponent as FileFilledIcon } from 'assets/icons/tabar/file-filled.svg'
import { ReactComponent as FileIcon } from 'assets/icons/tabar/file.svg'
import { ReactComponent as ProfileFilledIcon } from 'assets/icons/tabar/profile-filled.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/tabar/profile.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Item from './Item'

const tabs = [
  { name: 'home', url: '/', icon: <DashboardIcon />, iconFilled: <DashboardFilledIcon /> },
  { name: 'camera', url: '/camera', icon: <CameraIcon />, iconFilled: <CameraFilledIcon /> },
  { name: 'file', url: '/file', icon: <FileIcon />, iconFilled: <FileFilledIcon /> },
  { name: 'me', url: '/me', icon: <ProfileIcon />, iconFilled: <ProfileFilledIcon /> }
]

const TabBar = () => {
  // const [activeTab, setActiveTab] = useState('Home')
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const handleActive = (url: string) => {
    navigate(url)
  }

  return (
    <Wrap>
      <ul>
        {tabs.map(tab => (
          <Item
            key={tab.name}
            tab={tab}
            handleActive={handleActive}
            activeTab={pathname}
            color={'#5628ee'}
          />
        ))}
      </ul>
    </Wrap>
  )
}

const Wrap = styled.nav`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 270px;
  background: #fff;
  padding: 0 4px;
  box-shadow: 0 4px 12px -1px rgba(18, 22, 33, 0.08);
  position: relative;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    position: relative;
    z-index: 1;
  }
`

export default TabBar
