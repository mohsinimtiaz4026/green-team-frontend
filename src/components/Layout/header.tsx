import logo from '@/public/images/logo.png';
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Stars from '../Common/stars';
import DrawerComp from './drawer';
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'white', position: 'relative' }}>
        <Box
          sx={{
            height: '40px',
            backgroundColor: '#3e7844',
            paddingX: 2,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography fontFamily={'Unbounded'} variant="body1">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            Trustpilot
            <Typography
              fontFamily={'Unbounded'}
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                display: 'inline-flex',
              }}
            >
              &nbsp;&nbsp;245+ Revieuws
            </Typography>
          </Typography>
          <Typography fontFamily={'Unbounded'} variant="body1">
            Klantenservice
          </Typography>
        </Box>
        <Toolbar
          sx={{
            paddingY: '1%',
            paddingX: '2%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image src={logo} height={80} alt="logo" />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <List sx={{ display: 'flex' }}>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  Home
                </ListItem>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  Over ons
                </ListItem>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  Diensten
                </ListItem>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  Zakelijk
                </ListItem>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  FAQ
                </ListItem>
                <ListItem
                  sx={{
                    width: 'auto',
                    color: 'black',
                    fontFamily: 'Unbounded',
                    fontSize: '18px',
                  }}
                >
                  Contact
                </ListItem>
              </List>
              {/* <Tabs
                sx={{ marginLeft: 'auto', color: '#000' }}  
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs> */}
              <Button
                sx={{
                  padding: '0.3% 1%',
                  background: '#3e7844',
                  borderRadius: '50px',
                  color: '#fff',
                }}
              >
                Offerte aanvragen
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
