import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, IconButton, InputBase, Paper, Rating, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import './pagesStyle.css'
import Course from './Course'

import MainImg from '../assets/images/main1.png'
import { BoltRounded, Search } from '@mui/icons-material'
import TitleContent from '../components/TitleContent/TitleContent'

import ads1 from '../assets/images/why/icon1.svg'
import ads2 from '../assets/images/why/icon2.svg'
import ads3 from '../assets/images/why/icon3.svg'

import cat0 from '../assets/images/category/Icon-0.png'
import cat1 from '../assets/images/category/Icon-1.png'
import cat2 from '../assets/images/category/Icon-2.png'
import cat3 from '../assets/images/category/Icon-3.png'
import cat4 from '../assets/images/category/Icon-4.png'
import cat5 from '../assets/images/category/Icon-5.png'

const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white' }} minHeight={{ xs: '100vh', md: '84vh' }} pt={{ xs: 7, sm: 8, md: 9, lg: 9, xl: 9 }} mt={1} alignItems={'center'} display={'flex'}>
                <Container maxWidth="xl">
                    <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} display={'flex'} alignItems={'center'}>
                            <Box textAlign={{ xs: 'center', md: 'left' }}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='overline'>
                                        Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega
                                    </Typography>
                                </ThemeProvider>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h3' fontWeight={'bold'} my={{ xs: 0, md: 7 }} mb={{ xs: 3, md: 5 }} >
                                        Yaxshi murabbiy bu yaxshi o‘qishdir .
                                    </Typography>
                                </ThemeProvider>
                                <Box mt={2}>
                                    <ThemeProvider theme={theme}>
                                        <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }} >Boshlash</Button>
                                        <Button variant='text' style={{ color: 'white', marginLeft: '20px' }}>Bepul konsultatsiya oling</Button>
                                    </ThemeProvider>
                                </Box>
                                <Grid maxWidth={{ md: '400px' }}>
                                    <Paper
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginTop: '1rem' }}
                                    >
                                        <InputBase
                                            size='small'
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Kurslarni qidirish"
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />

                                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                            <Search />
                                        </IconButton>
                                    </Paper>
                                </Grid>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'} textAlign={{ xs: 'center', md: 'right' }} alignItems={'end'} order={{ xs: 0, md: 1 }} >
                            <img src={MainImg} alt="" className='home__img' width={'70%'} />
                            <span className="home__img-bg"></span>
                            <Box position={'absolute'} className="home__card" display={{ xs: 'none', md: 'flex' }}>
                                <div className='icon__wrapper' >
                                    <BoltRounded className='icon__wrapper-icon' />
                                </div>
                                <Box className='home__card-content'  >
                                    <span className='line' ></span>
                                    <Typography variant='subtitle2' style={{ color: 'var(--green)' }} fontWeight={'bold'}>
                                        Ronald Richards
                                    </Typography>
                                    <Typography fontSize={'0.80rem'}>
                                        Murabbiy rolida siz savollar berasiz va o'zingizga ko'proq ishonasiz ma'lumotlarni taqdim etish uchun mutaxassis bo'lgan xodimlar.
                                    </Typography>
                                    <Box sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }} mt >
                                        <Box sx={{ mr: 2 }}>4.9</Box>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small" />
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box>
                <Container maxWidth="xl">
                    <Grid container textAlign={'center'} py={1}>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h4' style={{ color: 'var(--green)' }} fontWeight={'bold'} >50+</Typography>
                                    <Typography variant='overline'>Platformamizda mavjud kurslar soni</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h4' style={{ color: 'var(--green)' }} fontWeight={'bold'} >10+</Typography>
                                    <Typography variant='overline'>Uzoq yillik tajribaga ega ustozlarimiz</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h4' style={{ color: 'var(--green)' }} fontWeight={'bold'} >120+</Typography>
                                    <Typography variant='overline'>Platformamizda mavjud kitoblar soni</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h4' style={{ color: 'var(--green)' }} fontWeight={'bold'} >500+</Typography>
                                    <Typography variant='overline'>Jami tahsil olayotgan o’quvchilarimiz</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Course list={8} />

            <Box id="ads" py={7}>
                <Container maxWidth="xl">
                    <TitleContent title="Nega bizning kurslarimiz bilan o’rganamiz?" content="O’quvchilarimiz orasida juda ko’p uchraydigan savol. Bunga bir necha sabablarni keltirishimiz mumkin." />
                    <Grid container spacing={2} my={3}>
                        <Grid item xs={12} md={4} >
                            <ThemeProvider theme={theme}>
                                <img src={ads1} alt="" />
                                <Typography variant='h5' style={{ fontWeight: 'bold' }} my={3}>
                                    01. O’rganish
                                </Typography>
                                <Typography variant='body1'>
                                    Bizning platformada o’rganish eng zamovaviy uslubda amalga oshiriladi va eng malakali o’qituvchilar bilan
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} md={4} style={{ borderLeft: "1px dashed white", borderRight: "1px dashed white" }} >
                            <ThemeProvider theme={theme}>
                                <img src={ads2} alt="" />
                                <Typography variant='h5' style={{ fontWeight: 'bold' }} my={3}>
                                    02. Bitiruvchi
                                </Typography>
                                <Typography variant='body1'>
                                    Kurslarni birituvchi o’z sohasidagi eng zamonaviy bilim va ko’nikmalarga ega bo’ladi.
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <ThemeProvider theme={theme}>
                                <img src={ads3} alt="" />
                                <Typography variant='h5' style={{ fontWeight: 'bold' }} my={3}>
                                    03. Ish
                                </Typography>
                                <Typography variant='body1'>
                                    Bizning kurslarni tamomlagan o’quvchilarimiz o’zi uchun eng loyiq joylarda ishlashadi.
                                </Typography>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box id="category" py={7}>
                <Container maxWidth="xl">
                    <TitleContent title="Top Kategoriyalar" content="12 000+ noyob onlayn kurslar ro'yxati dizaynlari" />
                    <Grid container spacing={2} my={3}>
                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 330 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat0}
                                            alt="green iguana"
                                            style={{ background: '#DF385B' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Raqamli marketing
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                25 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat1}
                                            alt="green iguana"
                                            style={{ background: '#5AB48E' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Web Development
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                16 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat2}
                                            alt="green iguana"
                                            style={{ background: '#7F56D9' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                            San'at va Gumanitar fanlar
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                76 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat3}
                                            alt="green iguana"
                                            style={{ background: '#FAB437' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Personal Development
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                22 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat4}
                                            alt="green iguana"
                                            style={{ background: '#2AAA94' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                            IT and Software
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                110 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={2}  className='image_wr'>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <Box height={200} borderRadius={2} className="image_wr">
                                        <CardMedia
                                            component="img"
                                            image={cat5}
                                            alt="green iguana"
                                            style={{ background: '#2CD182' }}
                                            className='image'
                                        />
                                    </Box>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                            Grafik Dizayn
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                85 Kurslar
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>

    )
}

export default Home