'use client';

import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Tab, 
  Tabs,
  Chip,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Données du menu
const menuItems = {
  sushis: [
    {
      id: 's1',
      name: 'Nigiri Mix',
      description: 'Assortiment de 8 nigiris : saumon, thon, daurade, crevette, anguille, poulpe, maquereau et œuf.',
      price: '18,50',
      image: 'https://images.unsplash.com/photo-1676037150408-4b59a542f407?q=80&w=1470&auto=format&fit=crop',
      spicy: false,
      vegetarian: false,
      bestseller: true
    },
    {
      id: 's2',
      name: 'Maki Saumon',
      description: '6 pièces de maki au saumon frais et avocat.',
      price: '9,90',
      image: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?q=80&w=1470&auto=format&fit=crop',
      spicy: false,
      vegetarian: false,
      bestseller: true
    }
  ],
  platsChauds: [
    {
      id: 'p1',
      name: 'Ramen au Porc',
      description: 'Bouillon riche et savoureux avec des nouilles de blé, porc char siu, œuf mollet, algues et légumes.',
      price: '16,90',
      image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1470&auto=format&fit=crop',
      spicy: false,
      vegetarian: false,
      bestseller: true
    },
    {
      id: 'p2',
      name: 'Tempura Mix',
      description: 'Assortiment de crevettes et légumes en tempura croustillante, servi avec sauce tentsuyu.',
      price: '14,50',
      image: 'https://images.unsplash.com/photo-1628914085739-19a33a2a9d99?q=80&w=1470&auto=format&fit=crop',
      spicy: false,
      vegetarian: false,
      bestseller: false
    }
  ],
  desserts: [
    {
      id: 'd1',
      name: 'Mochi Glacé',
      description: 'Petites boules de glace enrobées de pâte de riz glutineux. Assortiment de 3 parfums : thé matcha, sésame noir et yuzu.',
      price: '8,50',
      image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?q=80&w=1475&auto=format&fit=crop',
      spicy: false,
      vegetarian: true,
      bestseller: true
    }
  ],
  boissons: [
    {
      id: 'b1',
      name: 'Thé Vert Japonais',
      description: 'Thé vert sencha traditionnel japonais.',
      price: '4,50',
      image: 'https://images.unsplash.com/photo-1563836797751-426312634e5b?q=80&w=1470&auto=format&fit=crop',
      spicy: false,
      vegetarian: true,
      bestseller: false
    }
  ]
};

// Composant MenuItem simplifié
const MenuItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '12px', 
          right: '12px',
          zIndex: 2,
          display: 'flex',
          gap: '8px'
        }}
      >
        {item.bestseller && (
          <Chip 
            label="Best-seller" 
            color="primary" 
            size="small"
            sx={{ 
              backgroundColor: '#D62626',
              fontWeight: 500,
            }}
          />
        )}
        {item.spicy && (
          <Chip 
            label="Épicé" 
            size="small"
            sx={{ 
              backgroundColor: '#FF9800',
              color: 'white',
              fontWeight: 500
            }}
          />
        )}
        {item.vegetarian && (
          <Chip 
            label="Végétarien" 
            size="small"
            sx={{ 
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 500
            }}
          />
        )}
      </Box>
      
      <Box sx={{ position: 'relative', height: '200px' }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.name}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: 'var(--font-playfair)',
              fontWeight: 600
            }}
          >
            {item.name}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#D62626',
              fontWeight: 600
            }}
          >
            {item.price} €
          </Typography>
        </Box>
        <Divider sx={{ my: 1.5 }} />
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Menu() {
  const [currentTab, setCurrentTab] = useState(0);
  
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  
  // Obtenir les items du menu pour l'onglet actuel
  const getMenuItems = () => {
    switch(currentTab) {
      case 0:
        return menuItems.sushis;
      case 1:
        return menuItems.platsChauds;
      case 2:
        return menuItems.desserts;
      case 3:
        return menuItems.boissons;
      default:
        return menuItems.sushis;
    }
  };
  
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box 
        sx={{ 
          position: 'relative',
          height: '50vh',
          width: '100%',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1607301405398-02e872d80415?q=80&w=1470&auto=format&fit=crop)',
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
              Notre Menu
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
              Découvrez nos préparations japonaises authentiques élaborées avec des ingrédients frais et de qualité
            </Typography>
          </motion.div>
        </Container>
      </Box>
      
      <Box sx={{ py: 8 }}>
        <Container>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
            <Tabs 
              value={currentTab} 
              onChange={handleTabChange} 
              variant="scrollable"
              scrollButtons="auto"
              aria-label="catégories du menu"
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
              <Tab label="Sushis & Makis" />
              <Tab label="Plats Chauds" />
              <Tab label="Desserts" />
              <Tab label="Boissons" />
            </Tabs>
          </Box>
          
          <motion.div
            key={currentTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={4}>
              {getMenuItems().map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <MenuItem item={item} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      
      <Box 
        sx={{ 
          py: 5,
          backgroundColor: '#F8F8F8',
          textAlign: 'center',
          mt: 'auto'
        }}
      >
        <Container>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
            <strong>Information allergènes :</strong> Nos plats peuvent contenir des allergènes. N&apos;hésitez pas à nous consulter pour toute question concernant les ingrédients.
            Tous les prix sont TTC et service compris.
          </Typography>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
} 