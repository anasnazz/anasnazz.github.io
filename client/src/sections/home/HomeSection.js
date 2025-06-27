"use client";
import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const SectionHero = dynamic(() => import("./hero"), { ssr: false });

export default function HomeSection() {
  const ref = useRef(null);

  useEffect(() => {
    const desiredScrollTop = ref.current?.offsetTop || 0;
    window.scrollTo({ top: desiredScrollTop, behavior: "instant" });
  }, []);

  return (
    <Box
      sx={{
        display: "block",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        margin: 0,
      }}
    >
      <Box ref={ref}>
        <SectionHero />
      </Box>
      <Box sx={{ height: "100vh" }} />
    </Box>
  );
}
