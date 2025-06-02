'use client';

import { Container } from '@mui/material';
import HomeSection from '../sections/home/HomeSection';

export default function home() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <HomeSection/>
    </Container>
  );
}
