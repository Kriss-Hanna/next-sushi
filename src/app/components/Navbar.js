'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'À propos', path: '/about' },
  { name: 'Galerie', path: '/gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation pour les éléments du menu
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };
  
  // Animation pour le logo
  const logoVariants = {
    normal: { scale: 1 },
    scrolled: { scale: 0.8 }
  };
  
  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        backgroundColor: scrolled ? 'white' : 'transparent',
        color: scrolled ? '#222222' : '#ffffff',
        borderRadius: 0,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0px 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '1rem 0' }}>
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            animate={scrolled ? 'scrolled' : 'normal'}
            transition={{ duration: 0.3 }}
          >
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontFamily: 'var(--font-playfair)',
                fontWeight: 600,
                letterSpacing: '.5px',
                color: scrolled ? '#D62626' : '#ffffff'
              }}
            >
              YahpadSushi
            </Typography>
          </motion.div>
  
          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1.5rem' }}>
            {navItems.map((item, i) => (
              <motion.div 
                key={item.path}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Button 
                  component={Link} 
                  href={item.path}
                  sx={{ 
                    color: 'inherit',
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: pathname === item.path ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: '#D62626',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>
  
          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              border: scrolled ? '1px solid #D62626' : '1px solid white',
              padding: '8px'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
  
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '70%',
            maxWidth: '300px',
            backgroundColor: '#222222',
            color: 'white',
            padding: '2rem 1rem'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <List>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <ListItem 
                    button 
                    component={Link} 
                    href={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      marginBottom: '8px',
                      color: pathname === item.path ? '#D62626' : 'white',
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </motion.div>
        </AnimatePresence>
      </Drawer>
    </AppBar>
  );
} 