import { Box, Button, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import TitleContent from '../components/TitleContent/TitleContent'
import Lottie from 'lottie-react'
import animat2 from '../assets/li1.json'
const About = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Box style={{ minHeight: '90vh', marginTop: '70px' }} overflow="hidden" mt={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} className="b1">
      <Container maxWidth="xl">
        <TitleContent title={"Biz haqimizda"} content={"Biz haqimizda yanada ko'proq ma'lumotlarga ega bo'lish orqali nega bizni tanlashingiz kerak ekanligini bilib olasiz"} />
        <Box>
          <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
              <Lottie animationData={animat2} className='home__img' width={'10%'} />
            </Grid>
            <Grid item xs={12} md={6} display={'flex'} alignItems={'center'}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant='h4'>
                    Biz bilan IT sohasini o'rganish yanada oson
                  </Typography>
                  <Typography py={3}>
                    IT sohasida yangi bilimlarni egallash uchun avvalo sizda kerakli kunikmalar shakllangan bo'lishi lozim. Minimal kompyuter savodxonligi ham bo'lsa ziyon qilmaydi. Shunda siz IT dagi o'zingiz tanlagan sohangizni o'rganishingiz oson bo'ladi.
                  </Typography>
                  <Button variant='contained' style={{ backgroundColor: 'var(--green)' }} >Batafsil</Button>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>

        </Box>
        
      </Container>
    </Box>
  )
}

export default About