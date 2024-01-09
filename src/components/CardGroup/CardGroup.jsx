
import { Grid } from '@mui/material'
import React from 'react'

const CardGroup = ({data}) => {

  return (
    <Grid container>
        12
        {
            data.map((card)=>{
                <Grid key={card.id} item>{card.title}</Grid>
            })
        }
    </Grid>
  )
}
export default CardGroup