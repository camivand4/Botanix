import React, { useEffect, useState } from 'react';
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
import { auth } from "../firebase.js";
import { onAuthStateChanged, signOut } from 'firebase/auth';

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
  { url: '/readmore', title: 'read more' },
  { url: '/devices', title: 'devices' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [ authUser, setAuthUser ] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });

    return () => {
        listen();
    }
}, []);

const userSignOut = () => {
  signOut(auth).then(() => {
      console.log("User signed out");
  }).catch(error => console.log(error));
}


  // Get the current location from React Router
  const location = useLocation();

console.log(authUser)

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
              // Check if the page is "devices" and user is authenticated
              (page.url === '/devices' && !authUser) ? null :
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
              (page.url === '/devices' && !authUser) ? null :

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
          {authUser ? (
  <Button
    variant="contained"
    onClick={userSignOut}
    sx={{
      backgroundColor: 'secondary.main',
      color: 'primary.main',
      '&:hover': { color: 'white' },
      marginRight: '1rem', // Use camelCase for style properties
    }}
  >
    Sign out
  </Button>
) : (
  <Link to="/login" style={linkStyle}>
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'primary.main',
        '&:hover': { color: 'white' },
        marginRight: '1rem', // Use camelCase for style properties
      }}
    >
      Login
    </Button>
  </Link>
)}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
