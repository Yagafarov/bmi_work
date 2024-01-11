
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField, ThemeProvider, Tooltip, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React, { useState } from 'react'
import { CardMembership, Group } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CardGroup.css'

// import img1 from '../../assets/images/cards/card1.png'
// import img2 from '../../assets/images/cards/card2.png'
// import img3 from '../../assets/images/cards/card3.png'
// import img4 from '../../assets/images/cards/card4.png'
// import img5 from '../../assets/images/cards/card5.png'
// import img6 from '../../assets/images/cards/card6.png'
// // const cards = [
// //   {
// //     "id": 1,
// //     "cardImage": img1,
// //     "title": "Motion Grafikasi: Chiroyli tipografiya animatsiyasini yarating",
// //     "price": 33.99,
// //     "reads": 5957

// //   },
// //   {
// //     "id": 2,
// //     "cardImage": img2,
// //     "title": "Moliyaviy tahlilchini to'liq tayyorlash va investitsiya qilish",
// //     "price": 45.99,
// //     "reads": 330

// //   },
// //   {
// //     "id": 3,
// //     "cardImage": img3,
// //     "title": "Ta'lim dasturlari va PHP va JS tizim skripti",
// //     "price": 33.99,
// //     "reads": 1011

// //   },
// //   {
// //     "id": 4,
// //     "cardImage": img4,
// //     "title": "Marketing 2023: Instagram o'sishi bo'yicha to'liq qo'llanma",
// //     "price": 33.99,
// //     "reads": 45

// //   },
// //   {
// //     "id": 5,
// //     "cardImage": img5,
// //     "title": "Aqlli veb yaratish uchun JS bilan PHP bilimini oshiring",
// //     "price": 33.99,
// //     "reads": 590

// //   },
// //   {
// //     "id": 6,
// //     "cardImage": img6,
// //     "title": "Yangi boshlanuvchilar uchun 3D modellashtirish va dizaynni o'rganing",
// //     "price": 33.99,
// //     "reads": 50
// //   }
// // ]

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
            color="primary"
            onClick={(e) => setSearch('pa')}
          >
            Ommabop kurslar
          </Button>
        </Grid>
        <Grid item>
        <Button
            variant={search === 'system' ? 'contained' : 'outlined'}
            color="primary"
            onClick={(e) => setSearch('system')}
          >
            Frontend
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={search === 'computer' ? 'contained' : 'outlined'}
            color="primary"
            onClick={(e) => setSearch('computer')}
          >
            Bepul kurslar
          </Button>
        </Grid>
        <Grid item>
        <Button
            variant={search === 'paralegal' ? 'contained' : 'outlined'}
            color="primary"
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