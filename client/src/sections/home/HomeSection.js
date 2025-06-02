"use client";

const { Container, Box } = require("@mui/material");
import Navbar from '../../components/navbar';
import { useEffect, useRef } from 'react';

export default function HomeSection() {
  const ref = useRef(null);
  
    useEffect(() => {
      const desiredScrollTop = ref.current?.offsetTop || 0;
      window.scrollTo({ top: desiredScrollTop, behavior: 'smooth' });
    }, []);

  return (
    <Container>
      {/* <Box
      display={'block'}
      > */}
        <Box
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Navbar />
        </Box>
      {/* </Box> */}
    </Container>
  );
}
