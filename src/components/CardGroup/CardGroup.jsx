
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField, ThemeProvider, Tooltip, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React, { useState } from 'react'
import { CardMembership, Group } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CardGroup.css'





const CardGroup = ({ data, list }) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  if (list != 0) {
    data = data.slice(0, list)
  }
  const [search, setSearch] = useState('');


  return (
    <Container maxWidth='xl' >
      <Grid container alignItems={'center'} justifyContent={'center'} pb={3} spacing={2} className='filter__buttons'>
        <Grid item >
          <Button
            variant={search === '' ? 'contained' : 'outlined'} 
            onClick={(e) => setSearch('')}
          >
            Hammasi
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={search === 'pa' ? 'contained' : 'outlined'}
            onClick={(e) => setSearch('pa')}
          >
            Ommabop kurslar
          </Button>
        </Grid>
        <Grid item>
        <Button
            variant={search === 'system' ? 'contained' : 'outlined'}
            onClick={(e) => setSearch('system')}
          >
            Frontend
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={search === 'computer' ? 'contained' : 'outlined'}
            onClick={(e) => setSearch('computer')}
          >
            Bepul kurslar
          </Button>
        </Grid>
        <Grid item>
        <Button
            variant={search === 'paralegal' ? 'contained' : 'outlined'}
            onClick={(e) => setSearch('paralegal')}
          >
            Sun'iy intellekt
          </Button>
        </Grid>
        <Grid item>
          <TextField id="outlined-search" label="Qidirish" type="search" onChange={(e) => setSearch(e.target.value)} size='small' />
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, lg: 12, md: 12 }} mb={3} justifyContent={'center'} textAlign={'center'} >

        {
          data.filter((item) => {
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
          }).map((card) => {
            return (
              <Grid key={card.id} item xs={4} sm={4} md={4} lg={3}  >
                <Card sx={{ maxWidth: 500 }} key={card.id} elevation={1}>
                  <CardActionArea>

                    <CardMedia
                      sx={{ height: 220 }}
                      image={card.cardImage}
                      title="green iguana"
                    />
                    <CardContent>
                      <Grid container justifyContent={'space-between'}>
                        <Grid item >
                          <Typography variant='body2' display={'flex'} alignItems={'center'}>
                            <Group style={{ color: 'var(--dark)', marginRight: '10px' }} /> {card.reads} ta o'quvchi
                          </Typography>
                        </Grid>
                        <Grid item >
                          <Typography variant='body2' >
                            {
                              card.sertificate ? <Tooltip title="Sertifikat mavjud" arrow><CardMembership style={{ color: 'var(--green)' }} /></Tooltip> : ""
                            }
                          </Typography>
                        </Grid>
                      </Grid>
                      <ThemeProvider theme={theme}>
                        <Typography variant="body1" fontWeight={'bold'} component="div" my={2} style={{ textAlign: 'left', color: 'var(--dark)' }}>
                          {card.title}
                        </Typography>
                      </ThemeProvider>
                      <Box textAlign={'left'}>
                        {
                          card.isfree ? <Typography variant='button' style={{ color: 'var(--green)', fontWeight: 'bold' }}> <span style={{ color: 'var(--dark-light)', marginRight: '10px', textDecoration: 'line-through' }}>{card.price}</span> Free</Typography> : <Typography variant='button'>{card.price}</Typography>
                        }
                      </Box>
                    </CardContent>

                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <Box textAlign={'center'} py={5}>
        <Link to={'/course#course'}>
          <Button style={{ color: 'var(--green)' }}>Boshqa kurslar</Button>
        </Link>
      </Box>
    </Container>
  )
}
export default CardGroup