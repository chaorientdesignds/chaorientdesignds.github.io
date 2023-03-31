import { useState } from 'react'
import { AppBar, Container, Toolbar, Box, Button, Typography, useScrollTrigger, Slide, Fade, Fab } from '@mui/material'
import { Route, Routes, Link, useLocation, } from 'react-router-dom'
import Overview from './components/Overview';
import Gallery from './components/Gallery';
import Codebook from './components/Codebook';
import { AnimatePresence } from "framer-motion";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


//NOTE: wrap the layout, and the router

const pages = ['Overview', 'Gallery', 'Codebook']
const pageLinks = {
  'Overview': '/',
  'Gallery': '/gallery',
  'Codebook': '/codebook'
}

// <Route path="/gallery/:id"></Route> dynamic route
function App(props) {
  const location = useLocation();

  return (
    <>
      <TitleBar />
      <div id='content-container'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Overview />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/codebook' element={<Codebook />} />
          </Routes>
        </AnimatePresence>
      </div>
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined, disableHysteresis: true, threshold: 100, });

    
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#app-bar',);
    if (anchor) {
      anchor.scrollIntoView({block: 'center', behavior: 'smooth'});
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: '4rem', right: '3rem' }}>
        {children}
      </Box>
    </Fade>
  )
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined})

  return (
    <Slide appear = {false} direction = 'down' in={ !trigger }>
      { children }
    </Slide >
  )
}

function TitleBar(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar position='static' id='app-bar'>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap sx={{mr: 12, ml: 12, display: { xs: 'none', md: 'flex' },}}>Character-oriented Design for Visual Data Storytelling</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, mr: 3, color: 'white', display: 'block' }}
                component={Link} to={pageLinks[page]}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default App
