import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Grid, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

const teacherData = [
  {
    id: 0,
    title: "Backend",
    subtitle: "Ali Valiy",
    imageUrl: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png",
    content: "Men ko'p yillik sun'iy intellekt ustida izlanishlarimni siz bilan baham ko'rish uchun Ai nomli to'liq kursni tayyorladim."
  },
  {
    id: 1,
    title: "Frontend",
    subtitle: "Alisher dev",
    imageUrl: "https://freepngimg.com/thumb/sleep/40603-9-guy-picture-free-hd-image.png",
    content: "Ko'p yillik frontend sohasidagi bilimlarga ega bo'lgan. Eng sungi HTML, CSS, Javascript, React, Redux kabi ko'plab texnologiyalarini mukammal darajada bilimga ega bo'lgan dasturchiman"
  },
  {
    id: 2,
    title: "Python AI",
    subtitle: "Marufxon",
    imageUrl: "https://i.pinimg.com/originals/1b/f6/21/1bf621bd28b096daa7aa7c7fbe33c0e8.png",
    content: "Python dasturlash tilining eng sungi yangiliklari va sizga hech kim baham ko'rmaydigan o'rganish usullari va texnologiyalarini o'rgatishga muljallangan Python Ai kursiga xush kelibsiz"
  },
];

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': 'var(--green)',
          '--swiper-pagination-color': '#333',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        {teacherData.map((item) => (
          <SwiperSlide key={item.id}>
            <Grid container px={3}>
              <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'center' }} order={{ xs: 1, md: 0 }} > 
                <div>
                  <div className="title" data-swiper-parallax="-300">
                  <ThemeProvider theme={theme}>
                    {item.title}
                  </ThemeProvider>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-200">
                  <ThemeProvider theme={theme}>
                    {item.subtitle}
                  </ThemeProvider>
                  </div>
                  <div className="text" data-swiper-parallax="-100">
                    <p>
                    <ThemeProvider theme={theme}>
                      {item.content}
                  </ThemeProvider>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }} order={{ xs: 0, md: 1 }}>
                <img src={item.imageUrl} style={{ borderRadius: "20px", height: 'auto', maxWidth: '100%', maxHeight: '25rem' }} data-swiper-parallax="-250" />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
