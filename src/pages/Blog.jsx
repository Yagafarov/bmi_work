import { Box, Container } from '@mui/material'
import React from 'react'
import TitleContent from '../components/TitleContent/TitleContent'
import CardGroup from '../components/CardGroup/CardGroup'
import cards from '../assets/card_data.json'

const Blog = () => {
  return (
    <Box style={{ minHeight: '90vh' }} overflow="hidden" pt={{ xs: 7, sm: 3, md: 4, lg: 5, xl: 6 }} >
      <Container maxWidth="xl" style={{textAlign:'justify'}}>
      <TitleContent  title="Tanlangan Bloglar" content="O’quv tizimidagi eng mashxur va sungi kurslar to’plamini aynan shu yerda ko’rishingiz mumkin." />
      <CardGroup data={cards} />
      </Container>
    </Box>
  )
}

export default Blog

