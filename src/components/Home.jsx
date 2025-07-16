import React from 'react';
import { Container, Typography, Button, Box, Grid, useMediaQuery } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import me from '../assets/me.png';
import { styled, keyframes } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';

// Animation for the floating image
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  // padding: theme.spacing(4, 0),
  overflow: 'hidden',
}));

const HeroImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
  boxShadow: '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
  animation: `${float} 6s ease-in-out infinite`,
  filter: 'grayscale(20%) contrast(1) brightness(90%)',
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%) contrast(1) brightness(100%)',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '300px',
    marginTop: theme.spacing(4),
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  marginTop: theme.spacing(3),
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: '#64ffda',
  border: '1px solid #64ffda',
  fontFamily: "'Fira Code', monospace",
  fontSize: '0.9rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-3px)',
  },
}));

const GreetingText = styled(Typography)(({ theme }) => ({
  color: '#64ffda',
  fontFamily: "'Fira Code', monospace",
  marginBottom: theme.spacing(1),
  fontSize: '1.1rem',
}));

const NameText = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  fontWeight: 700,
  lineHeight: 1.1,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: '#8892b0',
  maxWidth: '540px',
  lineHeight: 1.5,
  marginBottom: theme.spacing(3),
}));

function Home() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <HeroContainer id="home">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
              <GreetingText variant="subtitle1">
                Hi, my name is
              </GreetingText>
              <NameText variant="h2">
                Geno A.
              </NameText>
              <NameText variant="h3" sx={{ color: '#8892b0' }}>
                I build things for the web.
              </NameText>
              <DescriptionText variant="body1">
                I'm a passionate software engineer specializing in full-stack development.
                Currently focused on building robust back-end systems using Java, Spring Boot,
                and MySQL, while also expanding my expertise in modern front-end technologies.
              </DescriptionText>
              <Box sx={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start' }}>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                  <HeroButton variant="outlined" endIcon={<EastIcon />}>
                    Learn More About Me
                  </HeroButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <HeroImage
                  src={me}
                  alt="Geno A"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </HeroContainer>
  );
}

export default Home;