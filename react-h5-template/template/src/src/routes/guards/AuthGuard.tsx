import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// project imports
import { GuardProps } from 'types'

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
  const isLoggedIn = 'isLogin'
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', { replace: true })
    }
  }, [isLoggedIn, navigate])

  return children
}

export default AuthGuard
