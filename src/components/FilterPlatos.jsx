import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useDebounce } from 'use-debounce';
import getPlatos from '../../api/getPlatos';


const FilterPlatos = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');
  const [platos, setPlatos] = useState([]);

  const [debounceFilter] = useDebounce(filter, 500);

  useEffect(() => {
    getPlatos().then((res) => setPlatos(res));
  }, [debounceFilter]);

  return (
    <Box className="box">
      <div className='divFilter'>
        <p className='pFilter'>Puedes buscar recetas según sus ingredientes</p>
        <input className="filter1" type="text" value={filter}
          onChange={(e) => setFilter(e.target.value)}/>
        <input className="filter2" type="text" value={filter2}
          onChange={(e) => setFilter2(e.target.value)}/> 
      </div>
      <ImageList className="sectionPlatos" cols={4}>
        {platos
          .filter((item) => item.ingredients.includes(filter))
          .filter((item) => item.ingredients.includes(filter2))
          .map((item) => (
            <ImageListItem className="liPlatos" key={item.name}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <Link to={`/plato/${item.id}`} key={item.name}>
                <ImageListItemBar className="namePlatos" title={item.name} />
              </Link>
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default FilterPlatos;
