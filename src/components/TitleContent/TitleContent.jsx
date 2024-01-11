import { Box, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'

const TitleContent = ({ title, content }) => {
  const titleWords = title.split(' ');
  const titleArr = titleWords.slice(0, titleWords.length - 1);
  const title1 = titleArr.join(' ');
  const titleWithColorChange = (
    <>
      <span>{title1}</span>{' '}
      <span style={{ color: 'var(--green)' }}>{titleWords[titleWords.length - 1]}</span>{' '}
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