import { Card, Grid, Typography, Box } from '@mui/material';
import Stars from './stars';

const Slider = ({ Items = [] }) => {
  return (
    <>
      <marquee direction="left" width="100%">
        <Grid conatiner>
          <Box sx={{ display: 'flex', mt: 5 }}>
            <Card sx={{ backgroundColor: '#e7f4e4', padding: '10px 12px' }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '1.2' }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Card sx={{ backgroundColor: '#e7f4e4', padding: '10px 12px' }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '1.2' }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <Card sx={{ backgroundColor: '#e7f4e4', padding: '10px 12px' }}>
              <Box sx={{ py: 1 }}>
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
                <Stars filled />
              </Box>
              <Typography variant="h3">Dominique Wouts</Typography>
              <Typography variant="body1" sx={{ pt: 1 }}>
                Onze oude parketvloer is weer als nieuw! Heel erg blij mee.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '1.2' }}>
                Prettige parketteur, harde werker en echt een vakman.
              </Typography>
            </Card>
          </Box>
        </Grid>
      </marquee>
    </>
  );
};

export default Slider;
