import { useState } from 'react'
import { Button, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from './Logo'

export type PageKey = 'home' | 'menu'

type NavbarProps = {
  activePage: PageKey
  onNavigate: (page: PageKey) => void
}

const navItems: Array<{ label: string; page: PageKey }> = [
  { label: 'หน้าแรก', page: 'home' },
  { label: 'เมนู', page: 'menu' },
]

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (page: PageKey) => {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <button className="nav-brand" type="button" onClick={() => handleNavigate('home')}>
        <Logo />
        <span className="brand-copy thai">Thai Recipe</span>
      </button>

      <nav className="nav-links" aria-label="เมนูหลัก">
        {navItems.map((item) => (
          <Button
            key={item.page}
            className={activePage === item.page ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigate(item.page)}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <IconButton className="nav-menu-button" aria-label="เปิดเมนู" onClick={() => setMobileOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        className="mobile-drawer"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <div className="mobile-drawer-panel">
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <Logo />
              <span className="brand-copy thai">Thai Recipe</span>
            </div>
            <IconButton className="mobile-close-button" aria-label="ปิดเมนู" onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <List className="mobile-nav-list" disablePadding>
            {navItems.map((item) => (
              <ListItemButton
                key={item.page}
                className={activePage === item.page ? 'mobile-nav-item active' : 'mobile-nav-item'}
                onClick={() => handleNavigate(item.page)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          <Button className="mobile-nav-cta" variant="contained" onClick={() => handleNavigate('menu')}>
            ดูเมนูทั้งหมด
          </Button>
        </div>
      </Drawer>
    </header>
  )
}
