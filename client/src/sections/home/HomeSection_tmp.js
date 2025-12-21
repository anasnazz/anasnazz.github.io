'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Box, Typography, Container, Stack } from '@mui/material';
import SelfPortrait from "../../../public/self_portrait.png";

function SectionHero() {
  const containerRef = useRef(null);
  
  // 1. Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 2. Parallax Configurations
  // Text moves horizontally faster
  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Image moves vertically slower (creating depth)
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // "Hello" text fades out as you scroll
  const opacityHello = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Smooth spring physics for fluid movement
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothX = useSpring(xText, springConfig);
  const smoothY = useSpring(yImage, springConfig);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#ffffff',
      }}
    >
      {/* --- LAYER 1: Background Text (Parallax) --- */}
      <Box
        component={motion.div}
        style={{ x: smoothX }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '5%', md: '10%' }, // Start slightly off-center
          transform: 'translateY(-50%)',
          zIndex: 1,
          whiteSpace: 'nowrap',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 800,
            fontSize: { xs: '15vh', md: '35vh' }, // Massive responsive text
            lineHeight: 0.85,
            color: '#1a1a1a',
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
          }}
        >
          I&apos;m Anas
        </Typography>
      </Box>

      {/* --- LAYER 2: The Image (Floating) --- */}
      <Box
        component={motion.div}
        style={{ y: smoothY }}
        sx={{
          position: 'relative',
          zIndex: 2, // Image sits ON TOP of text for depth
          width: { xs: '80%', md: '35vw' }, // Responsive width
          maxWidth: '600px',
          height: 'auto',
          filter: 'grayscale(100%) contrast(1.1)', // Editorial look
          transition: 'filter 0.5s ease',
          '&:hover': {
             filter: 'grayscale(0%) contrast(1)', // Color on hover
          }
        }}
      >
        <img
          src={SelfPortrait.src}
          alt="Anas Portrait"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            boxShadow: '0px 20px 40px rgba(0,0,0,0.1)', // Soft shadow
          }}
        />
      </Box>

      {/* --- LAYER 3: 'Hello' & Details --- */}
      <Box
        sx={{
          position: 'absolute',
          top: '120px',
          left: '5vw',
          zIndex: 3,
        }}
      >
        <motion.div style={{ opacity: opacityHello }}>
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
            }}
          >
            Hello,
          </Typography>
        </motion.div>
      </Box>

      {/* Footer / Connect Links (Bottom Absolute) */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{
          position: 'absolute',
          bottom: '40px',
          width: '90%',
          zIndex: 4,
        }}
      >
        <Typography sx={{ fontFamily: '"Manrope", sans-serif', fontSize: '1.2rem', maxWidth: '400px' }}>
          CS student turning ideas into reality. <br/> Based in Kerala.
        </Typography>
        
        <Stack direction="row" spacing={3}>
           {['Instagram', 'LinkedIn', 'GitHub'].map((item) => (
             <Typography 
                key={item} 
                component="a" 
                href="#"
                sx={{ 
                  fontFamily: '"Manrope", sans-serif', 
                  fontSize: '1.2rem', 
                  textDecoration: 'none', 
                  color: 'black',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'black',
                    transition: 'width 0.3s'
                  },
                  '&:hover:after': {
                    width: '100%'
                  }
                }}
             >
               {item}
             </Typography>
           ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SectionHero;