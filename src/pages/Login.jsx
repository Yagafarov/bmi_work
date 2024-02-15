import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'



const Login = () => {
  return (
    <Box style={{ minHeight: '90vh', marginTop: '70px' }} overflow="hidden" mt={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} textAlign={'justify'} display={'flex'} alignItems={'center'}  >
      <Container maxWidth="xl" >
        <Box display="flex" alignItems="center" justifyContent="center" >
          <Grid container style={{background:'red'}} width={'100%'} maxWidth={{ xs: '100%', md: '60vw' }} >
            <Grid item xs={6} >
              <Typography>Tizimga kirish</Typography>
              <Typography>Tizimga kirish uchun ro'yxatdan o'tkan email va parolingizni kiriting. Hisobingiz yo'qmi? Ro'yxatdan o'ting</Typography>
            </Grid>
            <Grid item xs={6}>1212</Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Login