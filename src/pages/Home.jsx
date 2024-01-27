import { Box, Button, Container,Grid,ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import './pagesStyle.css'
import Course from './Course'





import Lottie from 'lottie-react'
import animat from '../assets/Animation - 1705563305039.json'
import TitleContent from '../components/TitleContent/TitleContent'


const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Box minHeight={{ xs: '100%', md: '100vh' }} pt={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }} mt={1} alignItems={'center'} display={'flex'}>
                <Container maxWidth="xl">
                    <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} display={'flex'} alignItems={'center'}  >
                            <Box textAlign={{ xs: 'center', md: 'left' }}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h3' fontWeight={'bold'} my={{ xs: 0, md: 7 }} mb={{ xs: 0, md: 5 }} >
                                        <span style={{ color: 'var(--green)' }}>Dasturlash</span>ga oid kasblarni o’rganamiz.
                                    </Typography>
                                </ThemeProvider>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        Siz veb-saytlar yaratish, mobil ilovalar ishlab chiqarish yoki dasturlash sohasida yetarli bilim va ko'nikmalarga ega bo'lishni istaysizmi? Bizning kurslarimiz dasturlash sohasidagi kasblarni o'rganish uchun juda foydali bo'ladi.
                                    </Typography>
                                </ThemeProvider>
                                <Grid maxWidth={{ md: '400px' }} my={3}>
                                    <Button variant='contained' style={{backgroundColor:'var(--green)'}} >Boshlash</Button>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'} textAlign={{ xs: 'center', md: 'right' }} alignItems={'end'} order={{ xs: 0, md: 1 }} >
                            <Lottie animationData={animat} className='home__img' width={'10%'} />
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
            {/* <Course list={8} /> */}
            <Box>
                <Container maxWidth="xl">
                <TitleContent  title="Biz bilan o'rganing" content="O’quv tizimidagi eng mashxur va sungi kurslar to’plamini aynan shu yerda ko’rishingiz mumkin." />
                </Container>
            </Box>

            <Box>
                <Container maxWidth="xl">
                    <Grid container textAlign={'center'} py={1} spacing={3}>
                        <Grid xs={12} md={6} item>
                            <Box p={3} className="wrap" >
                                <ThemeProvider theme={theme}>
                                    
                                    <Typography variant='overline'>Platformamizda mavjud kurslar soni</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <Box p={3} className="wrap" >
                                <ThemeProvider theme={theme}>
                                    <Typography variant='overline'>Uzoq yillik tajribaga ega ustozlarimiz</Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


        </>

    )
}

export default Home