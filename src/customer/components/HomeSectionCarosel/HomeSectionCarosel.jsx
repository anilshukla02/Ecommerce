import React, { useRef, useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarosel = ({data,sectionName}) => {

  const [activeIndex, setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

const carouselRef = useRef()
  
const slidePrev = () => {
  if (activeIndex > 0) {
    carouselRef.current.slideTo(activeIndex - 1);
  }
};

const slideNext = () => {
  if (activeIndex < items.length - 1) {
    carouselRef.current.slideTo(activeIndex + 1);
  }
};
  
const syncActiveIndex = ({ item }) => { setActiveIndex(item);};


const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  
  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-grey-800 py-5'>{sectionName}</h2>
      <div className="relative p-5 lg:px-8 border-b">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          animationType="slide"
          // autoPlay
        />
        {activeIndex !== items.length-4 && <Button
          variant='contained'
          className='z-50 bg-white'
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '-1.5rem',
            transform: 'translateY(-50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label='next'
        >
          <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
        }
        { activeIndex !== 0 && <Button
          variant='contained'
          className='z-50 bg-white'
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '-1.5rem',
            transform: 'translateY(-50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label='previous'
        >
          <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
