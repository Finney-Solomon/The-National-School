// import React from 'react';
// import logo from '../Images/HomePageImages/Logo.png';
// import { BottomNavigation, Box, Grid, Link, Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box sx={{ flexGrow: 1, backgroundColor: '#699ACB', padding: '40px' }}>
//       <Grid container justifyContent='space-between' alignItems='center'>
//         <Grid item xs={12} sm={6} md={3}>
//           <img src={logo} alt='The National School' style={{ height: '100px' }} />
//           <Typography variant='body2' sx={{ mt: 1, color: 'white' }}>
//             The National School is a leading educational institution committed to providing quality education to its students.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
//             Contact Us
//           </Typography>
//           <Typography variant='body2' component='address' sx={{ color: 'white' }}>
//             123 Main Street<br />
//             Anytown, USA<br />
//             Phone: (123) 456-7890<br />
//             Email: <Link href='mailto:info@nationalschool.edu' color='#ffff'>info@nationalschool.edu</Link>
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
//             Quick Links
//           </Typography>
//           <nav>
//             <ul>
//               <li>
//                 <Link href='#about' color='#ffff'>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href='#programs' color='#ffff'>
//                   Programs
//                 </Link>
//               </li>
//               <li>
//                 <Link href='#admissions' color='#ffff'>
//                   Admissions
//                 </Link>
//               </li>
//               <li>
//                 <Link href='#contact' color='#ffff'>
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
//             Follow Us
//           </Typography>
//           <nav>
//             <ul>
//               <li>
//                 <Link href='https://www.facebook.com/' target='_blank' rel='noopener' color='#ffff'>
//                   Facebook
//                 </Link>
//               </li>
//               <li>
//                 <Link href='https://twitter.com/' target='_blank' rel='noopener' color='#ffff'>
//                   Twitter
//                 </Link>
//               </li>
//               <li>
//                 <Link href='https://www.instagram.com/' target='_blank' rel='noopener' color='#ffff'>
//                   Instagram
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;




import React from 'react';
import logo from '../Images/HomePageImages/Logo.png';
import { BottomNavigation, Box, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#699ACB', padding: '40px' }}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item xs={12} sm={6} md={3}>
          <img src={logo} alt='The National School' style={{ height: '100px' }} />
          <Typography variant='body2' sx={{ mt: 1, color: 'white' }}>
            The National School is a leading educational institution committed to providing quality education to its students.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
            Contact Us
          </Typography>
          <Typography variant='body2' component='address' sx={{ color: 'white' }}>
            123 Main Street<br />
            Anytown, USA<br />
            Phone: (123) 456-7890<br />
            Email: <Link href='mailto:info@nationalschool.edu' color='#ffff'>info@nationalschool.edu</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
            Quick Links
          </Typography>
          <nav>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href='#about' color='#ffff' sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link href='#programs' color='#ffff' sx={{ mb: 1 }}>
                Programs
              </Link>
              <Link href='#admissions' color='#ffff' sx={{ mb: 1 }}>
                Admissions
              </Link>
              <Link href='#contact' color='#ffff' sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </nav>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' gutterBottom sx={{ mb: 2, color: 'white' }}>
            Follow Us
          </Typography>
          <nav>
            <Box sx={{ display: 'flex',flexDirection: 'column' }}>
              <Link href='https://www.facebook.com/' target='_blank' rel='noopener' color='#ffff' sx={{ mr: 2 }}>
                Facebook
              </Link>
              <Link href='https://twitter.com/' target='_blank' rel='noopener' color='#ffff' sx={{ mr: 2 }}>
                Twitter
              </Link>
              <Link href='https://www.instagram.com/' target='_blank' rel='noopener' color='#ffff'>
                Instagram
              </Link>
            </Box>
          </nav>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
