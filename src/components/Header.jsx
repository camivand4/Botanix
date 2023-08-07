import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';

// Add a new class for links without underline
const linkStyle = {
  textDecoration: 'none',
};

// Add a new class for the active link with a white underline
const activeLinkStyle = {
  textDecoration: 'underline',
  textDecorationColor: 'white',
};

const pages = [
  { url: '/', title: 'home' },
  { url: '/login', title: 'login' },
  { url: '/register', title: 'register' },
  { url: '/test', title: 'test' },
  { url: '/readmore', title: 'read more' },
  { url: '/devices', title: 'devices' },
  { url: '/devices/1', title: 'device detail' },
  { url: '/devices/new', title: 'new device' },
  { url: '/auth', title: 'auth' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Get the current location from React Router
  const location = useLocation();

  return (
    <AppBar id="header">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box
            sx={{
              width: '6vw',
              maxHeight: '2rem',
              mr: '2rem',
              ml: 'none',
              pl: 'none',
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            <Link to="/" style={linkStyle}>
              <img id="pcLogo" src="./images/botanix.svg" alt="botanix logo" />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none'
              }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none'
                }
              }}
            >
              {pages.map((page) => (
                <Link key={page.url} to={page.url} style={linkStyle}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <Box
              sx={{
                maxWidth: '8rem',
                flexGrow: 1,
                mx: 'auto',
                display: {
                  xs: 'flex',
                  md: 'none'
                }
              }}
            >
              <Link to="/" style={linkStyle}>
                <img id="mobileLogo" src="/images/botanix.svg" alt="botanix logo" />
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.url}
                to={page.url}
                style={location.pathname === page.url ? activeLinkStyle : linkStyle}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block'
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/images/2.jpg" />
            </IconButton>
          </Box>
          logged in user here
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
