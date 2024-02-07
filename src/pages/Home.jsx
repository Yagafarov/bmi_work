import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import './pagesStyle.css'
import Course from './Course'

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import Lottie from 'lottie-react'
import animat from '../assets/Animation - 1705563305039.json'
import TitleContent from '../components/TitleContent/TitleContent'
import Carousel from '../components/Carousel/Carousel'

const Home = () => {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Box minHeight={{ xs: '100%', md: '100vh' }} pt={{ xs: 8, sm: 2, md: 2, lg: 2, xl: 2 }} mt={1} alignItems={'center'} display={'flex'}>
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
                                <Grid my={3}>
                                    <Button variant='contained' style={{ backgroundColor: 'var(--green)' }} >Boshlash</Button>
                                    <Button style={{ color: 'var(--green)', marginLeft: '2rem' }} > <PlayCircleIcon style={{ marginRight: '0.5rem' }} /> biz haqimizda </Button>
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
            <Box>
                <Container maxWidth="xl">
                    <TitleContent title="Biz bilan o'rganing" content="Bizing o'quv platforma orqali quyidagilarga ega bo'lishingiz mumkin." />

                    <Grid container spacing={3}>
                        <Grid xs={12} md={4} item>
                            <Box p={3} className="wrap" >
                                <Card className='wrap__card'>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography variant='h5' >
                                                O'qituvchilar
                                            </Typography>
                                            <Typography variant='body2' my={3} >
                                                Malakali o'qituvchilardan zamonaviy kasblarni o'rganish, o'z kasbining ustalaridan o'rganishingiz tarafdorimiz.
                                            </Typography>
                                            <Button variant='outlined' style={{ color: 'var(--green)', borderColor: 'var(--green)' }} >Batafsil</Button>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} item>
                            <Box p={3} className="wrap" >
                                <Card className='wrap__card wrapm'>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography variant='h5' >
                                                O'quvchilar
                                            </Typography>
                                            <Typography variant='body2' my={3} >
                                                Malakali o'qituvchilardan zamonaviy kasblarni o'rganish, o'z kasbining ustalaridan o'rganishingiz tarafdorimiz.
                                            </Typography>
                                            <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }} >Batafsil</Button>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} item>
                            <Box p={3} className="wrap" >
                                <Card className='wrap__card'>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography variant='h5' >
                                                O'quv platformasi
                                            </Typography>
                                            <Typography variant='body2' my={3} >
                                                Malakali o'qituvchilardan zamonaviy kasblarni o'rganish, o'z kasbining ustalaridan o'rganishingiz tarafdorimiz.
                                            </Typography>
                                            <Button variant='outlined' style={{ color: 'var(--green)', borderColor: 'var(--green)' }} >Batafsil</Button>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>

            <Course list={8} />
            <Box pb={6} >
                <Container maxWidth="xl">
                <TitleContent title="O'qituvchilarimiz fikrlari" content="O'zingizni qiziqtirgan umumiy savollarga quyidagi bo'limdan ma'lumotlar olishingiz mumkin." />
                <Carousel/>
                </Container>
            </Box>
            <Box pb={6} >
                <Container maxWidth="xl">
                    <TitleContent title="Ko'p beriladigan savollar" content="O'zingizni qiziqtirgan umumiy savollarga quyidagi bo'limdan ma'lumotlar olishingiz mumkin." />
                    <Accordion defaultExpanded>
                    <ThemeProvider theme={theme}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant='h6' > Bu qanday platforma?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bu platforma orqali it sohasida kasblarni o'rganishingiz mumkin.
                            </Typography>
                        </AccordionDetails>
                        </ThemeProvider>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Qancha kurs mavjud?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               Bu platformada hozirgi kunda 50 dan ziyod kurslar mavjud. Bu kurslar IT sohasidagi UI/UX, Dezayn, FrontEnd kabi bir necha sohalardan bilimga ega bo'lishingiz mumkin bo'ladi.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>


        </>

    )
}

export default Home