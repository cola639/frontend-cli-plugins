import { useEffect, useRef } from 'react'

import { debounce } from 'utils/index'

export function useWindowResize(callback: Function, delay: number) {
  const debouncedCallback = useRef(debounce(callback, delay, false)).current

  useEffect(() => {
    const handleResize = () => {
      debouncedCallback()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [debouncedCallback])
}
