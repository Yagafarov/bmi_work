import { Box, Button, Container, Grid, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import RotateLeft from '@mui/icons-material/RotateLeft';
const Notfound = () => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);


  return (
    <Box style={{ minHeight: '40vh', marginTop: '70px' }} overflow="hidden" mb={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} display={'flex'} alignItems={'center'} >
      <Container maxWidth="xl" display={'flex'} alignItems={'center'}>
        <Box  display='flex' alignItems={'center'} justifyContent={'center'} >
          <Box position={'relative'} >
            <img width={'90%'} src="https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" zIndex={1} />
            <Box position={'absolute'} zIndex={2} bottom={0} left={'0%'} right={'0%'} textAlign={'center'} >
            <ThemeProvider theme={theme}  >
              <Typography variant='h3' fontWeight={'bold'} mb={3}>
                Joriy sahifa topilmadi.
              </Typography>
              <Button variant='contained' style={{ background: 'var(--green)' }} startIcon={<RotateLeft/>} >Qayta yuklash</Button>
            </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Notfound