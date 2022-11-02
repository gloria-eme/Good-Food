import React from 'react';
import Title from './Title';

const Poster = ({ item }) => {
  return (
    <>
      <img className='imgPoster'
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <Title className="titlePoster" text={item.name} />
    </>
  );
};

export default Poster;
