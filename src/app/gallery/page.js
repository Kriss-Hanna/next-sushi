'use client';

import { useState, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Tabs, 
  Tab,
  ButtonBase,
  Modal,
  IconButton,
  Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Données des images de la galerie
const galleryImages = {
  dishes: [
    {
      id: 'd1',
      title: 'Assortiment de Sushis',
      description: 'Sélection variée de sushis traditionnels japonais.',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1470&auto=format&fit=crop',
      category: 'Sushis'
    },
    {
      id: 'd2',
      title: 'Sashimi de Saumon',
      description: 'Tranches fines de saumon frais.',
      image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1469&auto=format&fit=crop',
      category: 'Sashimis'
    },
    {
      id: 'd3',
      title: 'Ramen au Porc',
      description: 'Bouillon riche avec nouilles, porc, œuf et légumes.',
      image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1470&auto=format&fit=crop',
      category: 'Plats Chauds'
    },
    {
      id: 'd4',
      title: 'Gyoza',
      description: 'Raviolis japonais grillés farcis au poulet et légumes.',
      image: 'https://images.unsplash.com/photo-1625938145744-533e96b6c51b?q=80&w=1530&auto=format&fit=crop',
      category: 'Entrées'
    },
    {
      id: 'd5',
      title: 'Tempura de Légumes',
      description: 'Assortiment de légumes frits en tempura légère.',
      image: 'https://images.unsplash.com/photo-1615361200141-f45961202b05?q=80&w=1364&auto=format&fit=crop',
      category: 'Entrées'
    },
    {
      id: 'd6',
      title: 'Chirashi',
      description: 'Bol de riz vinaigré garni de sashimi varié.',
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=1380&auto=format&fit=crop',
      category: 'Plats'
    },
    {
      id: 'd7',
      title: 'Mochi Glacé',
      description: 'Boules de glace enrobées de pâte de riz.',
      image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?q=80&w=1475&auto=format&fit=crop',
      category: 'Desserts'
    },
    {
      id: 'd8',
      title: 'Dorayaki',
      description: 'Pancakes japonais fourrés à la pâte de haricots rouges.',
      image: 'https://plus.unsplash.com/premium_photo-1673548917471-3363161c1794?q=80&w=1470&auto=format&fit=crop',
      category: 'Desserts'
    }
  ],
  restaurant: [
    {
      id: 'r1',
      title: 'Salle Principale',
      description: 'Notre salle à l\'ambiance zen et élégante.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop',
      category: 'Intérieur'
    },
    {
      id: 'r2',
      title: 'Bar à Sushi',
      description: 'Observez nos chefs préparer vos sushis en direct.',
      image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1470&auto=format&fit=crop',
      category: 'Intérieur'
    },
    {
      id: 'r3',
      title: 'Espace Privé',
      description: 'Salle tatami traditionnelle pour les groupes.',
      image: 'https://images.unsplash.com/photo-1526489550178-7bd5d9944427?q=80&w=1471&auto=format&fit=crop',
      category: 'Intérieur'
    },
    {
      id: 'r4',
      title: 'Chef en Action',
      description: 'Notre chef principal préparant des sushis.',
      image: 'https://images.unsplash.com/photo-1607987565270-300555398d0e?q=80&w=1481&auto=format&fit=crop',
      category: 'Cuisine'
    },
    {
      id: 'r5',
      title: 'Décoration Zen',
      description: 'Détails de notre décoration inspirée du Japon traditionnel.',
      image: 'https://images.unsplash.com/photo-1464898644106-6414a5344cba?q=80&w=1470&auto=format&fit=crop',
      category: 'Détails'
    },
    {
      id: 'r6',
      title: 'Terrasse',
      description: 'Notre terrasse pour profiter des beaux jours.',
      image: 'https://images.unsplash.com/photo-1537301636683-5ac98e0466a4?q=80&w=1370&auto=format&fit=crop',
      category: 'Extérieur'
    }
  ],
  events: [
    {
      id: 'e1',
      title: 'Soirée Dégustation',
      description: 'Événement mensuel de découverte de nouveaux plats.',
      image: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=1444&auto=format&fit=crop',
      category: 'Événements'
    },
    {
      id: 'e2',
      title: 'Atelier Sushi',
      description: 'Apprenez à préparer des sushis avec nos chefs.',
      image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1470&auto=format&fit=crop',
      category: 'Ateliers'
    },
    {
      id: 'e3',
      title: 'Soirée Saké',
      description: 'Découverte de différents sakés japonais.',
      image: 'https://images.unsplash.com/photo-1588554686726-b4921662566a?q=80&w=1470&auto=format&fit=crop',
      category: 'Événements'
    },
    {
      id: 'e4',
      title: 'Cérémonie du Thé',
      description: 'Expérience traditionnelle japonaise du thé.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1470&auto=format&fit=crop',
      category: 'Ateliers'
    }
  ]
};

export default function Gallery() {
  const [currentTab, setCurrentTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [direction, setDirection] = useState(0);
  
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  
  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  const handleNext = () => {
    setDirection(1);
    const images = getCurrentImages();
    const currentIndex = images.findIndex(img => img.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };
  
  const handlePrev = () => {
    setDirection(-1);
    const images = getCurrentImages();
    const currentIndex = images.findIndex(img => img.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };
  
  // Obtenir les images pour l'onglet actuel
  const getCurrentImages = () => {
    switch(currentTab) {
      case 0:
        return [...galleryImages.dishes, ...galleryImages.restaurant, ...galleryImages.events];
      case 1:
        return galleryImages.dishes;
      case 2:
        return galleryImages.restaurant;
      case 3:
        return galleryImages.events;
      default:
        return [...galleryImages.dishes, ...galleryImages.restaurant, ...galleryImages.events];
    }
  };
  
  // Variants d'animation pour la grille d'images
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Variants d'animation pour le modal
  const modalVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction * 100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction * -100,
      transition: {
        duration: 0.3
      }
    })
  };
  
  return (
    <>
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Hero Section avec background */}
        <Box 
          sx={{ 
            position: 'relative',
            height: '50vh',
            width: '100%',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1535147380225-1477293df203?q=80&w=1470&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar />
          
          <Container 
            sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 1
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
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 2,
                  fontFamily: 'var(--font-playfair)'
                }}
              >
                Galerie
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white',
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                Découvrez en images notre cuisine, notre restaurant et nos événements
              </Typography>
            </motion.div>
          </Container>
        </Box>
        
        {/* Section Galerie */}
        <Box sx={{ py: 6 }}>
          <Container>
            {/* Tabs pour filtrer la galerie */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
              <Tabs 
                value={currentTab} 
                onChange={handleTabChange} 
                variant="scrollable"
                scrollButtons="auto"
                aria-label="catégories de la galerie"
                sx={{ 
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#D62626',
                  },
                  '& .Mui-selected': {
                    color: '#D62626 !important',
                    fontWeight: 600,
                  }
                }}
              >
                <Tab label="Tout" />
                <Tab label="Nos Plats" />
                <Tab label="Le Restaurant" />
                <Tab label="Événements" />
              </Tabs>
            </Box>
            
            {/* Grille d'images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Grid container spacing={3}>
                  {getCurrentImages().map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                      <motion.div 
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ButtonBase 
                          onClick={() => handleOpenModal(image)}
                          sx={{ 
                            position: 'relative',
                            width: '100%',
                            height: 280,
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: 'rgba(0, 0, 0, 0.4)',
                              opacity: 0,
                              transition: 'opacity 0.3s ease'
                            },
                            '&:hover::after': {
                              opacity: 1
                            },
                            '&:hover .image-info': {
                              opacity: 1,
                              transform: 'translateY(0)'
                            }
                          }}
                        >
                          <img 
                            src={image.image} 
                            alt={image.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                            }}
                          />
                          
                          {/* Tag de catégorie */}
                          <Chip 
                            label={image.category}
                            size="small"
                            sx={{
                              position: 'absolute',
                              top: 16,
                              left: 16,
                              backgroundColor: '#D62626',
                              color: 'white',
                              fontWeight: 500,
                              zIndex: 2
                            }}
                          />
                          
                          {/* Information au survol */}
                          <Box 
                            className="image-info"
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              padding: '20px',
                              color: 'white',
                              textAlign: 'left',
                              opacity: 0,
                              transform: 'translateY(20px)',
                              transition: 'all 0.3s ease',
                              zIndex: 3,
                              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
                            }}
                          >
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                fontWeight: 600,
                                textShadow: '0 1px 2px rgba(0,0,0,0.6)'
                              }}
                            >
                              {image.title}
                            </Typography>
                          </Box>
                        </ButtonBase>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Container>
        </Box>
        
        {/* Modal pour afficher l'image agrandie */}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="galerie-modal-titre"
          aria-describedby="galerie-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }
          }}
        >
          <Box 
            sx={{ 
              outline: 'none',
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {currentImage && (
                <motion.div
                  key={currentImage.id}
                  custom={direction}
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    position: 'relative',
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'white'
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        width: '100%',
                        height: { xs: '60vh', md: '70vh' },
                        maxHeight: '70vh',
                        position: 'relative',
                        backgroundColor: '#000'
                      }}
                    >
                      <img 
                        src={currentImage.image} 
                        alt={currentImage.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </Box>
                    
                    {/* Informations sur l'image */}
                    <Box sx={{ p: 3, backgroundColor: 'white' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography 
                          variant="h5" 
                          id="galerie-modal-titre"
                          sx={{ 
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 600
                          }}
                        >
                          {currentImage.title}
                        </Typography>
                        <Chip 
                          label={currentImage.category}
                          size="small"
                          sx={{
                            ml: 2,
                            backgroundColor: '#D62626',
                            color: 'white',
                            fontWeight: 500
                          }}
                        />
                      </Box>
                      <Typography 
                        variant="body1" 
                        id="galerie-modal-description"
                        color="text.secondary"
                      >
                        {currentImage.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Boutons de navigation */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: { xs: 10, md: 40 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: 10, md: 40 },
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Modal>
        
        <Footer />
      </Box>
    </>
  );
} 