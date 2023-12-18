import React from 'react'
import './Home.css'

import MainImg from '../../assets/images/main.png'

const Home = () => {
  return (
    <section id='home'>
      <div className="home container">
        <div className="grid">
          <div className="home__context">
            <div>
              <span>Muvaffaqiyatli murabbiylar ko'rish qobiliyatiga ega</span>
              <h1>Yaxshi <span className='c-default'>murabbiy</span> bu yaxshi o‘qishdir .</h1>
            </div>
          </div>
          <div className="home__img">
            <img src={MainImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home