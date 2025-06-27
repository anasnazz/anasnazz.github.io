"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import SelfPortrait from "../../../public/self_portrait.png";
import useBreakpoint from "@useBreakpoints";

function SectionHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "60%"]);
  const invertedX = useTransform(scrollYProgress, [0.1, 1], ["0%", "-40%"]);

  const bp = useBreakpoint();
  const heroHelloTop = bp.isMdUp ? "80px" : "0px";

  return (
    <Container
      ref={ref}
      disableGutters
      sx={{
        zIndex: 0,
      }}
    >
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0,
        }}
        style={{
          zIndex: 1,
          top: heroHelloTop,
          position: "relative",
          textAlign: "left",
        }}
      >
        <motion.div style={{ x }}>
          <Typography
            sx={{
              marginTop: { xs: "0", md: "unset" },
              fontSize: { xs: "120px", sm: "140px", md: "290px", lg: "350px" },
              fontWeight: 500,
              lineHeight: 1,
              overflow: "hidden",
            }}
          >
            hello
          </Typography>
        </motion.div>
      </motion.div>

      {/* hero-text-container */}
      <Box
        sx={{
          position: "relative",
          top: { xs: "-50px", md: "unset" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            columnGap: { xs: "10px", md: "30px" },
            rowGap: "30px",
            gridTemplateColumns: {
              xs: "1fr 7fr 1fr",
              sm: "1fr 5fr 1fr",
              md: "repeat(8, 1fr)",
            },
            gridTemplateRows: "auto auto",
            gridAutoColumns: "1fr",
          }}
        >
          <Box
            sx={{
              gridRow: "1 / 4",
              gridColumn: { xs: "1 / 3", sm: "2 / 6" },
              // gridColumnEnd: {
              //   sm: "3",
              //   md: "4",
              //   lg: "auto",
              // },
            }}
          >
            {/* Black Text */}
            <Box
              sx={{
                zIndex: 1,
                position: "relative",
              }}
            >
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.5,
                }}
                style={{
                  width: "200vw",
                  position: "absolute",
                  top: "10vh",
                  bottom: "auto",
                  left: 0,
                  right: "auto",
                }}
              >
                <motion.div style={{ x: invertedX }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "120px",
                        sm: "140px",
                        md: "290px",
                        lg: "350px",
                      },
                      marginTop: { xs: "0", md: "unset" },
                      fontWeight: 500,
                      lineHeight: 1,
                      overflow: "hidden",
                    }}
                  >
                    I&apos;m Anas
                  </Typography>
                </motion.div>
              </motion.div>
            </Box>

            {/* White Text */}
            <Box sx={{ position: "relative", zIndex: 2, overflow: "hidden" }}>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.5,
                }}
              >
                <Image
                  src={SelfPortrait}
                  alt="Hero Portrait"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    display: "inline-block",
                  }}
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.5,
                }}
                style={{
                  width: "200vw",
                  position: "absolute",
                  top: "10vh",
                  bottom: "auto",
                  left: 0,
                  right: "auto",
                }}
              >
                <motion.div style={{ x: invertedX }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "120px",
                        sm: "140px",
                        md: "290px",
                        lg: "350px",
                      },
                      fontWeight: 500,
                      lineHeight: 1,
                      overflow: "hidden",
                      color: "#fff",
                    }}
                  >
                    I&apos;m Anas
                  </Typography>
                </motion.div>
              </motion.div>
            </Box>
          </Box>

          {/* Description */}
          <Box
            sx={{
              gridRow: { xs: "4 / 5", md: "3 / 4" },
              gridColumn: "6 / 9",
              gridColumnStart: {
                xs: 1,
                md: "unset", 
              },
              alignSelf: "end",
            }}
          >
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.5,
              }}
            >
              <Typography
                sx={{
                  mt: "10px",
                  mb: "10px",
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: { xs: 400, md: 500 },
                  lineHeight: 1.3,
                }}
              >
                I&apos;m a CS student turning ideas into reality. I&apos;m
                developing my skills and building projects you can explore on my
                website. Let&apos;s see what we can create together! 👋
              </Typography>
            </motion.div>
          </Box>
          
        </Box>
      </Box>
    </Container>
  );
}

export default SectionHero;
