'use client';

import { Box, Container, Grid, Typography, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Footer() {
  // Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#222222',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={4}>
            {/* Logo et Description */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontFamily: 'var(--font-playfair)', 
                    mb: 2,
                    color: '#D62626'
                  }}
                >
                  YahpadSushi
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, maxWidth: '80%' }}>
                  Une expérience culinaire japonaise authentique. Nos chefs vous proposent des sushis frais et des plats traditionnels dans une ambiance zen.
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton 
                    color="inherit" 
                    component="a" 
                    href="https://facebook.com" 
                    target="_blank"
                    aria-label="Facebook"
                    size="small"
                    sx={{ 
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateY(-3px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton 
                    color="inherit" 
                    component="a" 
                    href="https://instagram.com" 
                    target="_blank"
                    aria-label="Instagram"
                    size="small"
                    sx={{ 
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateY(-3px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton 
                    color="inherit" 
                    component="a" 
                    href="https://twitter.com" 
                    target="_blank"
                    aria-label="Twitter"
                    size="small"
                    sx={{ 
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateY(-3px)',
                        transition: 'all 0.3s ease'
                      } 
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid>
            
            {/* Liens utiles */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'var(--font-playfair)',
                    position: 'relative',
                    display: 'inline-block',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '50px',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: '#D62626'
                    }
                  }}
                >
                  Pages
                </Typography>
                <Stack spacing={1}>
                  <Box 
                    component={Link} 
                    href="/"
                    sx={{ 
                      display: 'block', 
                      color: 'white', 
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Accueil
                  </Box>
                  <Box 
                    component={Link} 
                    href="/menu"
                    sx={{ 
                      display: 'block', 
                      color: 'white', 
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Menu
                  </Box>
                  <Box 
                    component={Link} 
                    href="/about"
                    sx={{ 
                      display: 'block', 
                      color: 'white', 
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    À propos
                  </Box>
                  <Box 
                    component={Link} 
                    href="/gallery"
                    sx={{ 
                      display: 'block', 
                      color: 'white', 
                      mb: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        color: '#D62626',
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    Galerie
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
            
            {/* Coordonnées */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'var(--font-playfair)',
                    position: 'relative',
                    display: 'inline-block',
                    pb: 1,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '50px',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: '#D62626'
                    }
                  }}
                >
                  Coordonnées
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 1, color: '#D62626' }} />
                  <Typography variant="body2">
                    123 Rue des Cerisiers, 75002 Paris
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 1, color: '#D62626' }} />
                  <Typography variant="body2">
                    +33 1 23 45 67 89
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1, color: '#D62626' }} />
                  <Typography variant="body2">
                    <strong>Horaires :</strong><br />
                    Lun-Ven: 11h30-14h30, 18h30-22h30<br />
                    Sam-Dim: 12h00-23h00
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
        
        {/* Copyright */}
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            pt: 3, 
            mt: 4, 
            textAlign: 'center' 
          }}
        >
          <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} YahpadSushi - Tous droits réservés
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 