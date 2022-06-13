import classNames from 'classnames'
import { useEffect } from 'react'
import styles from './Homepage.module.css'

export function GradientBackground({ variant, className }: any) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  )

  return <div className={classes} />
}

export default function HomePage({ children }: any) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark'
    const lightMode = localStorage.getItem('theme') === 'light'

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else if (lightMode) {
      document.documentElement.classList.remove('dark')
    }
    return
  }

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  useEffect(() => {
    setAppTheme()
  }, [])

  useEffect(() => {
    handleSystemThemeChange()
  }, [])

  return (
    <div className="relative overflow-y-hidden overflow-hidden">
      <div className="   ">
        {children}
      </div>
    </div>
  )
}
