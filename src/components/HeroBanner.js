import React from 'react'
import {Box,Typography,Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg:'200px' , xs:'70px'} , ml:{ sm:"45px" , lg:'20px'}}} position="relative" p="20px">

      <Typography color="#FF2625" fontWeight="600" fontSize="30px" >
         The Fitness Hub
      </Typography>

      <Typography fontWeight={700} sx={{ fontSize:{lg:'48px',xs:'40px'}}} mb='18px' mt="17px">
        Sweat, Smile and Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight="30px" mb={2} color="grey">
       Check out the most effective exercises
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"ff2625"}}>
        Explore Exercises
      </Button>

      <Typography fontWeight={600} fontSize="180px" color="#ff2625" sx={{ opacity:0.1 , display:{lg: 'block', xs:'none'}}} mb="30px">
        Exercises
      </Typography>

      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>

        

    </Box>
  )
}

export default HeroBanner

