// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
// // import Poster from '../components/Poster';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Poster from '../components/Poster';

// const Platos = () => {
//   const [platos, setPlatos] = useState([]);

//   useEffect(() => {
    
//   }, []);

//   return (
//     <Box>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {platos.map((item) => (
//           <ImageListItem key={item.id}>
//             <h2>{item.name}</h2>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.name}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// };

// export default Platos;
