"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Box, Container, Typography, styled } from '@mui/material';
import SelfPortrait from "../../../public/self_portrait.png";

// --- Styled Components ---

const HeroContainer = styled(Container)(({ theme }) => ({
  zIndex: -10,
  display: 'grid',
  margin: 0,
  minHeight: '100%',
  paddingBottom: '2rem',
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(100px, 20vw, 350px) !important',
  fontFamily: 'var(--font-manrope), sans-serif !important', 
  fontWeight: 500,
  lineHeight: 1,
  overflow: 'hidden',
  '&.white-text': {
    color: '#fff',
  }
}));

const HeroGridContainer = styled(Box)({
  display: 'grid',
  gridColumnGap: '30px',
  gridRowGap: '30px',
  gridTemplateColumns: 'repeat(8, 1fr)',
});

const HeroContentWrapper = styled(Box)({
  gridArea: '1 / 2 / 4 / 6',
  position: 'relative',
});

const TextContentOverlay = styled(motion.div)({
  width: '200vw',
  position: 'absolute',
  top: '10vh',
  left: 0,
});

const WhiteTextSection = styled(Box)({
  zIndex: 2,
  position: 'relative',
  overflow: 'hidden',
});

const DescriptionBox = styled(motion.div)({
  gridArea: '3 / 6 / 4 / 9',
  alignSelf: 'end',
});

const ConnectContainer = styled(Box)({
  display: 'grid',
  gridRowGap: '16px',
  gridColumnGap: '16px',
  gridTemplateRows: 'auto auto',
  padding: '3rem 0 !important',
});

// --- Main Component ---

export default function SectionHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const isInView = useInView(ref, { once: true });

  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "60%"]);
  const invertedX = useTransform(scrollYProgress, [0.1, 1], ["0%", "-40%"]);

  // Standard animation state for reuse
  const entranceAnimation = (delay = 0) => ({
    initial: { transform: "translateY(200px)", opacity: 0 },
    animate: isInView ? { transform: "none", opacity: 1 } : {},
    transition: { duration: 1.2, ease: [0.17, 0.55, 0.55, 1], delay }
  });

  return (
    <HeroContainer ref={ref} maxWidth={false}>
      {/* "Hello" Text Section */}
      <Box sx={{ zIndex: 1, position: 'relative', top: '80px' }}>
        <motion.div {...entranceAnimation(0)}>
          <motion.div style={{ x }}>
            <HeroText>hello</HeroText>
          </motion.div>
        </motion.div>
      </Box>

      <HeroGridContainer>
        <HeroContentWrapper>
          {/* Black Text Layer */}
          <Box sx={{ zIndex: 1, position: 'relative' }}>
            <TextContentOverlay {...entranceAnimation(0.5)}>
              <motion.div style={{ x: invertedX }}>
                <HeroText>I'm Anas</HeroText>
              </motion.div>
            </TextContentOverlay>
          </Box>

          {/* White Text & Image Layer */}
          <WhiteTextSection>
            <motion.div
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <Image 
                src={SelfPortrait} 
                alt="Hero Portrait" 
                priority
                style={{ width: '100%', height: 'auto', display: 'inline-block' }}
              />
            </motion.div>
            <TextContentOverlay {...entranceAnimation(0.5)}>
              <motion.div style={{ x: invertedX }}>
                <HeroText className="white-text">I'm Anas</HeroText>
              </motion.div>
            </TextContentOverlay>
          </WhiteTextSection>
        </HeroContentWrapper>

        {/* Bio Description */}
        <DescriptionBox {...entranceAnimation(0.5)}>
          <Typography sx={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3 }}>
            I'm a CS student turning ideas into reality. I'm developing my skills and 
            building projects you can explore on my website. Let's see what we can 
            create together! 👋
          </Typography>
        </DescriptionBox>
      </HeroGridContainer>

      {/* Footer Socials */}
      <ConnectContainer>
        <Box sx={{ gridArea: 'span 1 / span 2', display: 'flex', gap: 2 }}>
          <Typography sx={{ fontSize: '24px', cursor: 'pointer' }}>Instagram</Typography>
          <Typography sx={{ fontSize: '24px', cursor: 'pointer' }}>LinkedIn</Typography>
          <Typography sx={{ fontSize: '24px', cursor: 'pointer' }}>GitHub</Typography>
        </Box>
        <Box sx={{ gridArea: '1 / 5 / 2 / 7', textAlign: 'right' }}>
          <Typography sx={{ fontSize: '24px' }}>anastnazz@gmail.com</Typography>
        </Box>
      </ConnectContainer>
    </HeroContainer>
  );
}