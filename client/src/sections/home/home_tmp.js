'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Navbar from '../../components/navbar';
import SectionHero from './hero';
// import SectionMarquee from './components/SectionMarquee';
// import SectionFooter from './components/SectionFooter';

function HomeSection_tmp() {
  const ref = useRef(null);

  useEffect(() => {
    const desiredScrollTop = ref.current?.offsetTop || 0;
    window.scrollTo({ top: desiredScrollTop, behavior: 'smooth' });
  }, []);

  return (
    <Box
      sx={{
        // zIndex: -100,
        display: 'block',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        margin: 0,
        minHeight: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <Box
        sx={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Navbar />
      </Box>

      <Box
        ref={ref}
        sx={{
          zIndex: 1006,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <SectionHero />
      </Box>

      {/* <SectionMarquee /> */}
      {/* <SectionFooter /> */}
    </Box>
  );
}

export default HomeSection_tmp;
