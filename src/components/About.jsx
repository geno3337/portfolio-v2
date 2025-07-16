import React from 'react';
import { Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 188, 212, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0); }
`;

// Styled Components
const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0a192f',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2, 2),
}));

const AboutCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#112240',
  borderRadius: '8px',
  padding: theme.spacing(4),
  maxWidth: '900px',
  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  animation: `${fadeIn} 0.8s ease forwards`,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ccd6f6',
  fontFamily: "'Fira Code', monospace",
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(4),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '70px',
    height: '2px',
    backgroundColor: '#64ffda',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: '#64ffda',
  fontWeight: 500,
}));

const SkillPill = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: '#64ffda',
  padding: theme.spacing(0.5, 2),
  borderRadius: '20px',
  margin: theme.spacing(0.5),
  fontSize: '0.8rem',
  fontFamily: "'Fira Code', monospace",
  animation: `${pulse} 2s infinite`,
}));

function About() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const skills = [
    'Java', 'Spring Boot', 'Spring Security', 
    'MySQL', 'MongoDB', 'REST APIs',
    'React.js', 'Material UI', 'JavaScript',
    'Git','GitHub', 'Docker'
  ];

  return (
    <AboutContainer id="about">
      <AboutCard>
        <SectionTitle variant="h4">
          <HighlightText>01.</HighlightText> About Me
        </SectionTitle>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              Hello! I'm <HighlightText>Geno A</HighlightText>, a passionate backend developer with expertise in building scalable and efficient web applications. My journey in software development began after completing my degree in Electronics and Communication Engineering.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              I specialize in creating <HighlightText>robust back-end systems</HighlightText> using Java and Spring ecosystem. My experience includes developing secure, high-performance solutions that handle complex business logic while maintaining clean, maintainable code.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              Beyond backend development, I have experience with <HighlightText>frontend technologies</HighlightText> like React.js, which helps me build complete, integrated solutions. I'm particularly interested in optimizing system performance and ensuring scalability.
            </Typography>
            
            {!isSmallScreen && (
              <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
                Here are a few technologies I've been working with recently:
              </Typography>
            )}
          </Grid>
          
          <Grid item xs={12} md={6}>
            {!isSmallScreen && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}>
                {skills.map((skill, index) => (
                  <SkillPill key={index}>{skill}</SkillPill>
                ))}
              </Box>
            )}
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              I'm currently expanding my knowledge in <HighlightText>web-socket</HighlightText> to build low-latency, bi-directional communication systems for real-time features like chat, collaboration, and live status tracking. I believe in continuous learning and staying updated with industry best practices.
            </Typography>
            
            <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6 }}>
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always excited to collaborate on challenging projects that push my boundaries.
            </Typography>
            
            {isSmallScreen && (
              <>
                <Typography color="#8892b0" paragraph sx={{ lineHeight: 1.6, mt: 2 }}>
                  Here are a few technologies I've been working with recently:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {skills.slice(0, 6).map((skill, index) => (
                    <SkillPill key={index}>{skill}</SkillPill>
                  ))}
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;