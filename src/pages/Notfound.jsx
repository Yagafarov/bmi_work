import { Box, Button, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'

const Notfound = () => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);


  return (
    <Box style={{ minHeight: '90vh', marginTop: '70px' }} overflow="hidden" mt={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} display={'flex'} alignItems={'center'} >
      <Container maxWidth="xl" display={'flex'} alignItems={'center'}>
        <Grid container display={'flex'} alignItems={'center'} justifyContent={'space-around'}  >
          <Grid item xs={12} md={4} height={'100%'} alignItems={'center'}>
            <img src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" width={'100%'} alt="" style={{ maxWidth: '150%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={4} textAlign={{xs:'center',md:'left'}} >
            <ThemeProvider theme={theme}  >
              <Typography variant='h3' fontWeight={'bold'} mb={3}>
                Joriy sahifa topilmadi.
              </Typography>
              <Button variant='contained' style={{ background: 'var(--green)' }} >Qayta yuklash</Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Notfound