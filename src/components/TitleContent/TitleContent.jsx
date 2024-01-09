import { Box, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'

const TitleContent = ({ title, content }) => {
  const titleWords = title.split(' ');
  const titleWithColorChange = (
    <>
      <span>{titleWords[0]}</span>{' '}
      <span style={{ color: 'var(--green)' }}>{titleWords[1]}</span>{' '}
      {titleWords.slice(2).join(' ')}
    </>
  );
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
  
    <Box textAlign={'center'} py={3}>
        <ThemeProvider theme={theme}>
        <Typography variant='h4' mb={2} fontWeight={'bold'} >{titleWithColorChange}</Typography>
        <Typography maxWidth={'sm'} style={{ margin: '0 auto' }} >{content}</Typography>
    </ThemeProvider>
      </Box>


  )
}

export default TitleContent