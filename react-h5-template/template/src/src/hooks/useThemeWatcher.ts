import { useEffect, useRef } from 'react'
import { useSelector } from 'store'

export const useThemeWatcher = (): void => {
  const { themeType } = useSelector(state => state.theme)
  const root = useRef(document.querySelector(':root'))

  useEffect(() => {
    const html = root.current
    if (html) {
      html.setAttribute('data-theme', themeType)
    }
  }, [themeType])
}
