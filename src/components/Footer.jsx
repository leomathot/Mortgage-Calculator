import React from 'react'
import { Box, Container, Typography, Stack, Grid } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{bgcolor: '#202020'}}>
      <Container  maxWidth='lg' sx={{pt: 6, pb: 6}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack
              gap={3}
              justifyContent={'center'}
              alignItems={'center'}
              border={1}
              borderRadius={3}
              borderColor='#555555'
              padding={5}>
              <Typography>Leonardo Mathot</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              gap={3}
              justifyContent={'center'}
              alignItems={'center'}
              border={1}
              borderRadius={3}
              borderColor='#555555'
              padding={5}>
              <Typography>Credits</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer