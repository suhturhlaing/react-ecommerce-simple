import React, {useState} from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"
const Slider = () => {

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1 )
  }

  const nextSlide = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1 )
  }

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className='slider'>
      <div className="container" style={{ transform : `translateX(-${currentSlider * 100}vw)`}}>
        <img src={data[0]} alt="firstPhoto" />
        <img src={data[1]} alt="firstPhoto" />
        <img src={data[2]} alt="firstPhoto" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
