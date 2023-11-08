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
    <AppBar elevation={0} sx={{backgroundColor: '#EAFFD6'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{paddingRight: '15px', paddingBottom: 0, marginRight: '20px'}}>
            <a href='/'>
              <img src={LogoMenu} height={100} alt='logo menu'  /><br />
            </a>
          </div>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
                style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 35px 15px 35px', borderRadius: '8px', textDecoration: 'none' })}
              > INICIO
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/calendario'
                style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 35px 15px 35px', borderRadius: '8px', textDecoration: 'none' })}
              > CALENDARIO
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/recetas'
                style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 35px 15px 35px', borderRadius: '8px', textDecoration: 'none' })}
              > RECETAS
              </NavLink>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontSize: '20px', justifyContent: 'space-around-3',  }}>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/'
              style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 25px 15px 25px', borderRadius: '8px', textDecoration: 'none' })}
            > INICIO
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/calendario'
              style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 25px 15px 25px', borderRadius: '8px', textDecoration: 'none' })}
            > CALENDARIO
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`} to='/recetas'
              style={({ isActive }) => ({color: 'black', backgroundColor: isActive ? '#D0FFA4' : '#EAFFD6', padding: '10px 25px 15px 25px', borderRadius: '8px', textDecoration: 'none' })}
            > RECETAS
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar sx={{ p: 0, backgroundColor: '#A8FF40'}}/>
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
