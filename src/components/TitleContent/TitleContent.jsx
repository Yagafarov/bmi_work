import { Box, Typography } from '@mui/material'
import React from 'react'

const TitleContent = ({title,content}) => {
  const titleWords = title.split(' ');
  const titleWithColorChange = (
    <>
      <span>{titleWords[0]}</span>{' '}
      <span style={{ color: 'var(--green)' }}>{titleWords[1]}</span>{' '}
      {titleWords.slice(2).join(' ')}
    </>
  );
  return (
    <Box textAlign={'center'}>
      <Typography variant='h5'my={2}  fontWeight={'bold'} >{titleWithColorChange}</Typography>
      <Typography maxWidth={'sm'} style={{margin:'0 auto'}} >{content}</Typography>
    </Box>
    
  )
}

export default TitleContent