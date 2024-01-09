import { Box, Button, Container, Divider, Grid, IconButton, InputBase, Paper, Rating, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import './pagesStyle.css'
import Course from './Course'

import MainImg from '../assets/images/main1.png'
import { BoltRounded, Search } from '@mui/icons-material'

const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white' }} minHeight={{ xs: '100vh', md: '84vh' }}  pt={{ xs: 7, sm: 8, md: 9, lg: 9, xl: 9 }} mt={1} alignItems={'center'} display={'flex'}>
                <Container maxWidth="xl">
                    <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} display={'flex'} alignItems={'center'}>
                            <Box textAlign={{ xs: 'center', md: 'left' }}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='overline'>
                                        Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega
                                    </Typography>
                                    <Typography variant='h3' fontWeight={'bold'} my={{ xs: 0, md: 7 }} mb={{ xs: 3, md: 5 }} >
                                        Yaxshi murabbiy bu yaxshi o‘qishdir .
                                    </Typography>
                                </ThemeProvider>
                                <Box mt={2}>
                                    <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }} >Boshlash</Button>
                                    <Button variant='text' style={{ color: 'white', marginLeft: '20px' }}>Bepul konsultatsiya oling</Button>
                                </Box>
                                <Grid maxWidth={{ md: '400px' }}>
                                    <Paper
                                        component="form"
                                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginTop: '1rem' }}
                                    >
                                        <InputBase
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
                                <Typography variant='h4' style={{color:'var(--green)'}} fontWeight={'bold'} >50+</Typography>
                                <Typography variant='overline'>Platformamizda mavjud kurslar soni</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <Typography variant='h4' style={{color:'var(--green)'}} fontWeight={'bold'} >10+</Typography>
                                <Typography variant='overline'>Uzoq yillik tajribaga ega ustozlarimiz</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <Typography variant='h4' style={{color:'var(--green)'}} fontWeight={'bold'} >120+</Typography>
                                <Typography variant='overline'>Platformamizda mavjud kitoblar soni</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={3} item>
                            <Box p={3} >
                                <Typography variant='h4' style={{color:'var(--green)'}} fontWeight={'bold'} >500+</Typography>
                                <Typography variant='overline'>Jami tahsil olayotgan o’quvchilarimiz</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Course />

        </>

    )
}

export default Home