import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
// import Poster from '../components/Poster';

import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Galery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetch('http://localhost:3000/Images');
      const res = await data.json();
      setImages(res);
      console.log(res);
    };
    getImages();
  }, []);


  return (
    <Box >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.download_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.download_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.author}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );

//   return (
//     <div className="divGalery">
//       <h1 className="h1Galery">Galery</h1>
//       <ul className="ulGalery">
//         {images.map((image) => (
//           <li className="liGalery" key={image.id}>
//             <Poster image={image} />
//           </li>
//         ))}
//       </ul>
//       <Outlet />
//     </div>
//   );
};

 export default Galery;



// export default function MasonryImageList() {
//   return (
//     <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// }