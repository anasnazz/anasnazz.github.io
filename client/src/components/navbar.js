'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useVelocity } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/logo.svg';

function Navbar() {
  const slideDistance = 80;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    scrollVelocity.onChange((latest) => {
      if (latest > 0) {
        setIsScrollingBack(false);
        return;
      }
      if (latest < -threshold) {
        setIsScrollingBack(true);
        return;
      }
    });
  }, [scrollVelocity]);

  useEffect(() => {
    scrollY.onChange((latest) => setIsAtTop(latest <= 0));
  }, [scrollY]);

  useEffect(() => {
    setIsInView(isScrollingBack || isAtTop);
  }, [isScrollingBack, isAtTop]);

  return (
    <motion.div
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        height: slideDistance,
        width: '100%',
        backgroundColor: '#ffffff',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          zIndex: 1000,
          maxWidth: '1170px',
          mx: 'auto',
          px: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pt: '20px',
            pb: '10px',
          }}
        >
          <Image
            src={logo}
            alt="mat logo"
            width={110}
            height={40}
            style={{
              objectFit: 'contain',
              objectPosition: '0% 50%',
              height: 'auto',
            }}
          />
        </Box>

        <Box
          sx={{
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            pt: '6px',
            pb: '6px',
          }}
        >
          {['Projects', 'Resume', 'Contact'].map((item) => (
            <Typography
              key={item}
              sx={{
                display: 'inline-block',
                position: 'relative',
                ml: '40px',
                px: '20px',
                py: '10px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: { xs: '18px', md: '24px' },
                fontWeight: 500,
                color: '#000',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#666',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

export default Navbar;
