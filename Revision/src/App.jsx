import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darktheme = () => setThemeMode('dark');
  const lighttheme = () => setThemeMode('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
      <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
        <ThemeBtn />
      </div>
    </ThemeProvider>
  )
}

export default App
