
import logo from '@/public/images/logo.svg';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Stars from '../Common/stars';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#3e7844',
        padding: '10px',
        // position: 'fixed',
        // bottom: '0',
        width: '100%',
      }}
    >
      <Grid container paddingX={'3%'} paddingY={'3%'}>
        <Grid item lg={4} >
          <Box sx={{ marginBottom: '2%' }}>
            <Image src={logo} alt='logo' style={{
              width: "50%",
              height: "auto"
            }}/>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>+31 854019345</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Rivium Boulevard 2</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>2909 LK, Capelle aan den Ijssel</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Home</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Over ons</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Diensten</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Zakelijk</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>FAQ</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Contact</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Schuren</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Oliën</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Lakken</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Hardwax</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Parket reparatie</Typography>
          </Box>
          <Box sx={{ marginBottom: '2%' }}>
            <Typography color={'#fff'} variant='h5' fontFamily={'Unbounded'}>Reinigen</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          color:'#fff',
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
          © 2023 Green Team
        </Typography>
        <Typography fontFamily={'Unbounded'} variant="body1">
          Privacyverklaring
        </Typography>
        <Typography fontFamily={'Unbounded'} variant="body1">
          Algemene voorwaarden Green Team
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
