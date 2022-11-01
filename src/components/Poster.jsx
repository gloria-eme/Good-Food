import React from 'react';

const Poster = ({ item }) => {
  return (
    <>
      <h2>{item.name}</h2>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
    </>
  );
};

export default Poster;
