import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LogoMenu from '../assets/menu_familiar.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Perfil', 'Ajustes', 'Cerrar sesión'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={LogoMenu} height={100} alt='logo menu' /><br />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              > Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              > Hoy
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/calendario'
              > Calendario
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/recetas'
              > Recetas
              </NavLink>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
            > Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
            > Hoy
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/calendario'
            > Calendario
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/recetas'
            > Recetas
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              > Perfil
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              > Ajustes
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              > Cerrar sesión
              </NavLink>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;



/*export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <img src={LogoMenu} height={100} alt='logo usm' /><br />
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Calendario
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Recetas
      </NavLink>
    </nav>
  )
}

export default NavBar*/
