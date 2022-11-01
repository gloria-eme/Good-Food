import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
// import Poster from '../components/Poster';

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import getData from '../../api/getData';
import { useDebounce } from 'use-debounce';

const FilterPlatos = () => {
  const [filter, setFilter] = useState('');
  const [platos, setPlatos] = useState([]);

  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getData().then((res) => setPlatos(res));
  }, [debounceFilter]);

  return (
    <Box className='box'>
      <input className="filter" type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ImageList variant="masonry" cols={3} gap={8}>
        {platos.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item) => (
          <ImageListItem className= "liPlatos" key={item.name}>
            <h2 className='h2Platos'>{item.name}</h2>
            <img className='imgPlatos'
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default FilterPlatos;
