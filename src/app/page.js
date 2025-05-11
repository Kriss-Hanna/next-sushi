"use client";

import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Données pour la section des plats populaires
const popularDishes = [
  {
    id: 1,
    name: "Assortiment de Sushis",
    description:
      "Une sélection de nos meilleurs sushis préparés avec des ingrédients frais.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1470&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Ramen au Porc",
    description:
      "Nouilles de blé dans un bouillon riche garni de porc char siu, œuf mollet et légumes.",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1470&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Gyozas",
    description:
      "Raviolis japonais grillés et farcis au poulet, légumes et aromates.",
    image:
      "https://images.unsplash.com/photo-1625938145744-533e96b6c51b?q=80&w=1530&auto=format&fit=crop",
    rating: 4.8,
  },
];

// Données pour la section témoignages
const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    comment:
      "Une expérience culinaire exceptionnelle ! Les sushis sont frais et le service impeccable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas Lefèvre",
    comment:
      "Ambiance zen et plats délicieux. Je recommande vivement les gyozas et le chirashi.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Sophie Martin",
    comment:
      "Le meilleur restaurant japonais de la ville. Prix raisonnable pour une qualité exceptionnelle.",
    rating: 5,
  },
];

export default function Home() {
  // Références et animations pour les sections
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const aboutControls = useAnimation();

  const dishesRef = useRef(null);
  const isDishesInView = useInView(dishesRef, { once: true, amount: 0.3 });
  const dishesControls = useAnimation();

  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  });
  const testimonialsControls = useAnimation();

  // Gestion des animations basées sur le défilement
  useEffect(() => {
    if (isAboutInView) {
      aboutControls.start("visible");
    }
    if (isDishesInView) {
      dishesControls.start("visible");
    }
    if (isTestimonialsInView) {
      testimonialsControls.start("visible");
    }
  }, [
    isAboutInView,
    isDishesInView,
    isTestimonialsInView,
    aboutControls,
    dishesControls,
    testimonialsControls,
  ]);

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1474&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />

          <Container
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  mb: 2,
                  fontFamily: "var(--font-playfair)",
                }}
              >
                YahpadSushi
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  mb: 4,
                  maxWidth: "700px",
                  fontSize: { xs: "1.1rem", md: "1.5rem" },
                }}
              >
                Une expérience culinaire japonaise authentique au cœur de Paris
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  href="/menu"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#D62626",
                    borderRadius: "4px",
                    padding: "12px 32px",
                    "&:hover": {
                      backgroundColor: "#b51d1d",
                    },
                  }}
                >
                  Découvrir le Menu
                </Button>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    borderRadius: "4px",
                    padding: "12px 32px",
                    "&:hover": {
                      borderColor: "#D62626",
                      color: "#D62626",
                    },
                  }}
                >
                  À Propos de Nous
                </Button>
                <Button
                  component={Link}
                  href="https://www.yahpadsushi.com"
                  variant="outlined"
                  size="large"
                  sx={{
                    backgroundColor: "#D62626",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "12px 32px",
                    "&:hover": {
                      // borderColor: "#fff",
                      color: "#fff",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Je commande
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* À propos section */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "#F8F8F8",
          }}
          ref={aboutRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={aboutControls}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h2"
                      className="section-title"
                      sx={{
                        mb: 4,
                        fontFamily: "var(--font-playfair)",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      Notre Histoire
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      Fondé en 2010 par le Chef Tanaka Hiroshi, YahpadSushi est
                      né d&apos;une passion pour la cuisine japonaise
                      authentique et le respect des traditions culinaires.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                      Notre restaurant allie techniques traditionnelles et
                      créativité moderne pour vous offrir une expérience
                      gastronomique unique. Chaque plat est préparé avec des
                      ingrédients frais et de saison, importés directement du
                      Japon.
                    </Typography>
                    <Button
                      component={Link}
                      href="/about"
                      variant="contained"
                      sx={{
                        backgroundColor: "#D62626",
                        "&:hover": {
                          backgroundColor: "#b51d1d",
                        },
                      }}
                    >
                      En Savoir Plus
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div
                    variants={itemVariants}
                    style={{ position: "relative" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "400px",
                        width: "100%",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          zIndex: 1,
                        },
                      }}
                    >
                      <motion.img
                        src="https://images.unsplash.com/photo-1581781870027-1227f94cba1c?q=80&w=1470&auto=format&fit=crop"
                        alt="Chef préparant des sushis"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-20px",
                        right: "-20px",
                        width: "120px",
                        height: "120px",
                        backgroundColor: "#D62626",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                        zIndex: 2,
                        display: { xs: "none", md: "flex" },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, textAlign: "center" }}
                      >
                        Depuis 2010
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section Localisation */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "#F8F8F8",
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                variant="h2"
                className="section-title"
                align="center"
                sx={{
                  mb: 4,
                  fontFamily: "var(--font-playfair)",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Nous Trouver
              </Typography>

              <Typography variant="body1" align="center" sx={{ mb: 5 }}>
                YahpadSushi vous accueille au cœur de Paris, dans un cadre
                élégant et zen. Venez nous rendre visite !
              </Typography>

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ mb: 2, fontFamily: "var(--font-playfair)" }}
                    >
                      Adresse & Contact
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Adresse :</strong> 28 Rue de Rivoli, 75004 Paris
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Téléphone :</strong> 01 45 67 89 10
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      <strong>Email :</strong> contact@yahpadsushi.com
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ mt: 3, mb: 2, fontFamily: "var(--font-playfair)" }}
                    >
                      Horaires d&apos;ouverture
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Lundi - Vendredi :</strong> 11:30 - 14:30 | 18:30
                      - 22:30
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Samedi :</strong> 18:00 - 23:00
                    </Typography>
                    <Typography variant="body1">
                      <strong>Dimanche :</strong> 12:00 - 15:00 | 18:30 - 22:00
                    </Typography>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box
                    sx={{
                      height: "450px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "8px",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8516462555243!2d2.3507099999999997!3d48.855957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671fd10fa77a9%3A0x811a76a4c436cc!2s28%20Rue%20de%20Rivoli%2C%2075004%20Paris!5e0!3m2!1sfr!2sfr!4v1701296456789!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation YahpadSushi"
                    ></iframe>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Plats populaires */}
        <Box component="section" sx={{ py: 10 }} ref={dishesRef}>
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={dishesControls}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  className="section-title"
                  align="center"
                  sx={{
                    mb: 6,
                    fontFamily: "var(--font-playfair)",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Nos Plats Populaires
                </Typography>
              </motion.div>

              <Grid container spacing={4}>
                {popularDishes.map((dish) => (
                  <Grid item xs={12} md={4} key={dish.id}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "8px",
                          overflow: "hidden",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="220"
                          image={dish.image}
                          alt={dish.name}
                        />
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 1,
                              fontFamily: "var(--font-playfair)",
                            }}
                          >
                            {dish.name}
                          </Typography>
                          <Rating
                            value={dish.rating}
                            precision={0.5}
                            readOnly
                            sx={{ mb: 2 }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {dish.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <motion.div
                variants={itemVariants}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3rem",
                }}
              >
                <Button
                  component={Link}
                  href="/menu"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#D62626",
                    "&:hover": {
                      backgroundColor: "#b51d1d",
                    },
                  }}
                >
                  Voir Notre Menu Complet
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* Témoignages */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "#F8F8F8",
          }}
          ref={testimonialsRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={testimonialsControls}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  className="section-title"
                  align="center"
                  sx={{
                    mb: 6,
                    fontFamily: "var(--font-playfair)",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Ce que nos clients disent
                </Typography>
              </motion.div>

              <Grid container spacing={4}>
                {testimonials.map((testimonial, index) => (
                  <Grid item xs={12} md={4} key={testimonial.id}>
                    <motion.div variants={itemVariants} custom={index}>
                      <Card
                        sx={{
                          height: "100%",
                          p: 3,
                          borderRadius: "8px",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                          position: "relative",
                          overflow: "visible",
                          "&::before": {
                            content: '"\\"',
                            position: "absolute",
                            top: "-15px",
                            left: "20px",
                            fontSize: "60px",
                            color: "#D62626",
                            fontFamily: "Georgia",
                            opacity: 0.2,
                          },
                        }}
                      >
                        <CardContent>
                          <Rating
                            value={testimonial.rating}
                            precision={0.5}
                            readOnly
                            sx={{ mb: 2 }}
                          />
                          <Typography
                            variant="body1"
                            sx={{ mb: 3, fontStyle: "italic" }}
                          >
                            &quot;{testimonial.comment}&quot;
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600 }}
                          >
                            {testimonial.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Bannière CTA */}
        <Box
          sx={{
            py: 8,
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=1470&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            color: "white",
            textAlign: "center",
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontFamily: "var(--font-playfair)",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                Vivez l&apos;expérience YahpadSushi
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                  opacity: 0.9,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                }}
              >
                Plongez dans un univers de saveurs japonaises authentiques et
                laissez-vous transporter par notre cuisine raffinée.
              </Typography>
              <Button
                component={Link}
                href="/gallery"
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "4px",
                  padding: "12px 32px",
                  "&:hover": {
                    borderColor: "#D62626",
                    color: "#D62626",
                  },
                }}
              >
                Découvrir notre Galerie
              </Button>
            </motion.div>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
