import { Image } from '@mui/icons-material'
import React from 'react'
import image from "../Images/HomePageImages/1.jpg";
const HomePage = () => {
  return (
    <>
        <img
            src={image}
            alt="ima"
            style={{ height: "100%",width: "100%"}}
          />
    </>
  )
}

export default HomePage
