import React from 'react'
import { Box, Container, Typography, Stack, Grid } from '@mui/material'
import '../app.css'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#202020' }}>
      <Container maxWidth='lg' sx={{ pt: 6, pb: 6 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack
              gap={3}
              justifyContent={'center'}
              alignItems={'center'}
              padding={2}>
              <Typography><a href='https://github.com/leomathot' target='_blank'>Leonardo Mathot</a></Typography>
              <Typography><a href='https://github.com/leomathot/Mortgage-Calculator' target='_blank'>Project Repository</a></Typography>
              <Typography><span>leomathot21@gmail.com</span></Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              gap={3}
              justifyContent={'center'}
              alignItems={'center'}
              padding={2}>
              <Typography>Project based on tutorial made by Joy Shaheb</Typography>
              <Stack justifyContent={'left'}>
                <Typography variant='subtitle2'>
                  <a href='https://github.com/JoyShaheb/mortgage-calculator-tutorial' target='_blank'>Joy Shaheb's Project Repository</a>
                </Typography>
                <Typography variant='subtitle2'>
                  <a href='https://www.youtube.com/watch?v=uluphP4xXD8' target='_blank'>Joy Shaheb's YouTube Video Tutorial</a>
                </Typography>
                <Typography variant='subtitle2'>
                  <a href='https://mortgage-calculator-tutorial.vercel.app/' target='_blank'>Joy Shaheb's Project Live Demo</a>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer