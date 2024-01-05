import { Search } from '@mui/icons-material'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import MainImg from '../assets/images/main1.png'
import TitleContent from '../components/TitleContent/TitleContent'
import TabFilter from '../components/TabFilter/TabFilter'


const Home = () => {

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white', minHeight: '90vh' }} overflow="hidden"  >
                <Container maxWidth="xl">
                    {/* for start home */}
                    <Grid container spacing={2} mt={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} >
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} display="flex" flexWrap={'wrap'} alignItems="center" mb={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
                            <div>

                                <Typography variant={{ xs: 'caption', sm: 'overline' }} display="block" textAlign={{ xs: 'center', sm: 'left' }}>
                                    Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega
                                </Typography>
                                <Typography variant="h2" gutterBottom fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' }} fontWeight="bold" textAlign={{ xs: 'center', sm: 'left' }}>
                                    Yaxshi
                                    <span style={{ color: ' #4BE5CA', marginLeft: '20px' }}>
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                ' murabbiy ',
                                                5000, // wait 1s before replacing "Mice" with "Hamsters"
                                                ' tanlov ',
                                                5000,
                                            ]}
                                            wrapper="span"
                                            speed={1}
                                            style={{ fontSize: 'inherit', display: 'inline-block' }}
                                            repeat={Infinity}
                                        /><br />
                                    </span> bu yaxshi o‘qishdir .
                                </Typography>
                                <Box textAlign={{ xs: 'center', sm: 'left' }} mb="2rem">
                                    <Button variant='outlined' style={{ color: 'white', borderColor: 'white' }}>Kurslarni ko'rish</Button>
                                    <Button variant='text' style={{ marginLeft: '10px', color: 'white' }} xs={{ marginBottom: '10px' }}>Bepul konsultatsiya oling</Button>
                                </Box>
                                <div>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent={{ xs: 'center', md: 'flex-start' }} // Center on mobile, align left on desktop
                                        my="20px"
                                    >
                                        <TextField
                                            label="Qidirish"
                                            id="filled-hidden-label-small"
                                            focused
                                            variant="standard"
                                            size="small"
                                            InputProps={{
                                                style: { color: 'white' }, // Text color (primary color)
                                            }}
                                            InputLabelProps={{
                                                style: { color: 'white' }, // Label color (primary color)
                                            }}
                                            sx={{
                                                '& fieldset': {
                                                    borderColor: 'white', // Border color (primary color)
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white', // Hover border color (primary color)
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white', // Focused border color (primary color)
                                                },

                                            }}
                                        />
                                        <Button variant="contained" startIcon={<Search />} sx={{ marginLeft: '20px' }}>Qidirish</Button>
                                    </Box>

                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} textAlign="center" className='heme__wrapper' >
                            <img src={MainImg} alt="" style={{ width: '70%' }} className='home__img' />
                            <span className="home__img-bg"></span>
                        </Grid>
                    </Grid>
                    {/* for course */}
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