import { Box, Button, Container, Grid, Rating, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import './pagesStyle.css'

import MainImg from '../assets/images/main1.png'
import TitleContent from '../components/TitleContent/TitleContent'
import TabFilter from '../components/TabFilter/TabFilter'
import { BoltRounded } from '@mui/icons-material'


const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white' }} minHeight={{ xs: '100vh', md: '84vh' }} overflow="hidden" pt={{ xs: 7, sm: 8, md: 9, lg: 9, xl: 9 }} mt={1} alignItems={'center'} display={'flex'}>
                <Container maxWidth="xl">
                    <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} display={'flex'} alignItems={'center'}>
                            <Box textAlign={{ xs: 'center', md: 'left' }}>
                                <Typography variant='overline'>
                                    Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega
                                </Typography>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h3' fontWeight={'bold'} my={{ xs: 0, md: 3 }} mb={{ xs: 3, md: 5 }} >
                                        Yaxshi murabbiy bu yaxshi o‘qishdir .
                                    </Typography>
                                </ThemeProvider>
                                <Box>
                                    <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }} >Boshlash</Button>
                                    <Button variant='text' style={{ color: 'white', marginLeft: '20px' }}>Bepul konsultatsiya oling</Button>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'} textAlign={{ xs: 'center', md: 'right' }} alignItems={'end'} order={{ xs: 0, md: 1 }} >
                            <img src={MainImg} alt="" className='home__img' width={'70%'} />
                            <span className="home__img-bg"></span>
                            <Box position={'absolute'} className="home__card" display={{xs:'none',md:'flex'}}>
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
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small" />
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box>
                <Container maxWidth="xl">
                    <TitleContent title="Tanlangan Kurslar" content="O’quv tizimidagi eng mashxur va sungi kurslar to’plamini aynan shu yerda ko’rishingiz mumkin." />
                    <TabFilter />
                </Container>
            </Box>

        </>

    )
}

export default Home