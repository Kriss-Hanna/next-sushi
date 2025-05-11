"use client";

import { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Données sur l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Tanaka Hiroshi",
    role: "Chef Fondateur",
    bio: "Formé dans les meilleurs restaurants de Tokyo, Chef Tanaka a créé YahpadSushi en 2010 avec la volonté de partager sa passion pour la cuisine japonaise authentique.",
    image:
      "https://images.unsplash.com/photo-1607987565270-300555398d0e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sophie Lefèvre",
    role: "Chef Pâtissière",
    bio: "Spécialisée dans les desserts japonais contemporains, Sophie apporte une touche de créativité à nos desserts tout en respectant les saveurs traditionnelles.",
    image:
      "https://images.unsplash.com/photo-1592078686547-824fa6ea644e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Yamamoto Kenji",
    role: "Maître Sushi",
    bio: "Avec plus de 15 ans d&apos;expérience, Kenji maîtrise l&apos;art du sushi à la perfection et forme nos équipes aux techniques traditionnelles japonaises.",
    image:
      "https://images.unsplash.com/photo-1563279541026-40f77771f662?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Marie Dubois",
    role: "Directrice",
    bio: "Marie veille à ce que votre expérience chez YahpadSushi soit toujours exceptionnelle, en combinant service attentif et ambiance zen.",
    image:
      "https://images.unsplash.com/photo-1596147983440-9cb3d55c671d?q=80&w=1470&auto=format&fit=crop",
  },
];

// Jalons et réalisations
const achievements = [
  {
    year: "2010",
    title: "Fondation de YahpadSushi",
    description:
      "Ouverture du premier restaurant à Paris avec notre Chef fondateur Tanaka Hiroshi.",
  },
  {
    year: "2014",
    title: "Prix de l&apos;Excellence Culinaire",
    description:
      "Reconnaissance de notre engagement pour la qualité et l&apos;authenticité de notre cuisine.",
  },
  {
    year: "2017",
    title: "Certification développement durable",
    description:
      "Engagement pour des produits de la mer issus de la pêche durable et responsable.",
  },
  {
    year: "2020",
    title: "Rénovation du restaurant",
    description:
      "Nouveau décor zen et élégant pour améliorer votre expérience.",
  },
  {
    year: "2023",
    title: "Mention dans le Guide Michelin",
    description:
      "Recommandation pour notre cuisine authentique et notre service attentionné.",
  },
];

// Valeurs de l'entreprise
const values = [
  {
    title: "Authenticité",
    description:
      "Nous préparons nos plats selon les méthodes traditionnelles japonaises.",
  },
  {
    title: "Qualité",
    description:
      "Nous utilisons uniquement des ingrédients frais et de saison pour garantir des saveurs exceptionnelles.",
  },
  {
    title: "Durabilité",
    description:
      "Nous nous engageons à réduire notre impact environnemental et à promouvoir une pêche responsable.",
  },
  {
    title: "Hospitalité",
    description:
      "Nous accueillons nos clients comme des invités, dans la tradition de l&apos;omotenashi japonais.",
  },
];

export default function About() {
  // Références pour les animations au scroll
  const historyRef = useRef(null);
  const isHistoryVisible = useInView(historyRef, { once: true, amount: 0.3 });

  const teamRef = useRef(null);
  const isTeamVisible = useInView(teamRef, { once: true, amount: 0.3 });

  const valuesRef = useRef(null);
  const isValuesVisible = useInView(valuesRef, { once: true, amount: 0.3 });

  const timelineRef = useRef(null);
  const isTimelineVisible = useInView(timelineRef, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero Section avec background */}
        <Box
          sx={{
            position: "relative",
            height: "50vh",
            width: "100%",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1474&auto=format&fit=crop)",
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
              alignItems: "center",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                À Propos de Nous
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Découvrez notre histoire, notre équipe et notre passion pour la
                cuisine japonaise authentique
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Section Histoire */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "white",
          }}
          ref={historyRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isHistoryVisible ? "visible" : "hidden"}
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
                      authentique et le respect des traditions culinaires. Notre
                      mission : offrir une expérience gastronomique qui
                      transporte nos clients au cœur du Japon.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      Le nom &quot;YahpadSushi&quot; est un hommage à la ville
                      natale du Chef Tanaka, combinant tradition et innovation -
                      à l&apos;image de notre cuisine qui respecte les méthodes
                      ancestrales tout en intégrant des touches contemporaines.
                    </Typography>
                    <Typography variant="body1">
                      Au fil des années, notre restaurant est devenu une
                      référence de la gastronomie japonaise à Paris. Nous
                      continuons d&apos;évoluer tout en restant fidèles à nos valeurs
                      : authenticité, qualité et hospitalité.
                    </Typography>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        position: "relative",
                        height: "400px",
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
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop"
                        alt="Intérieur du restaurant YahpadSushi"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section Valeurs */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "#F8F8F8",
          }}
          ref={valuesRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isValuesVisible ? "visible" : "hidden"}
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
                  Nos Valeurs
                </Typography>
              </motion.div>

              <Grid container spacing={4}>
                {values.map((value, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          height: "100%",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                          borderRadius: "8px",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <CheckCircleIcon sx={{ color: "#D62626", mr: 2 }} />
                            <Typography
                              variant="h5"
                              sx={{
                                fontFamily: "var(--font-playfair)",
                                fontWeight: 600,
                              }}
                            >
                              {value.title}
                            </Typography>
                          </Box>
                          <Divider sx={{ mb: 2 }} />
                          <Typography variant="body1">
                            {value.description}
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

        {/* Section Timeline */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "white",
          }}
          ref={timelineRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTimelineVisible ? "visible" : "hidden"}
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
                  Notre Parcours
                </Typography>
              </motion.div>

              <Box
                sx={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: { xs: "20px", md: "50%" },
                    width: "2px",
                    backgroundColor: "#D62626",
                    transform: { xs: "none", md: "translateX(-1px)" },
                  },
                }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        mb: 4,
                        display: "flex",
                        flexDirection: {
                          xs: "row",
                          md: index % 2 === 0 ? "row" : "row-reverse",
                        },
                        justifyContent: {
                          xs: "flex-start",
                          md: "space-between",
                        },
                        textAlign: {
                          xs: "left",
                          md: index % 2 === 0 ? "right" : "left",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#D62626",
                          border: "4px solid white",
                          boxShadow: "0 0 0 2px #D62626",
                          top: "0",
                          left: {
                            xs: "11px",
                            md: index % 2 === 0 ? "auto" : "50%",
                          },
                          right: {
                            xs: "auto",
                            md: index % 2 === 0 ? "50%" : "auto",
                          },
                          transform: { xs: "none", md: "translateX(-50%)" },
                          zIndex: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "auto", md: "45%" },
                          pl: { xs: 5, md: index % 2 === 0 ? 0 : 3 },
                          pr: { xs: 0, md: index % 2 === 0 ? 3 : 0 },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#D62626",
                            fontWeight: 600,
                            mb: 1,
                            fontFamily: "var(--font-playfair)",
                          }}
                        >
                          {achievement.year}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            fontFamily: "var(--font-playfair)",
                          }}
                        >
                          {achievement.title}
                        </Typography>
                        <Typography variant="body1">
                          {achievement.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Section Notre Équipe */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "#F8F8F8",
          }}
          ref={teamRef}
        >
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTeamVisible ? "visible" : "hidden"}
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
                  Notre Équipe
                </Typography>
              </motion.div>

              <Grid container spacing={4}>
                {teamMembers.map((member) => (
                  <Grid item xs={12} sm={6} md={3} key={member.id}>
                    <motion.div variants={itemVariants}>
                      <Card
                        sx={{
                          height: "100%",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                          borderRadius: "8px",
                          overflow: "hidden",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <Box sx={{ position: "relative", height: "250px" }}>
                          <Avatar
                            src={member.image}
                            alt={member.name}
                            sx={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 0,
                            }}
                            variant="square"
                          />
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 0.5,
                              fontFamily: "var(--font-playfair)",
                              fontWeight: 600,
                            }}
                          >
                            {member.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="primary"
                            sx={{
                              mb: 2,
                              color: "#D62626",
                              fontWeight: 500,
                            }}
                          >
                            {member.role}
                          </Typography>
                          <Divider sx={{ mb: 2 }} />
                          <Typography variant="body2">{member.bio}</Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Section Pourquoi nous choisir */}
        <Box
          component="section"
          sx={{
            py: 10,
            backgroundColor: "white",
          }}
        >
          <Container>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Typography
                    variant="h2"
                    className="section-title"
                    sx={{
                      mb: 4,
                      fontFamily: "var(--font-playfair)",
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    Pourquoi nous choisir
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    YahpadSushi se distingue par son engagement envers
                    l&apos;authenticité japonaise et la qualité des ingrédients.
                    Chaque détail, de la préparation du riz à la découpe du
                    poisson, est exécuté avec précision et respect des
                    traditions.
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <RestaurantIcon sx={{ color: "#D62626" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Cuisine authentique japonaise"
                        secondary="Préparée selon les méthodes traditionnelles par des chefs expérimentés."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocalDiningIcon sx={{ color: "#D62626" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Ingrédients frais et de saison"
                        secondary="Nous sélectionnons rigoureusement nos produits pour vous offrir le meilleur de la gastronomie japonaise."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <GroupsIcon sx={{ color: "#D62626" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Service attentionné"
                        secondary="Notre équipe vous accueille avec chaleur et professionnalisme pour une expérience inoubliable."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmojiEventsIcon sx={{ color: "#D62626" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Reconnu pour notre excellence"
                        secondary="Mentionné dans le Guide Michelin et récompensé pour la qualité de notre cuisine."
                      />
                    </ListItem>
                  </List>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "450px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1579631542720-3a87824adf83?q=80&w=1374&auto=format&fit=crop"
                      alt="Chef préparant des sushis"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
}
