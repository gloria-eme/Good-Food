import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


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
    <Box className="box">
      <input
        className="filter"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ImageList className='sectionPlatos' cols={4}>
        { platos.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map((item) => (
            <ImageListItem className="liPlatos" key={item.name}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar className='namePlatos'
                title={item.name}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.name}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default FilterPlatos;
