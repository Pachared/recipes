import { useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Navbar, type PageKey } from './components/Navbar'
import { homeRecipe, recipes } from './data/recipes'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { theme } from './theme'
import './App.css'

function App() {
  const getInitialPage = (): PageKey => (window.location.hash === '#menu' ? 'menu' : 'home')
  const [activePage, setActivePage] = useState<PageKey>(getInitialPage)
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0)
  const navigate = (page: PageKey) => {
    setActivePage(page)
    window.history.replaceState(null, '', `#${page}`)
  }

  useEffect(() => {
    const handleHashChange = () => setActivePage(getInitialPage())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="site-shell">
        <Navbar activePage={activePage} onNavigate={navigate} />
        {activePage === 'home' ? (
          <HomePage recipe={homeRecipe} onOpenMenu={() => navigate('menu')} />
        ) : (
          <MenuPage recipes={recipes} activeIndex={activeRecipeIndex} onChangeIndex={setActiveRecipeIndex} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
