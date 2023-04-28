import Slider from '@/components/Common/slider';
import Layout from '@/components/Layout/layout';
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import '@heroicons/react';
import GreenBox from '@/public/images/greenbox.webp';
import Img2 from '@/public/images/img2.jpeg';
import ImgCall from '@/public/images/imgcall.webp';
import Olien from '@/public/images/olien.webp';
import Image from 'next/image';
import { FcExpand } from 'react-icons/fc';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const AccordianTitle = [
    {
      title: 'Meest gesteld',
    },
    {
      title: 'Vloeren schuren',
    },
    {
      title: 'Behandelingen',
    },
    {
      title: 'Kosten',
    },
    {
      title: 'Onze werkwijze en service',
    },
    {
      title: 'Pvc vloeren',
    },
  ];
  return (
    <Box>
      <Grid container spacing={8}>
        <Grid item md={12} lg={6} xs={12}>
          <Box
            style={{ padding: '80px 0' }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { md: 'center', lg: 'flex-end' },
            }}
          >
            <Typography variant="h2" sx={{ py: 2 }}>
              Green Team
            </Typography>
            <Typography variant="h3" sx={{ pb: 2 }}>
              De nieuwe manier van vloeren
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { lg: 'right', md: 'center' }, pb: 3, pl: 2 }}
            >
              Wij hebben een grote passie voor vloeren in combinatie met
              duurzaamheid. Van origine zijn wij houtbewerkers en dit heeft zich
              uiteindelijk doorvertaald in de renovatie van vloeren. Het leveren
              van kwaliteit, enthousiasme voor ons vak en bovenal het
              overtreffen van verwachtingen is wat de cultuur en visie van Green
              Team het beste omschrijf
            </Typography>
            <Button variant="contained">Meer over Green Team</Button>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xs={12}>
          <Box sx={{ marginBottom: 5 }}>
            <Box style={{ padding: '80px 0' }}>
              <Box sx={{ position: 'relative' }}>
                <Image
                  src={GreenBox}
                  width="350"
                  height="300"
                  style={{
                    borderRadius: '20px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '45%',
                  right: 140,
                  backgroundColor: '#E7EBF0',
                  width: '450px',
                  height: 330,
                  borderRadius: '20px',
                }}
              >
                <Box sx={{ py: 4, px: 5 }}>
                  <Typography variant="h3" sx={{ pb: 2 }}>
                    Bereken hier de beste prijs
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '30px',
                      pb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="h4">Aantal m²</Typography>
                      <TextField placeholder="Vul het aantal m² in" />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="h4">Behandeling</Typography>
                      <TextField placeholder="Kies de soort behandeling" />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant="h4">Totaal bedrag</Typography>
                      <TextField placeholder="0,00 Incl. BTW" />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained">Naar de volgende stap</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={12} lg={6} xs={12}>
          <Box style={{ padding: '80px 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={Img2} width={'100%'} height={'auto'} />
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              padding: '80px 0',
              alignItems: 'center',
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="span"
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    marginRight: '8px',
                  }}
                />
                <Typography variant="h3">Advies op maat</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="span"
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    marginRight: '8px',
                  }}
                />
                <Typography variant="h3">Kwaliteit en veiligheid</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="span"
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    marginRight: '8px',
                  }}
                />
                <Typography variant="h3">Groen is doen</Typography>
              </Box>
              <Typography variant="body2" sx={{ py: 2, lineHeight: 1.2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit, sed do eiusmod temporincididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam
                <br /> quis nostrud
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Slider />
      <Box sx={{ mb: 5 }}>
        <Slider />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              margin: '50px 40px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h3" sx={{ py: 2 }}>
              Veel gestelde vragen
            </Typography>
            {AccordianTitle.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  boxShadow: 0,
                  border: '1px solid #3E7844',
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              >
                <AccordionSummary
                  expandIcon={<FcExpand color="#3E7844" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              margin: '50px 0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                backgroundColor: '#E7EBF0',
                borderRadius: '20px',
                px: 3,
                py: 2,
              }}
            >
              Liever telefonisch contact?
            </Typography>
            <Image
              src={ImgCall}
              width="500"
              height="400"
              style={{
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h3"
              sx={{
                backgroundColor: '#3E7844',
                borderRadius: '20px',
                px: 3,
                py: 2,
                color: '#fff',
                position: 'relative',
                bottom: '400px',
                right: '50px',
              }}
            >
              Bel +31 854019345
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" sx={{ mx: 5, py: 2 }}>
            Onze diensten
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Oliën</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Schuren</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Lakken</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Hardwax</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Parket</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box  sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image src={Olien} width="330" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '300px',
                bottom: '75px',
              }}
            >
              <Typography variant="h3">Reinigen</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={3}>
          <Box>
            <Image src={Olien} width="310" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '270px',
                bottom: '75px',
                left: '15px',
              }}
            >
              <Typography variant="h3">Hardwax</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box>
            <Image src={Olien} width="310" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '270px',
                bottom: '75px',
                left: '15px',
              }}
            >
              <Typography variant="h3">Parket</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box>
            <Image src={Olien} width="310" height="auto" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                px: 3,
                py: 2,
                position: 'relative',
                border: '1px solid #3E7844',
                borderRadius: '20px',
                width: '270px',
                bottom: '75px',
                left: '15px',
              }}
            >
              <Typography variant="h3">Reinigen</Typography>
              <Typography>arrow</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid> */}
      <Grid container>
        <Grid item md={12} xs={12}>
          <Box
            sx={{
              backgroundImage: "url('../assets/pattern.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '60px 0',
                marginBottom: '20px',
              }}
            >
              <Image src={GreenBox} width="100%" height="500" />
            </Box>
          </Box>
          <Box
            sx={{
              width: '600px',
              height: 'auto',
              backgroundColor: '#E7EBF0',
              borderRadius: '20px',
              position: 'relative',
              top: '-500px',
              left: '35%',
              pb: 0,
              margin: 0,
            }}
          >
            <Box sx={{ py: 4, px: 5 }}>
              <Typography variant="h3" sx={{ pb: 2 }}>
                Bereken hier de beste prijs
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  pb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Aantal m²</Typography>
                  <TextField placeholder="Vul het aantal m² in" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Gewenste behandeling</Typography>
                  <TextField placeholder="" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">E-mailadres</Typography>
                  <TextField placeholder="email@email.ni" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Voor en achternaam</Typography>
                  <TextField placeholder="Piet Jan" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Straatnaam en huisnummer</Typography>
                  <TextField placeholder="Lottestraat 24" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Postcode</Typography>
                  <TextField placeholder="3368AK" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Woonplaats</Typography>
                  <TextField placeholder="Rotterdam" />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h4">Telefoonnummer</Typography>
                  <TextField placeholder="06-11677442" />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained">Vraag offerte aan</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
Home.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
