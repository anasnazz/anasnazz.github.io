'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import SelfPortrait from '../../../public/self_portrait.png';

function SectionHero_tmp() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const isInView = useInView(ref, { once: true });

  const x = useTransform(scrollYProgress, [0.1, 1], ['0%', '60%']);
  const invertedX = useTransform(scrollYProgress, [0.1, 1], ['0%', '-40%']);

  return (
    <Container
      ref={ref}
      disableGutters
      sx={{
        // zIndex: -10,
        display: 'grid',
        margin: 0,
        minHeight: '100vh',
        fontFamily: 'Manrope, sans-serif',
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      

      <Box
        sx={{
          display: 'grid',
          gap: '30px',
          gridTemplateColumns: {
            xs: '1fr 5fr 1fr',
            md: 'repeat(8, 1fr)',
          },
          mt: { xs: '-50px', md: 0 },
        }}
      >
        {/* Hero Content */}
        <Box sx={{ gridColumn: { md: '2 / 6' }, gridRow: { md: '1 / 4' } }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              style={{
                transform: isInView ? 'none' : 'translateY(200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <motion.div
                style={{ x: invertedX }}
                className="hero-text-content"
              >
                <Typography
                  sx={{
                    fontSize: { xs: '120px', sm: '140px', md: '290px', lg: '350px' },
                    fontWeight: 500,
                    lineHeight: 1,
                    overflow: 'hidden',
                  }}
                >
                  I&apos;m Anas
                </Typography>
              </motion.div>
            </motion.div>
          </Box>
        </Box>

        {/* Image + White Text */}
        <Box
          sx={{
            gridColumn: { md: '6 / 9' },
            gridRow: { md: '1 / 4' },
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2,
          }}
        >
          <motion.div
            style={{
              transform: isInView ? 'none' : 'translateX(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Image
              src={SelfPortrait}
              alt="Hero Portrait"
              style={{ width: '100%', maxWidth: '100%', display: 'inline-block' }}
            />
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <motion.div style={{ x: invertedX }}>
              <Typography
                sx={{
                  fontSize: { xs: '120px', sm: '140px', md: '290px', lg: '350px' },
                  fontWeight: 500,
                  lineHeight: 1,
                  overflow: 'hidden',
                  color: '#fff',
                }}
              >
                I&apos;m Anas
              </Typography>
            </motion.div>
          </motion.div>
        </Box>

        {/* Description */}
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <Typography
            sx={{
              gridColumn: { md: '6 / 9' },
              alignSelf: 'end',
              mt: '10px',
              mb: '10px',
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            I&apos;m a CS student turning ideas into reality. I&apos;m developing my skills and building projects you can explore on my website. Let&apos;s see what we can create together! 👋
          </Typography>
        </motion.div>
      </Box>

      {/* Social and Email */}
      <Box
        sx={{
          display: 'grid',
          gap: '16px',
          gridTemplateRows: 'auto auto',
          py: 6,
        }}
      >
        <Box sx={{ gridColumn: 'span 2' }}>
          <Typography sx={{ fontSize: 24, fontWeight: 500, px: 2 }}>
            Instagram
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 500, px: 2 }}>
            LinkedIn
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 500, px: 2 }}>
            GitHub
          </Typography>
        </Box>
        <Box sx={{ gridColumn: '5 / 7', textAlign: 'right' }}>
          <Typography sx={{ fontSize: 24, fontWeight: 500, px: 2 }}>
            anastnazz@gmail.com
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default SectionHero_tmp;
