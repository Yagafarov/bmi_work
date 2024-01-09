import { Box, Container } from '@mui/material'
import React from 'react'
import TitleContent from '../components/TitleContent/TitleContent'

// for card image

import img1 from '../assets/images/cards/card1.png'
import img2 from '../assets/images/cards/card2.png'
import img3 from '../assets/images/cards/card3.png'
import img4 from '../assets/images/cards/card4.png'
import img5 from '../assets/images/cards/card5.png'
import img6 from '../assets/images/cards/card6.png'
import CardGroup from '../components/CardGroup/CardGroup'

const Course = () => {

  const cards = [
    {
      id:1,
      cardImage: img1,
      title:"Motion Grafikasi: Chiroyli tipografiya animatsiyasini yarating",
      price:33.99,
      reads:5957

    },
    {
      id:2,
      cardImage: img2,
      title:"Moliyaviy tahlilchini to'liq tayyorlash va investitsiya qilish",
      price:45.99,
      reads:330

    },
    {
      id:3,
      cardImage: img3,
      title:"Ta'lim dasturlari va PHP va JS tizim skripti",
      price:33.99,
      reads:1011

    },
    {
      id:4,
      cardImage: img4,
      title:"Marketing 2023: Instagram o'sishi bo'yicha to'liq qo'llanma",
      price:33.99,
      reads:45

    },
    {
      id:5,
      cardImage: img5,
      title:"Aqlli veb yaratish uchun JS bilan PHP bilimini oshiring",
      price:33.99,
      reads:590

    },
    {
      id:6,
      cardImage: img6,
      title:"Yangi boshlanuvchilar uchun 3D modellashtirish va dizaynni o'rganing",
      price:33.99,
      reads:50
    }
  ]

  return (
    <Box style={{ minHeight: '90vh' }} overflow="hidden" pt={{ xs: 7, sm: 3, md: 4, lg: 5, xl: 6 }} >
      <Container maxWidth="xl" style={{textAlign:'justify'}}>
      
      <TitleContent  title="Tanlangan Kurslar" content="O’quv tizimidagi eng mashxur va sungi kurslar to’plamini aynan shu yerda ko’rishingiz mumkin." />

      <CardGroup data={cards} />

      </Container>
    </Box>
  )
}
export default Course