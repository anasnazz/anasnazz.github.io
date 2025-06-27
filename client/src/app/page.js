"use client";

import { Container, Box } from "@mui/material";
import HomeSection from "../sections/home/HomeSection";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@navbar"), { ssr: false });

export default function home() {
  return (
    <Box>
      <Box sx={{ mt: 0, py: "10px", width: "100%" }}>
        <Navbar />
      </Box>
      <HomeSection />
    </Box>
  );
}
