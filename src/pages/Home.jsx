import { Search } from '@mui/icons-material'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import './pagesStyle.css'

import MainImg from '../assets/images/main1.png'
import TitleContent from '../components/TitleContent/TitleContent'
import TabFilter from '../components/TabFilter/TabFilter'


const Home = () => {

    return (
        <>
            <Box style={{ background: '#04016C', color: 'white', minHeight: '84vh' }}  overflow="hidden" pt={{ xs: 7, sm: 8, md: 9, lg: 9, xl: 9 }} mt={1} alignItems={'center'} display={'flex'} >
                <Container maxWidth="xl">
                   <Grid container sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6} >
                            
                        </Grid>
                        <Grid item xs={12} md={6} position={'relative'} className='item' textAlign={'center'} alignItems={'end'} >
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