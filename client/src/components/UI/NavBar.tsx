import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

export default function NavBar(): React.JSX.Element {
  const navLinks = [
    { text: 'О ПОСЕЛКЕ', link: '/area-description' },
    { text: 'ПРЕИМУЩЕСТВА', link: '/company-description' },
    { text: 'НАШИ КОТТЕДЖИ', link: '/houses' },
    { text: 'НАШИ ПРОЕКТЫ', link: '/ready-company-projects' },
    { text: 'КОНТАКТЫ', link: '/contacts' },
  ];

  return (
    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #ddd' }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: '#4a4a4a' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 40px' }}>
          <div style={{ textAlign: 'left', minWidth: '250px' }}>
            <Typography
              variant="body1"
              sx={{ color: '#6e1c3a', fontSize: '16px', fontWeight: 'bold' }}
            >
              Откройте для себя
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#6e1c3a', fontSize: '16px', fontWeight: 'bold' }}
            >
              идеальный дом вашей мечты!
            </Typography>
          </div>

          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              color: '#6e1c3a',
              fontSize: '48px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            «Софьино Парк»
          </Typography>
          <div style={{ minWidth: '250px' }}>
            <Box sx={{ textAlign: 'right', minWidth: '4wh' }}>
              <Typography
                variant="body1"
                sx={{ color: '#6e1c3a', fontSize: '16px', fontWeight: 'bold' }}
              >
                +7 (915) 141-97-77
              </Typography>
              <Typography variant="body1" sx={{ color: '#2e4d39', fontSize: '16px' }}>
                sofinopark@yandex.ru
              </Typography>
            </Box>
          </div>
        </Toolbar>

        <Box sx={{ backgroundColor: 'white', padding: '10px 0', borderTop: '1px solid #ddd' }}>
          <Grid2 container justifyContent="center" spacing={2} component="div">
            {navLinks.map(({ text, link }) => (
              <Grid2 key={text} component="div">
                <Button
                  component={Link}
                  to={link}
                  sx={{ color: '#6e1c3a', fontWeight: 'bold', fontSize: '14px' }}
                >
                  {text}
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </AppBar>
    </Box>
  );
}
