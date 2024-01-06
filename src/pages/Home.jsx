import { Search } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './pagesStyle.css'

import MainImg from '../assets/images/main1.png'
import TitleContent from '../components/TitleContent/TitleContent'
import TabFilter from '../components/TabFilter/TabFilter'


const Home = () => {

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white'}} minHeight={{xs:'100vh',md:'84vh'}}  overflow="hidden" pt={{ xs: 7, sm: 8, md: 9, lg: 9, xl: 9 }} mt={1} alignItems={'center'} display={'flex'} >
                <Container maxWidth="xl">
                   <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6}  order={{xs:1,md:0}} display={'flex'} alignItems={'center'}>
                            <div>
                            <Typography variant='overline'>
                            Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega
                            </Typography>
                            <Typography variant='h3' fontWeight={'bold'} my={2} >
                            Yaxshi murabbiy bu yaxshi o‘qishdir .
                            </Typography>
                            <div>
                                <Button variant='outlined' style={{color:'white',borderColor:'white'}} >Boshlash</Button>
                                <Button variant='text' style={{color:'white', marginLeft:'20px'}}>Bepul konsultatsiya oling</Button>
                            </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'}  textAlign={{xs:'center',md:'right'}} alignItems={'end'} order={{xs:0,md:1}} >
                            <img src={MainImg} alt="" className='home__img' width={'70%'} />
                            <span className="home__img-bg"></span> 
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