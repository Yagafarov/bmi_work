import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import TitleContent from '../components/TitleContent/TitleContent';
import cardData from '../assets/card_data.json'; // Renamed 'card' to 'cardData'
import CardGroup from '../components/CardGroup/CardGroup';

const Course = () => {
  // State to hold the randomly selected cards
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    // Select 20 random items when the component mounts
    const selectedCards = selectRandomCards(cardData, 7);
    setRandomCards(selectedCards);
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Function to select random cards
  const selectRandomCards = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Box style={{ minHeight: '90vh' }} overflow="hidden" pt={{ xs: 7, sm: 3, md: 4, lg: 5, xl: 6 }}>
      <Container maxWidth="xl" style={{ textAlign: 'justify' }}>
        <TitleContent title="Tanlangan Kurslar" content="O’quv tizimidagi eng mashxur va sungi kurslar to’plamini aynan shu yerda ko’rishingiz mumkin." />
        <CardGroup data={randomCards} />
      </Container>
    </Box>
  );
};

export default Course;
