import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Grid2';

export default function NavBar(): React.JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #ddd' }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: '#4a4a4a' }}>
        <Toolbar sx={{ justifyContent: 'center', gap: '10vw', padding: '10px 40px' }}>
          <div style={{ textAlign: 'left' }}>
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
            sx={{
              fontWeight: 'bold',
              color: '#6e1c3a',
              fontSize: '48px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            «Софьино Парк»
          </Typography>

          <Box sx={{ textAlign: 'right' }}>
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
        </Toolbar>

        <Box sx={{ backgroundColor: 'white', padding: '10px 0', borderTop: '1px solid #ddd' }}>
          <Grid2 container justifyContent="center" spacing={2} component="div">
            {['О ПОСЕЛКЕ', 'ПРЕИМУЩЕСТВА', 'НАШИ КОТТЕДЖИ', 'НАШИ ПРОЕКТЫ', 'КОНТАКТЫ'].map(
              (text) => (
                <Grid2 key={text} component="div">
                  <Button sx={{ color: '#6e1c3a', fontWeight: 'bold', fontSize: '14px' }}>
                    {text}
                  </Button>
                </Grid2>
              ),
            )}
          </Grid2>
        </Box>
      </AppBar>
    </Box>
  );
}
