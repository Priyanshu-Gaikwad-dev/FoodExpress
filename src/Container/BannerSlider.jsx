import React, { useEffect, useRef } from 'react';
import Banner from './Banner';
import './Banner.css';

const BannerCarousel = ({ data }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320, // width of one banner
          behavior: 'smooth',
        });

        // Reset scroll if at end
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={scrollRef}>
        {data.map((item) => (
          <Banner key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
