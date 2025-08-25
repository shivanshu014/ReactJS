import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darktheme = () => {
    setThemeMode('dark');
  }

  const lighttheme = () => {
    setThemeMode('light');
  }

  useEffect(() => {
      document.querySelector('html').classList.remove('light', 'dark');
      document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
      <ThemeBtn />
    </ThemeProvider>
  )
}

export default App
